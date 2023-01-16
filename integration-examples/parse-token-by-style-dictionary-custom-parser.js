const StyleDictionary = require("style-dictionary");

/**
 * Parser for flatten composite token values of specific type, such as "boxShadow", "typography", "composition".
 * How to use: set `setTokenRecursiveParserForTokensStudio()` in your config.js and execute it.
 */

function setTokenRecursiveParserForTokensStudio() {
  const parseTargetValueTypeList = ["boxShadow", "typography", "composition"];

  const flattenCompositeTokenValues = (parsedToken) => {
    const findParseTargetValueTypeRecursively = ([, val]) => {
      const nextKeys = Object.keys(val);
      if (nextKeys.includes("type")) {
        return parseTargetValueTypeList.includes(val.type);
      }

      return Object.entries(val).some((entry) =>
        findParseTargetValueTypeRecursively(entry)
      );
    };
    const tokenEntries = Object.entries(parsedToken);
    const tokenEntriesFilteredByParseTargetType = tokenEntries.filter(
      (entry) => {
        return findParseTargetValueTypeRecursively(entry);
      }
    );

    const result = { ...parsedToken };

    if (!tokenEntriesFilteredByParseTargetType.length) return result;

    const flattenTokenRecursively = (
      [propertyName, propertyValue],
      tokenKeyName
    ) => {
      if (propertyName === "type") return;
      if (propertyName !== "value") {
        return Object.entries(propertyValue).forEach((entry) => {
          const suffix =
            entry[0] === "value" ? tokenKeyName : `${tokenKeyName}-${entry[0]}`;
          return flattenTokenRecursively(entry, suffix);
        });
      }
      Object.entries(propertyValue).forEach(([key, value]) => {
        const keyName = `${tokenKeyName}-${key}`;
        Object.assign(result, {
          [keyName]: { value },
        });

        delete result[tokenKeyName];
      });
    };

    tokenEntriesFilteredByParseTargetType.forEach((tokenEntry) =>
      flattenTokenRecursively(tokenEntry, tokenEntry[0])
    );

    return result;
  };

  StyleDictionary.registerParser({
    pattern: /\.json$/,
    parse: ({ contents }) => {
      const parsedToken = JSON.parse(contents);

      const flattenValues = flattenCompositeTokenValues(parsedToken);
      return {
        ...flattenValues,
      };
    },
  });
}

module.exports = setTokenRecursiveParserForTokensStudio;
