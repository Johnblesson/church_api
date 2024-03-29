const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.url === '/') {
      fs.readFile(
        path.join(__dirname, 'public', 'index.html'),
        (err, content) => {
          if (err) throw err;
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content);
        }
      );
    }
  
    if (req.url === '/api/churches') {
      const churches = [
                {
                    "id": 1,
                    "name": "Zion Praise Tabernacle",
                    "address": "Back of Limkokwing University",
                    "logo": "https://www.zionpraisetabernacle.com/assets/img/pg.png",
                    "contact" : "+23278852433",
                    "location" : "Hill Station"
                },
                {
                    "id": 2,
                    "name": "Faith Healing Bible Church HQ",
                    "address": "6 Walmsley Lane, Off Berry Street",
                    "logo" : "https://yt3.googleusercontent.com/ytc/AOPolaTHz7AnqfwNlBj6e145ECNGqeMLsEGmwOVtfNjX=s900-c-k-c0x00ffffff-no-rj",
                    "contact" : "+23273433285",
                    "location" : "Model Area"
                },
                {
                    "id": 3,
                    "name": "New Life Ministries HQ",
                    "address": "Miracle City, Ross Road,",
                    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJNRs6t03Q6n9_KaXyWlt3yEqDCDFHMoKdiK9XcSFgfMCfZCMztuddT5TKN2P2n86FT60&usqp=CAU",
                    "contact" : "+23276668616",
                    "location" : "Cline Town"
                },
                {
                    "id": 4,
                    "name": "Living Word of Faith Outreach Ministries Int. HQ",
                    "address": "5 & 7 Victoria Street",
                    "logo" : "https://sierrachurch.vercel.app/images/LivingWordOfFaith.jpg",
                    "contact" : "+23230900007",
                    "location" : "St. John Area"
                },
                {
                    "id": 5,
                    "name": "Harvest Intercontinental Cathedral H/Q",
                    "address": "156 Circular Road",
                    "logo" : "https://sierrachurch.vercel.app/images/HarvestInter.png",
                    "contact" : "+23276622073",
                    "location" : "Circular Road Area"
                },
                {
                    "id": 6,
                    "name": "Flaming Evangelical Ministries Int'l HQ",
                    "address": "29e Ascension Town Road",
                    "logo": "https://sierrachurch.vercel.app/images/flaming.jpg",
                    "contact" : "+23277041550",
                    "location" : "Ascension Town"
                },
                {
                    "id": 7,
                    "name": "Jesus Is Lord Ministries HQ",
                    "address": "Tower Hill",
                    "logo" : "https://sierrachurch.vercel.app/images/dove.jpg",
                    "contact" : "+23276773431",
                    "location" : "Tower Hill"
                },
                {
                    "id": 8,
                    "name": "Shalom Ministries SL H/Q",
                    "address": "City of Shalom, Mount Gerizim",
                    "logo" : "./images/dove.jpg",
                    "contact" : "000 000 000 000",
                    "location" : "Regent"
                },
                {
                    "id": 9,
                    "name": "God's End Time Prophetic Ministries Int'l",
                    "address": "1 Johnson drive, Ojuku junction",
                    "logo" : "https://scontent.ffna3-1.fna.fbcdn.net/v/t1.6435-9/99136708_1142773256072396_7317126892165791744_n.jpg?stp=dst-jpg_p640x640&_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_ohc=jdHOFaFJOXEAX9TJdEY&_nc_ht=scontent.ffna3-1.fna&oh=00_AfAI6Gmc0_vfXKcU02jU7sOtgDUCFNQrDZtNXcfr29izsA&oe=64F8BF61",
                    "contact" : "+23276926722",
                    "location" : "Allen Town"
                },
                {
                    "id": 10,
                    "name": "Jesus' Glory Int'l Ministries",
                    "address": "2 Percy Street, Off Charles Street",
                    "logo" : "https://sierrachurch.vercel.app/images/dove.jpg",
                    "contact" : "+23276617372",
                    "location" : "Pademba Road Area"
                },
                {
                    "id": 11,
                    "name": "Battle AXE Ministry International HQ",
                    "address": "25 Edward Street",
                    "logo" : "https://sierrachurch.vercel.app/images/BattleAxe.jpg",
                    "contact" : "+23299721013",
                    "location" : "St. John Area"
                },
                {
                    "id": 12,
                    "name": "Kingdom Gospel Mission Inc",
                    "address": "14 Old Railway Line",
                    "logo" : "https://sierrachurch.vercel.app/images/KGM.jpg",
                    "contact" : "+23279969094",
                    "location" : "Rokupa"
                },
                {
                    "id": 13,
                    "name": "Word Global Ministries",
                    "address": "38 Oniel Street, Back of Albert Academy",
                    "logo" : "https://sierrachurch.vercel.app/images/WordGlobal.jpg",
                    "contact" : "+23277595171",
                    "location" : "Sorie Town"
                },
                {
                    "id": 14,
                    "name": "Winners Chapel International",
                    "address": "9 Pwd Quarters",
                    "logo" : "https://sierrachurch.vercel.app/images/Winners.png",
                    "contact" : "+23299828559",
                    "location" : "Pademba Road Area"
                },
                {
                    "id": 15,
                    "name": "Royal Embassy International",
                    "address": "Lord Street, Bottom Mango",
                    "logo" : "./images/royalembassy.jpg",
                    "contact" : "+23272815536",
                    "location" : "Waterloo"
                },
                {
                    "id": 16,
                    "name": "Revival Power Ministries Fire Center",
                    "address": "241 Regent Grafton Highway",
                    "logo" : "https://sierrachurch.vercel.app/images/RevivalPowerMin.jpg",
                    "contact" : "+23276875229",
                    "location" : "Grafton"
                },
                {
                    "id": 34,
                    "name": "Apostolic Fire Ground Ministries",
                    "address": "2 Wisdom Drive, Back of Old School",
                    "logo" : "./images/Afgm.png",
                    "contact" : "+23231042504",
                    "location" : "Hill Station"
                },
                {
                    "id": 17,
                    "name": "Harvest Intercontinental Church",
                    "address": "Ross Road",
                    "logo" : "https://sierrachurch.vercel.app/images/HarvestInter.png",
                    "contact" : "+23276559537",
                    "location" : "Cline Town"
                },
                {
                    "id": 19,
                    "name": "Faith Evangelical Church",
                    "address": "17 Ross Road",
                    "logo" : "./images/dove.jpg",
                    "contact" : "000 000 000 000",
                    "location" : "Cline Town"
                },
                {
                    "id": 18,
                    "name": "New Harvest Ministries",
                    "address": "Railway Quarters Off Prince Williams Street, Kandeh Town ",
                    "logo" : "https://sierrachurch.vercel.app/images/NewHarvest.jpg",
                    "contact" : "+23278908012",
                    "location" : "Bo City"
                },
                {
                    "id": 20,
                    "name": "Greater Evangelism World Crusade",
                    "address": "8 Heddle Street, off Campbell Street",
                    "logo" : "https://sierrachurch.vercel.app/images/GreaterEvangelism.jpg",
                    "contact" : "+23299485553",
                    "location" : "Campbell Street Area"
                },
                {
                    "id": 21,
                    "name": "Harvestfield chapel international",
                    "address": "30A kingharman Road",
                    "logo" : "https://scontent.ffna3-1.fna.fbcdn.net/v/t1.6435-9/76759963_103418251131011_6261441548764839936_n.png?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Nowfc_xaqQcAX-cmUpC&_nc_ht=scontent.ffna3-1.fna&oh=00_AfAFzsOYCoxqoYj0uJh4ZQa6STh6wfqr_apJ-Y13Nz-fNw&oe=64FB9769",
                    "contact" : "+23277823233",
                    "location" : "Jomo Kenyatta Road Area"
                },
                {
                    "id": 22,
                    "name": " Catch the Anointing Church / LightHouse Chapel Int'l",
                    "address": "Ogoo Farm, Peninsular",
                    "logo" : "https://sierrachurch.vercel.app/images/CatchTheAnionting.jpg",
                    "contact" : "+23276549937",
                    "location" : "Goderich"
                },
                {
                    "id": 23,
                    "name": "Flaming Evangelical Ministries Int.",
                    "address": "Murray Town Branch",
                    "logo": "https://sierrachurch.vercel.app/images/flaming.jpg",
                    "contact" : "+23277643784",
                    "location" : "Murray Town"
                },
                {
                    "id": 24,
                    "name": "Harvestfield chapel international",
                    "address": "SLBS Junction",
                    "logo" : "https://scontent.ffna3-1.fna.fbcdn.net/v/t1.6435-9/76759963_103418251131011_6261441548764839936_n.png?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Nowfc_xaqQcAX-cmUpC&_nc_ht=scontent.ffna3-1.fna&oh=00_AfAFzsOYCoxqoYj0uJh4ZQa6STh6wfqr_apJ-Y13Nz-fNw&oe=64FB9769",
                    "contact" : "+23277823233",
                    "location" : "Goderich"
                },
                {
                    "id": 25,
                    "name": "ZOE International Worship Center",
                    "address": "24 Bass Street",
                    "logo" : "https://scontent.ffna3-1.fna.fbcdn.net/v/t1.6435-9/173672203_101821682048686_8776327298511878739_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=E80jJYj_f5gAX8vsWcM&_nc_ht=scontent.ffna3-1.fna&oh=00_AfDs_-9Hanv4Z40-_OMeah7435ebHoM6Yl1TZIoISDqZiQ&oe=64F8959A",
                    "contact" : "+23278223576",
                    "location" : "Brookfields"
                },
                {
                    "id": 26,
                    "name": "The Redeemed Christian Church of God HQ",
                    "address": "69 Sanders Street",
                    "logo" : "https://sierrachurch.vercel.app/images/RedeemedChristainChurch.jpg",
                    "contact" : "+23278911406",
                    "location" : "St. John Area"
                },
                {
                    "id": 27,
                    "name": "Achievers Gospel Chapel",
                    "address": "27 Davies Street, Kissy",
                    "logo" : "https://scontent.ffna3-1.fna.fbcdn.net/v/t1.6435-9/90853184_117439476559519_8886525766238470144_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=3v3v1ZvcpngAX-jQ-3A&_nc_ht=scontent.ffna3-1.fna&oh=00_AfBRymKgTPUKqZo7yTP8lVOncLG0wxxqf73fkHaC_87-2Q&oe=64FB943B",
                    "contact" : "+232076618024",
                    "location" : "Kissy"
                },
                {
                    "id": 28,
                    "name": "Christ Healing Evangelical Ministry",
                    "address": "Back of Old School, Wash Car",
                    "logo" : "./images/dove.jpg",
                    "contact" : "000 000 000 000",
                    "location" : "Hill Station"
                },
                {
                    "id": 29,
                    "name": "Revival Power Ministries",
                    "address": "Waterloo Highway",
                    "logo" : "https://sierrachurch.vercel.app/images/RevivalPowerMin.jpg",
                    "contact" : "+23279000010",
                    "location" : "Waterloo"
                },
                {
                    "id": 30,
                    "name": "Agape Outreach Ministries",
                    "address": "5 Williams Street, Kissy",
                    "logo" : "https://sierrachurch.vercel.app/images/AgapeOutreach.jpg",
                    "contact" : "+23278362898",
                    "location" : "Kissy"
                },
                {
                    "id": 31,
                    "name": "Mount of Transfiguration Int'l Ministry",
                    "address": "Gloucester (Sorie Town By The Transformer)",
                    "logo" : "https://sierrachurch.vercel.app/images/MountOfTransfiguration.jpg",
                    "contact" : "+23278257068",
                    "location" : "Gloucester"
                },
                {
                    "id": 32,
                    "name": "Mountain of God Evangelical Ministries",
                    "address": "1 Wisdom Drive, Sorie Town",
                    "logo" : "https://sierrachurch.vercel.app/images/MountainOfGod.jpg",
                    "contact" : "+23278257068",
                    "location" : "Gloucester"
                },
                {
                    "id": 33,
                    "name": "Thus Saith the Lord Chapel Intl.",
                    "address": "80 Off Pratt Street, New England ville",
                    "logo" : "https://sierrachurch.vercel.app/images/ThusSaithTheLord.jpg",
                    "contact" : "+23279017130",
                    "location" : "New England Ville"
                    },
                    {
                    "id": 35,
                    "name": "Sanctuary Praise Cathedral",
                    "address": "2 Sawi Drive, Off kingharman Road.",
                    "logo" : "https://sierrachurch.vercel.app/images/SanctuaryPriase.jpg",
                    "contact" : "+23276242622",
                    "location" : "Brookfields"
                    },
                    {
                    "id": 36,
                    "name": "Deeper Life Bible Church",
                    "address": "1 Wellesley Street, Back of the tank.",
                    "logo" : "https://sierrachurch.vercel.app/images/DeeperLifeBibleChurch.jpg",
                    "contact" : "+23276679385",
                    "location" : "Mount Aureol"
                    },
                    {
                    "id": 37,
                    "name": "Christ International Worship Center",
                    "address": "YWCA New Hall, Bus Stop",
                    "logo" : "https://sierrachurch.vercel.app/images/CIWC.jpg",
                    "contact" : "+23234036070",
                    "location" : "Brookfields"
                    },
                    {
                    "id": 38,
                    "name": "Bethel Temple Ministries International",
                    "address": "Opposite Rokel Sec. School",
                    "logo" : "https://sierrachurch.vercel.app/images/BethelTemple.jpg",
                    "contact" : "+23276046960",
                    "location" : "Tower Hill"
                    },
                    {
                        "id": 39,
                        "name": "Mt. Zion Fellowship Church",
                        "address": "Kono Compound Balcony, Solo-B Drive",
                        "logo" : "https://sierrachurch.vercel.app/images/MtZion.jpg",
                        "contact" : "+23288989474",
                        "location" : "Goderich"
                    },
                    {
                        "id": 40,
                        "name": "Wilberforce Baptist Church",
                        "address": "3 Main Motor Road",
                        "logo" : "https://sierrachurch.vercel.app/images/WilberforceBaptist.jpg",
                        "contact" : "+23276350283",
                        "location" : "Wilberforce"
                    },
                    {
                        "id": 41,
                        "name": "Jehovah Shalom International Kingdom Ministries",
                        "address": "8p Sumaila Town",
                        "logo" : "https://sierrachurch.vercel.app/images/JehovahShalom.jpg",
                        "contact" : "+23276292267",
                        "location" : "Sumaila Town"
                    },
                    {
                        "id": 42,
                        "name": "The Redeemed Assemblies Church",
                        "address": "YMCA Kandeh Town",
                        "logo" : "https://sierrachurch.vercel.app/images/RedeemedAssembliesChurch.jpg",
                        "contact" : "+23278743194",
                        "location" : "Bo City"
                    },
                    {
                        "id": 42,
                        "name": "The Redeemed Christian Church of God",
                        "address": "Behind White House, close to Emergency Hospital, Adokia",
                        "logo" : "https://sierrachurch.vercel.app/images/RedeemedChristainChurch.jpg",
                        "contact" : "+23278911406",
                        "location" : "Goderich"
                    },
                    {
                        "id": 43,
                        "name": "Christ Embassy Sierra Leone",
                        "address": "5 Adeliade Street",
                        "logo" : "https://sierrachurch.vercel.app/images/ChristEmbassy.png",
                        "contact" : "+23278732356",
                        "location" : "St. John Area"
                    },
                    {
                        "id": 44,
                        "name": "National Penticostal Limba Church",
                        "address": "Fort Street, Off Circular Road",
                        "logo" : "https://sierrachurch.vercel.app/images/dove.jpg",
                        "contact" : "000 000 000 000",
                        "location" : "Circular Road Area"
                    },
                    {
                        "id": 45,
                        "name": "King Memorial UM Church",
                        "address": "Regent Street, Goderich Street.",
                        "logo" : "https://sierrachurch.vercel.app/images/dove.jpg",
                        "contact" : "000 000 000 000",
                        "location" : "Central Area"
                    },
                    {
                        "id": 46,
                        "name": "Wesley Methodist Church",
                        "address": "Lamina Sankoh Street",
                        "logo" : "https://sierrachurch.vercel.app/images/dove.jpg",
                        "contact" : "000 000 000 000",
                        "location" : "Siaka Stevens Street Area"
                    },
                    {
                        "id": 47,
                        "name": "Sacred Heart Catherdral/Cathedral of Freetown",
                        "address": "Siaka Stevens Street",
                        "logo" : "https://sierrachurch.vercel.app/images/dove.jpg",
                        "contact" : "000 000 000 000",
                        "location" : "Siaka Stevens Street Area"
                    },
                    {
                        "id": 48,
                        "name": "Buxton Memorial Methodist Church",
                        "address": "Charles Street",
                        "logo" : "https://sierrachurch.vercel.app/images/BuxtonMethodistChurch.jpg",
                        "contact" : "000 000 000 000",
                        "location" : "Campbell Street Area"
                    },
                    {
                        "id": 49,
                        "name": "Christ Embassy Sierra Leone",
                        "address": "26 Prince Williams Street",
                        "logo" : "https://sierrachurch.vercel.app/images/ChristEmbassy.png",
                        "contact" : "+23278464847",
                        "location" : "Bo City"
                    },
                    {
                        "id": 50,
                        "name": "Christ Embassy Sierra Leone",
                        "address": "All Purpose Hall, Beside Leone Lodge, Lumley Beach Road",
                        "logo" : "https://sierrachurch.vercel.app/images/ChristEmbassy.png",
                        "contact" : "+23276424577",
                        "location" : "Lumley"
                    },
                    {
                        "id": 51,
                        "name": "Christ Embassy Sierra Leone",
                        "address": "Congo Cross",
                        "logo" : "https://sierrachurch.vercel.app/images/ChristEmbassy.png",
                        "contact" : "+23276114941",
                        "location" : "Congo Cross"
                    },
                    {
                        "id": 52,
                        "name": "Christ Embassy Sierra Leone",
                        "address": "Grafton Town",
                        "logo" : "https://sierrachurch.vercel.app/images/ChristEmbassy.png",
                        "contact" : "+233554623034 Whattsapp",
                        "location" : "Grafton"
                    },
                    {
                        "id": 53,
                        "name": "Deeper Life Bible Church",
                        "address": "Nduvuibu Branch",
                        "logo" : "https://sierrachurch.vercel.app/images/DeeperLifeBibleChurch.jpg",
                        "contact" : "000 000 000 000",
                        "location" : "Bo City"
                    },
                    {
                        "id": 54,
                        "name": " Christ Church",
                        "address": "FQH7+7FQ, Pademba Road",
                        "logo" : "https://sierrachurch.vercel.app/images/dove.jpg",
                        "contact" : "000 000 000 000",
                        "location" : "Pademba Road Area"
                    },
                    {
                        "id": 55,
                        "name": "St. Anthony's Parish",
                        "address": "Lower Syke Street",
                        "logo" : "https://sierrachurch.vercel.app/images/dove.jpg",
                        "contact" : "000 000 000 000",
                        "location" : "Syke Street"
                    },
                    {
                        "id": 56,
                        "name": "St. Martin's Parish",
                        "address": "BlackHall Road",
                        "logo" : "https://sierrachurch.vercel.app/images/dove.jpg",
                        "contact" : "+23234243539",
                        "location" : "BlackHall Road"
                    },
                    {
                        "id": 57,
                        "name": "Dominion City",
                        "address": "38 Wilkinson Road, Lumley Road",
                        "logo" : "https://sierrachurch.vercel.app/images/DominionCity.jpg",
                        "contact" : "+23230147263",
                        "location" : "Lumley"
                    },
                    {
                        "id": 58,
                        "name": "The Vine Christian Fellowship Ministry",
                        "address": "6 Pratt Lane, By R.E.C School Field",
                        "logo" : "https://sierrachurch.vercel.app/images/TheVineChristianFellowshipMinistry.jpg",
                        "contact" : "+23276742829",
                        "location" : "Kossoh Town"
                    },
                    {
                        "id": 59,
                        "name": "The Vine Christian Fellowship Ministries International HQ",
                        "address": "Kroo Court House",
                        "logo" : "https://sierrachurch.vercel.app/images/TheVineChristianFellowshipMinistry.jpg",
                        "contact" : "+23276742829",
                        "location" : "Kroo Town Road"
                    },
                    {
                        "id": 60,
                        "name": "National Pentecostal Church",
                        "address": "Regent Road, Beach Road Lumley",
                        "logo" : "https://sierrachurch.vercel.app/images/NationalPentecostalChurch.jpg",
                        "contact" : "+23231086708",
                        "location" : "Lumley"
                    },
                    {
                        "id": 61,
                        "name": "The Church Of Pentecost",
                        "address": "77 Circular Road",
                        "logo" : "https://sierrachurch.vercel.app/images/TheChurchOfPentecost.jpg",
                        "contact" : "+23278170164",
                        "location" : "Circular Road Area"
                    },
                    {
                        "id": 62,
                        "name": "Faith Assembly of God Church HQ",
                        "address": "66 Bass Street",
                        "logo" : "https://sierrachurch.vercel.app/images/FaithAssemblyofGodChurchHQ.jpg",
                        "contact" : "+23232545294",
                        "location" : "Brookfields"
                    },
                    {
                        "id": 63,
                        "name": "Faith Assembly of God Church",
                        "address": "Regent Road Lumley",
                        "logo" : "https://sierrachurch.vercel.app/images/FaithAssemblyOfGodChurch.jpg",
                        "contact" : "000 000 000 000",
                        "location" : "Lumley"
                    },
                    {
                        "id": 64,
                        "name": "Faith Assembly of God Church",
                        "address": "4 Freetown Road ",
                        "logo" : "https://sierrachurch.vercel.app/images/FaithAssemblyofGodChurchHQ.jpg",
                        "contact" : "+23277426644",
                        "location" : "Goderich"
                    },
                    {
                        "id": 65,
                        "name": "First Assembly of God Church",
                        "address": "4 Ambrose street",
                        "logo" : "https://sierrachurch.vercel.app/images/AssembliesOfGod.jpg",
                        "contact" : "+232 88 142691",
                        "location" : "Central Area"
                    },
                    {
                        "id": 66,
                        "name": "Faith Assembly of God Church",
                        "address": "Morabie Waterloo",
                        "logo" : "https://sierrachurch.vercel.app/images/FaithAssemblyofGodChurchHQ.jpg",
                        "contact" : "+23278905402",
                        "location" : "Waterloo"
                    },
                    {
                        "id": 67,
                        "name": "Apostolic Fire Ground Ministries",
                        "address": "Waterloo Police Post",
                        "logo" : "./images/Afgm.png",
                        "contact" : "+23231042504",
                        "location" : "Waterloo"
                    },
                    {
                        "id": 68,
                        "name": "Central Christians In Action Church",
                        "address": "101 Pademba Road",
                        "logo" : "https://sierrachurch.vercel.app/images/CentralChristiansInActionChurch.jpg",
                        "contact" : "000 000 000 000",
                        "location" : "Pademba Road Area"
                    },
                    {
                        "id": 69,
                        "name": "Zion Praise Tabernacle",
                        "address": "3 Thompson Lane White Stick Tengbeh Town ",
                        "logo": "https://www.zionpraisetabernacle.com/assets/img/pg.png",
                        "contact" : "+23279359177",
                        "location" : "Tengbeh Town"
                    },
                    {
                        "id": 70,
                        "name": "Jesus Fellowship Healing and Deliverance Int'l Ministry",
                        "address": "4 Proven Street off Mountain Cut",
                        "logo": "https://sierrachurch.vercel.app/images/JesusFellowshipHealingandDeliverance.jpg",
                        "contact" : "+23277595650",
                        "location" : "Mountain Cut"
                    },
                    {
                        "id": 71,
                        "name": "Gateway Evangelical Ministries International",
                        "address": "Back of Hotel 5/10, Bai Bureh Road",
                        "logo": "https://sierrachurch.vercel.app/images/GatewayEvangelicalMinistries.jpg",
                        "contact" : "+23276618249",
                        "location" : "Kissy"
                    },
                    {
                        "id": 72,
                        "name": "Christ For All Ministries Int'l",
                        "address": "30c Cockle, off Sir Samuel Lewis Road, Aberdeen Road",
                        "logo": "https://sierrachurch.vercel.app/images/dove.jpg",
                        "contact" : "000 00 000 000",
                        "location" : "Aberdeen"
                    },
                    {
                        "id": 73,
                        "name": "Christ Evangelical Ministries Int'l",
                        "address": "Pa Morlia Field, Calaba Town",
                        "logo": "https://sierrachurch.vercel.app/images/ChristEvangelicalMinistries.jpg",
                        "contact" : "+23277094852",
                        "location" : "Calaba Town"
                    },
                    {
                        "id": 74,
                        "name": "Abide In Christ Evangelistic Ministry Int'l",
                        "address": "George Brook Dwazark Community",
                        "logo": "https://sierrachurch.vercel.app/images/AbideInChristEvangelistic.jpg",
                        "contact" : "+23276731319/+23234139911",
                        "location" : "New England Ville"
                    },
                    {
                        "id": 75,
                        "name": "Christ Reigns Outreach Ministries Int'l",
                        "address": "New Sella Spot, 31 Kingharman Road",
                        "logo": "https://sierrachurch.vercel.app/images/ChristReignsOutreach.jpg",
                        "contact" : "+23279215357",
                        "location" : "Jomo Kenyatta Road Area"
                    },
                    {
                        "id": 76,
                        "name": "Gethsemane Evangelical Ministries Int’l - PTC",
                        "address": "16 Aberdeen Ferry Road oppostie Marine Stopes Clinic",
                        "logo": "https://sierrachurch.vercel.app/images/GethsemaneEvangelicalMinistries.jpg",
                        "contact" : " +23278184870",
                        "location" : "Aberdeen"
                    },
                    {
                        "id": 77,
                        "name": "Action Chapel International Sierra Leone",
                        "address": "Doherty Street,Off Murray Town",
                        "logo": "https://sierrachurch.vercel.app/images/ActionChapelInternational.jpg",
                        "contact" : "+23278233957",
                        "location" : "Wilkinson Road Area"
                    },
                    {
                        "id": 78,
                        "name": "United God is Our Light Church",
                        "address": "Caulker Lane, Upper Mands Street",
                        "logo": "https://sierrachurch.vercel.app/images/UnitedGodisOurLight.jpg",
                        "contact" : "+23288566694",
                        "location" : "Model Area"
                    },
                    {
                        "id": 79,
                        "name": "God Is Our Light Church HQ",
                        "address": "9 Cannon Street Off Jomo Kenyatta Road",
                        "logo": "https://sierrachurch.vercel.app/images/dove.jpg",
                        "contact" : "+23273435312",
                        "location" : "Jomo Kenyatta Road Area"
                    },
                    {
                        "id": 80,
                        "name": "Charismatic Christian Church",
                        "address": "63 Upper Newstead Lane, Kuntoloh, Hilltop",
                        "logo": "https://sierrachurch.vercel.app/images/dove.jpg",
                        "contact" : "+23276959795",
                        "location" : "Wellington"
                    },
                    {
                        "id": 81,
                        "name": "Tower of love Charismatic Church",
                        "address": "8 Tejan Street, Haja Fatmata",
                        "logo": "https://sierrachurch.vercel.app/images/dove.jpg",
                        "contact" : "+23279598291",
                        "location" : "Wellington"
                    },
                    {
                        "id": 82,
                        "name": "Word of God Church & Ministries Int'l",
                        "address": "Tree planting",
                        "logo": "https://sierrachurch.vercel.app/images/WordofGodChurch.jpg",
                        "contact" : "+23231972551",
                        "location" : "Tree Planting"
                    },
                    {
                        "id": 83,
                        "name": "Word of God Church & Ministries Int'l",
                        "address": "16B Main Hospital Road, Government Reservation",
                        "logo": "https://sierrachurch.vercel.app/images/WordofGodChurch.jpg",
                        "contact" : "+23231972551/+23278247361",
                        "location" : "Bo City"
                    },
                    {
                        "id": 84,
                        "name": "Word of Life Gospel Church",
                        "address": "56 Lumley Road, Wilberforce",
                        "logo": "https://sierrachurch.vercel.app/images/WordofLifeGospelChurch.jpg",
                        "contact" : "+23278692948",
                         "location" : "Wilberforce"
                    },
                    {
                        "id": 85,
                        "name": "The Door Christian Fellowship Church",
                        "address": "Ferry Junction, Kissy",
                        "logo": "https://sierrachurch.vercel.app/images/TheDoor.jpg",
                        "contact" : "+23277611778",
                        "location" : "Kissy"
                    },
                    {
                        "id": 86,
                        "name": "Glorious Church International Ministries",
                        "address": "4 Liverpool Street",
                        "logo": "https://sierrachurch.vercel.app/images/GloriousChurch.jpg",
                        "contact" : "+23279625676/+23233497861",
                        "location" : "Regent"
                    },
                    {
                        "id": 87,
                        "name": "Citadel Of Praise",
                        "address": "3 Bailey Street (3rd Floor)",
                        "logo": "https://sierrachurch.vercel.app/images/CitadelOfPraise.jpg",
                        "contact" : "+23230308429/+23278941794",
                        "location" : "Brookfields"
                    },
                    {
                        "id": 88,
                        "name": "Christ Healing Centre",
                        "address": "32 Freetown Road, Wilberforce Village",
                        "logo": "https://sierrachurch.vercel.app/images/ChristHealingCentre.jpg",
                        "contact" : "+23288928563",
                        "location" : "Wilberforce"
                    },
                    {
                        "id": 89,
                        "name": "Christ Healing Centre",
                        "address": "Goderich SLBS Branch",
                        "logo": "https://sierrachurch.vercel.app/images/ChristHealingCentre.jpg",
                        "contact" : "+23299421995",
                        "location" : "Goderich"
                    },
                    {
                        "id": 90,
                        "name": "Battle AXE Ministry International",
                        "address": "3c Johnson Lane Aberdeen",
                        "logo" : "https://sierrachurch.vercel.app/images/BattleAxe.jpg",
                        "contact" : "+23288242924",
                        "location" : "Aberdeen"
                    },
                    {
                        "id": 91,
                        "name": "Harvest Intercontinental Church",
                        "address": "Coconut Farm, Blackhall Road",
                        "logo" : "https://sierrachurch.vercel.app/images/HarvestInter.png",
                        "contact" : "+23231228427",
                        "location" : "BlackHall Road"
                    },
                    {
                        "id": 92,
                        "name": "Harvest Intercontinental Church",
                        "address": "2 Back Street, Kissy",
                        "logo" : "https://sierrachurch.vercel.app/images/HarvestInter.png",
                        "contact" : "000 00 000 000",
                        "location" : "Kissy"
                    },
                    {
                        "id": 93,
                        "name": "Harvest Intercontinental Church",
                        "address": "Campbell Street, Wellington",
                        "logo" : "https://sierrachurch.vercel.app/images/HarvestInter.png",
                        "contact" : "+23278426741/+23231482411",
                        "location" : "Wellington"
                    },
                    {
                        "id": 94,
                        "name": "Harvest Intercontinental Church",
                        "address": "Bangura Street",
                        "logo" : "https://sierrachurch.vercel.app/images/HarvestInter.png",
                        "contact" : "+23276662219",
                        "location" : "Calaba Town"
                    },
                    {
                        "id": 95,
                        "name": "Harvest Intercontinental Church",
                        "address": "Rokel Park Light",
                        "logo" : "https://sierrachurch.vercel.app/images/HarvestInter.png",
                        "contact" : "+23280927511",
                        "location" : "Rokel"
                    },
                    {
                        "id": 96,
                        "name": "Harvest Intercontinental Church",
                        "address": "Rokel Condolor",
                        "logo" : "https://sierrachurch.vercel.app/images/HarvestInter.png",
                        "contact" : "+23278708354/+23288745070",
                        "location" : "Rokel"
                    },
                    {
                        "id": 97,
                        "name": "Harvest Intercontinental Church",
                        "address": "Yams Farm",
                        "logo" : "https://sierrachurch.vercel.app/images/HarvestInter.png",
                        "contact" : "+23232800873/+23233077106",
                        "location" : "Yams Farm"
                    },
                    {
                        "id": 98,
                        "name": "Harvest Intercontinental Church",
                        "address": "Malama, Goderich",
                        "logo" : "https://sierrachurch.vercel.app/images/HarvestInter.png",
                        "contact" : "+23276559537",
                        "location" : "Goderich"
                    },
                    {
                        "id": 99,
                        "name": "Harvest Intercontinental Church",
                        "address": "Number 9, Lumley Road",
                        "logo" : "https://sierrachurch.vercel.app/images/HarvestInter.png",
                        "contact" : "+23277989801",
                        "location" : "Wilberforce"
                    },
                    {
                        "id": 100,
                        "name": "Harvest Intercontinental Church",
                        "address": "Lunsar",
                        "logo" : "https://sierrachurch.vercel.app/images/HarvestInter.png",
                        "contact" : "+23277586409",
                        "location" : "Lunsar"
                    },
                    {
                        "id": 101,
                        "name": "Harvest Intercontinental Church",
                        "address": "Waterloo Police Post",
                        "logo" : "https://sierrachurch.vercel.app/images/HarvestInter.png",
                        "contact" : "+23276492699/+23288593350",
                        "location" : "Waterloo"
                    },
                    {
                        "id": 102,
                        "name": "Harvest Intercontinental Church",
                        "address": "Bo City",
                        "logo" : "https://sierrachurch.vercel.app/images/HarvestInter.png",
                        "contact" : "+23277855240",
                        "location" : "Bo City"
                    },
                    {
                        "id": 103,
                        "name": "Harvest Intercontinental Church",
                        "address": "Lungi Rotifunk",
                        "logo" : "https://sierrachurch.vercel.app/images/HarvestInter.png",
                        "contact" : "+23276816595",
                        "location" : "Lungi"
                    },
                    {
                        "id": 104,
                        "name": "Loko Baptist Church-BCSL",
                        "address": "102 Circular Road, by Parade Field",
                        "logo" : "https://sierrachurch.vercel.app/images/BaptistConventionSierraLeone.jpg",
                        "contact" : "+23277547002",
                        "location" : "Circular Road Area"
                    },
                    {
                        "id": 105,
                        "name": "Calvary Army Of Fire and Miracle Ministry",
                        "address": "3 Emerson Drive, Adonkia",
                        "logo" : "https://sierrachurch.vercel.app/images/CalveryArmy.jpg",
                        "contact" : "+23288950854",
                        "location" : "Goderich"
                    },
                    {
                        "id": 106,
                        "name": "Glorious Christian Church",
                        "address": "70 Adelaide Street",
                        "logo" : "https://sierrachurch.vercel.app/images/GloriousChristianChurch.jpg",
                        "contact" : "+23276606028",
                        "location" : "St. John Area"
                    },
                    {
                        "id": 107,
                        "name": "Kingdom Ministries International Church",
                        "address": "14c Marty Lane",
                        "logo" : "https://sierrachurch.vercel.app/images/KingdomMinistries.jpg",
                        "contact" : "+23276334633",
                        "location" : "Tengbeh Town"
                    },
                    {
                        "id": 108,
                        "name": "House of Grace Church international",
                        "address": "8 Old signal Hill Road",
                        "logo" : "https://sierrachurch.vercel.app/images/HouseofGraceChurch.jpg",
                        "contact" : "+23278294776",
                        "location" : "Congo Cross"
                    },
                    {
                        "id": 109,
                        "name": "Life Church Ministries International",
                        "address": "1 Jerusalem City, Metchem Goderich",
                        "logo" : "https://sierrachurch.vercel.app/images/LifeChurchMinistries.jpg",
                        "contact" : "+23276848497",
                        "location" : "Goderich"
                    },
                    {
                        "id": 110,
                        "name": "Evangel Assembly of God Church",
                        "address": "13 Frazer Street Murry Town",
                        "logo" : "https://sierrachurch.vercel.app/images/EvangelAssembly.png",
                        "contact" : "",
                        "location" : "Murray Town"
                    },
                    {
                        "id": 111,
                        "name": "Christ is Lord Evangelical Ministry",
                        "address": "32 Pratt Street, New England",
                        "logo" : "https://sierrachurch.vercel.app/images/ChristIsLord.jpg",
                        "contact" : "+23276649865",
                        "location" : "New England Ville"
                    },
                    {
                        "id": 112,
                        "name": "Holy Spirit Evangelistic Ministries",
                        "address": "Femi Tuner",
                        "logo" : "https://sierrachurch.vercel.app/images/HolySpiritEvangelistic.jpg",
                        "contact" : "+23277425168",
                        "location" : "Goderich"
                    }
      ];
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(churches));
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on ${PORT}`));