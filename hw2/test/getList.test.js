let getList = require('../src/getList').getList;

const testIn = [{
    "date": "2017-07-31",
    "amount": "5422",
    "links": [{
      "name": "link1",
      "href": "http://google.com",
      "method": "GET"
    }]
  },
  {
    "date": "2017-08-31",
    "amount": "121",
    "links": [{
      "name": "link5",
      "href": "https://templates",
      "method": "POST"
    }]
  },
  {
    "date": "2017-07-31",
    "amount": "111",
    "links": [{
        "name": "link3",
        "href": "http://googasafafsfle.com",
        "method": "GET"
      },
      {
        "name": "link2",
        "href": "https://amazon.com",
        "method": "GET"
      }
    ]
  },
  {
    "date": "2017-07-31",
    "amount": "34343",
    "links": [{
      "name": "link2",
      "href": "https://amazon.com",
      "method": "GET"
    }]
  },
  {
    "date": "2017-08-31",
    "amount": "5422",
    "links": [{
      "name": "link1",
      "href": "https://testsense.alfabank.ru/marathon/ui/#/apps/%2Fplatform%2Fui%2Ftemplates",
      "method": "GET"
    }]
  },
];


const testOut =
{
    "2017-08-31": {
        "operations": [
            {
                "date": "2017-08-31",
                "amount": "5422",
                "links": [
                  {
                    "name": "link1",
                    "href": "https://testsense.alfabank.ru/marathon/ui/#/apps//platform/ui/templates",
                    "method": "GET"
                  }
                ]
            }
        ],
        "links": [
            {
              "name": "link1",
              "href": "https://testsense.alfabank.ru/marathon/ui/#/apps//platform/ui/templates",
              "method": "GET"
            }
        ]
    },
    "2017-07-31": {
        "operations": [
            {
                "date": "2017-07-31",
                "amount": "5422",
                "links": [
                  {
                    "name": "link1",
                    "href": "http://google.com",
                    "method": "GET"
                  }
                ]
            },
            {
                "date": "2017-07-31",
                "amount": "34343",
                "links": [
                  {
                    "name": "link2",
                    "href": "https://amazon.com",
                    "method": "GET"
                  }
                ]
            }
        ],
        "links": [
            {
              "name": "link1",
              "href": "http://google.com",
              "method": "GET"
            },
            {
              "name": "link2",
              "href": "https://amazon.com",
              "method": "GET"
            }
        ]
    }
}


describe('should work', function() {

  it('should return object with date keys and operations list with unique link within date', function() {
    expect(getList(testIn)).toEqual(testOut);
  });

});
