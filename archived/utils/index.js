// Credit: https://github.com/Deborah-Digges/gatsby-site/blob/master/src/util/index.js

module.exports = {
  extractMetadataFromFilename: fileName => {
    const [year, month, date, ...title] = fileName.substring().split("-")
    return {
      date: `${date}/${month}/${year}`,
      slug: `${year}/${month}/${title.join("-")}`,
    }
  },
}
