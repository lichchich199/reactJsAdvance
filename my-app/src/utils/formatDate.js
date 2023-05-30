export const formatDate = (dateString) => {
    if (dateString) {
      var date = new Date(dateString)
      if (isNaN(date.getTime())) {
        return dateString
      }
      var dateConvert = date.getFullYear() + "-" + (date.getMonth() >= 9 ? date.getMonth() + 1 : ('0' + (date.getMonth() + 1)) ) + "-" + date.getDate()
      return dateConvert
    }
    return ""
  }
  