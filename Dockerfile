FROM node:18-alpine AS base


# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app

# Note this could cause an issue on older docker versions
COPY --exclude=./public  ./ /app/
# Build the project
RUN yarn install --frozen-lockfile --immutable
RUN yarn run build

FROM base AS runner
WORKDIR /app



# Don't run production as root
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=installer --chown=nextjs:nodejs /app/.next/ ./.next/
COPY --from=installer --chown=nextjs:nodejs /app/package.json ./package.json
# Needed for the next bin files
COPY --from=installer --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY  --chown=nextjs:nodejs ./public ./public

EXPOSE 3000
ENTRYPOINT [ "yarn","run","start" ] 
