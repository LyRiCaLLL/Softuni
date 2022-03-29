function sortArr(array) {
    let secondaryCriteria = array.sort();
    let primaryCriteria = secondaryCriteria.sort((a, b) =>a.length-b.length);
    console.log(primaryCriteria.join('\n'));
  }sortArr(['alpha', 'beta', 'gamma'])