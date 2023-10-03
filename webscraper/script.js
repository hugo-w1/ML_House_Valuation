const puppeteer = require("puppeteer");
const fs = require("fs");


var pagenum = 0;
var scrapedArticles = 0;
var kommunNum = 17765; // start: 17765    end: 18054 
var data = ""; 
var pages = 0;

var nextpage = 0;

async function scrape() {
    if (pagenum == 0) {
        pagenum++;

        globalThis.browser = await puppeteer.launch({
            headless: true,
            defaultViewport: null,
        });
    }

    const page = await browser.newPage();
    await page.goto(`https://www.hemnet.se/salda/bostader?item_types%5B%5D=villa&location_ids%5B%5D=${kommunNum}&page=${pagenum}}`);

    if(pagenum == 1){
        page.setDefaultTimeout(300);
    var element = await page.waitForSelector("#result > div:nth-child(3) > div.result-pagination > div > div:nth-child(5) > a");
    var pages2 = await page.evaluate(element => element.textContent, element);
    
    pages = parseInt(pages2);
    console.log(pages);
    }
    page.setDefaultTimeout(100);


    nextpage = 0;

    for (let i = 2; i < 60; i++) {
        try {

            var element = await page.waitForSelector("#search-results > li:nth-child(" + i + ") > a > div > div.hcl-padded-container.hcl-flex--container.hcl-flex--direction-column > div.sold-property-listing__location > div")
            var address = await page.evaluate(element => element.textContent, element);

            address = address.replace(/\s/g, '');
            address = address.replace("VillaVilla", " ").split(",")[1];

            address = address.split("kommun")[0];
            address += " kommun";

            var element = await page.waitForSelector("#search-results > li:nth-child(" + i + ") > a > div > div.hcl-padded-container.hcl-flex--container.hcl-flex--direction-column > div:nth-child(3) > div:nth-child(1) > div.sold-property-listing__subheading.sold-property-listing__area")
            var bodyinfo = await page.evaluate(element => element.textContent, element);

            bodyinfo = bodyinfo.replace(/\s/g, '');


            if (bodyinfo.includes("+")) {
                var houseArea = bodyinfo.split("+")[0];
            } else {
                var houseArea = bodyinfo.split("m²")[0];
            }

            var rooms = bodyinfo.split("m²")[1].replace("rum", "");

            var element = await page.waitForSelector("#search-results > li:nth-child(" + i + ") > a > div > div.hcl-padded-container.hcl-flex--container.hcl-flex--direction-column > div:nth-child(3) > div:nth-child(5) > span:nth-child(1)")
            var price = await page.evaluate(element => element.textContent, element);

            price = price.replace(/\D/g, '');

            var element = await page.waitForSelector("#search-results > li:nth-child(" + i + ") > a > div > div.hcl-padded-container.hcl-flex--container.hcl-flex--direction-column > div:nth-child(3) > div:nth-child(1) > div.sold-property-listing__land-area");
            var landArea = await page.evaluate(element => element.textContent, element);

            landArea = landArea.replace(/\D/g, '');


            data = `${address};${houseArea};${rooms};${landArea};${price}\n`;

            if (address != "undefined") {

                fs.appendFile("data.csv", data, (err) => {
                    if (err) throw err;
                });

                scrapedArticles++;
                console.log(scrapedArticles);
            }

        } catch (error) {
            //console.log(error);'
            nextpage++;
            if(nextpage > 30){
                kommunNum++;
                pagenum = 0;
                break;
            }
        }
    }
    if(pagenum >= pages){
        kommunNum++;
        pagenum = 0;
    }
    pagenum++;
    console.log("######## " +pagenum + "/" + pages + " ######## " + (18054 - kommunNum) + " Left"   + " | " + kommunNum );

    scrape();
}

scrape();