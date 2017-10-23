function getList(operations) {

  let result = {};

  for (let i = 0; i < operations.length; i++) {

    if (result[operations[i].date] === undefined) {
      result[operations[i].date] = { 'operations': [], 'links': [] };
    };

    // Заполняем массив операций
    result[operations[i].date]['operations'].push(operations[i]);

    // Заполняем массив ссылок
    let links = operations[i]['links'];
    for (let j = 0; j < links.length; j++) {
      result[operations[i].date]['links'].push(links[j]);
    };
  };

  const resultSort = {};

    Object.keys(result)
          .sort()
          .reverse()
          .map(
              function(key) {
                  resultSort[key] = result[key];
              }
          );

    console.log(resultSort);

    return resultSort;

}

module.exports = {
  getList: getList
}
