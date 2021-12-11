export class DataTableHelpers {
  /**
   * @param{JsonArrays} objArrays => Arrays to sort
   * @param{string} searchText
   * @returns{JsonArrays}
   */
  static searchInput = (objArrays, searchText) => {
    if (searchText === "") return [...objArrays];

    let newObjArr = objArrays?.filter(dataObj => {
      for (var key in dataObj) {
        //iterating over all the obj values
        let dtObj = String(dataObj[key]);
        if (dtObj.toLowerCase().includes(searchText)) {
          return true;
        }
      }
    });
    return [...newObjArr];
  };

  /**
  Sort Table based on the column json Key
  @param{jsonArray} arr=> array to sort
  @param{string} key=>Json key to sort the array with
  @param{bool} sortByString=> sort by alphabet(chars)  or by digits(numbers)
  @returns{jsonArray}
  */
  static sortObjArrByColumn = (arr, key, sortByString) => {
    if (arr === null || arr === undefined) return;
    // Checks if the current array column is sorted or not
    function isSorted(arr) {
      var i = 0;
      var last = arr.length - 1;
      return (function check() {
        return i >= last || (arr[i] <= arr[++i] && check());
      })();
    }
    // extract numbers from string excluding the string chars
    const parseNum = str => +str.replace(/[^.\d]/g, "");

    // sort characters differently from numbers
    if (sortByString) {
      let keyArrays = [...new Set(arr.map(it => it[key]))]; // I added distinct feature
      //sort by chars
      if (isSorted(keyArrays)) {
        return [...arr].sort((a, b) => b[key]?.localeCompare(a[key])); //DESC
      } else {
        return [...arr].sort((a, b) => a[key]?.localeCompare(b[key])); //ASC
      }
    } else {
      // get ints from keys to check is it's sorted ASC or DESC
      let keyArrays = arr.map(it => parseNum(it[key]));
      //sort by numbers
      if (isSorted(keyArrays)) {
        return [...arr].sort((a, b) => parseNum(b[key]) - parseNum(a[key])); //DESC
      } else {
        return [...arr].sort((a, b) => parseNum(a[key]) - parseNum(b[key])); //ASC
      }
    }
  };

  /**
   * @param {HTMLDoc} event
   * @param {String} link
   */
  static copyLink = (event, link) => {
    var dummy = document.createElement("textarea");
    // to avoid breaking orgain page when copying more words
    // cant copy when adding below this code
    // dummy.style.display = 'none'
    document.body.appendChild(dummy);
    //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
    dummy.value = link;
    dummy.select();
    dummy.setSelectionRange(0, 99999); /* For mobile devices */
    document.execCommand("copy");
    document.body.removeChild(dummy);

    event.target.innerHTML = "copied";
    setTimeout(function() {
      event.target.innerHTML = "&nbsp;copy&nbsp;&nbsp;";
    }, 2000);
  };
  /**
   * @param {String} link
   */
  static previewlink = link => {
    const newWindow = window.open(link, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
}
