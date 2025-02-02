FROM node:18-alpine AS base


# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs

# We should be excluding the public directory here
COPY --chown=nextjs:nodejs  ./ /app/

# Build the project
RUN yarn install --frozen-lockfile --immutable
RUN yarn run build
USER nextjs


EXPOSE 3000
ENTRYPOINT [ "yarn","run","start" ] 
