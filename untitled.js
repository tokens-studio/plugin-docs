// src/next.config.ts
import path from "path";
import withVideos from "next-videos";
import nextra from "nextra";
import remarkMdxDisableExplicitJsx from "remark-mdx-disable-explicit-jsx";
import nextBundleAnalyzer from "@next/bundle-analyzer";

// src/underscore-redirects.ts
import { writeFile } from "fs/promises";
import { join } from "path";
var RunPromiseWebpackPlugin = class {
  constructor(asyncHook) {
    this.asyncHook = asyncHook;
  }
  apply(compiler) {
    compiler.hooks.beforeCompile.tapPromise("RunPromiseWebpackPlugin", this.asyncHook);
  }
};
var isWarningPrinted = false;
function applyUnderscoreRedirects(config, meta) {
  config.plugins.push(
    new RunPromiseWebpackPlugin(async () => {
      const outDir = meta.dir;
      const outFile = join(outDir, "./public/_redirects");
      try {
        const redirects = meta.config.redirects ? Array.isArray(meta.config.redirects) ? meta.config.redirects : await meta.config.redirects() : [];
        if (redirects.length === 0) {
          if (!isWarningPrinted) {
            console.warn(
              '[@theguild/components] No redirects defined, no "_redirect" file is created!'
            );
            isWarningPrinted = true;
          }
          return;
        }
        const redirectsTxt = redirects.map((r) => `${r.source} ${r.destination} ${r.permanent ? 301 : 302}`).join("\n");
        await writeFile(outFile, redirectsTxt);
      } catch (error) {
        throw new Error(
          `Failed to generate "_redirects" file during build: ${error.message}`
        );
      }
    })
  );
}

// src/next.config.ts
var defaultRemarkPlugins = [
  [
    // replace <iframe />, <video />, <source /> tags in MDX
    remarkMdxDisableExplicitJsx,
    { whiteList: ["iframe", "video", "source"] }
  ]
];
var warnings = /* @__PURE__ */ new Set();
var rehypeCheckFrontMatter = () => (_ast, file) => {
  const { description } = file.data.frontMatter;
  const filePath = path.relative(process.cwd(), file.history[0]);
  if (!filePath.includes("/pages/"))
    return;
  function warnOnce(message) {
    const msg = `[@theguild/components] SEO issue in "${filePath}": ${message}`;
    if (!warnings.has(msg)) {
      warnings.add(msg);
      console.warn(msg);
    }
  }
  if (!description) {
    warnOnce("The description is missing");
  } else if (description.length > 160) {
    warnOnce(
      `The description "${description}" is too long, should be less than 160 characters, not ${description.length}`
    );
  } else if (description.length < 50) {
    warnOnce(
      `The description "${description}" is too short, should be more than 50 characters, not ${description.length}`
    );
  }
};
function withGuildDocs({
  nextraConfig,
  ...nextConfig
} = {}) {
  if (nextConfig.webpack?.toString().includes("applyUnderscoreRedirects")) {
    throw new Error(
      "`applyUnderscoreRedirects` in `nextConfig.webpack` was already configured, remove it from your config"
    );
  }
  const withBundleAnalyzer = nextBundleAnalyzer({
    enabled: process.env.ANALYZE === "true"
  });
  const withNextra = nextra({
    theme: "nextra-theme-docs",
    defaultShowCopyCode: true,
    mdxOptions: {
      remarkPlugins: defaultRemarkPlugins,
      // Should be rehype since frontMatter is attached in remark plugins
      rehypePlugins: [rehypeCheckFrontMatter]
    },
    search: {
      codeblocks: true
    },
    ...nextraConfig,
    themeConfig: nextraConfig?.themeConfig || "./theme.config.tsx"
  });
  const siteUrl = process.env.SITE_URL || "";
  return withBundleAnalyzer(
    withVideos(
      withNextra({
        reactStrictMode: true,
        poweredByHeader: false,
        basePath: process.env.NEXT_BASE_PATH,
        ...nextConfig,
        env: {
          SITE_URL: siteUrl,
          ...nextConfig.env
        },
        webpack(config, meta) {
          applyUnderscoreRedirects(config, meta);
          return nextConfig.webpack?.(config, meta) || config;
        },
        experimental: {
          // TODO: Provoke white flash ⚪️💥 on initial loading with dark theme
          // optimizeCss: true,
          ...nextConfig.experimental
        },
        images: {
          unoptimized: true,
          // doesn't work with `next export`,
          ...nextConfig.images
        }
      })
    )
  );
}
export {
  defaultRemarkPlugins,
  withGuildDocs
};