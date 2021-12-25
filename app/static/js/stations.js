const STATIONS = [
    {
        "name": "Abbey Wood",
        "crs_code": "ABW"
    },
    {
        "name": "Aber",
        "crs_code": "ABE"
    },
    {
        "name": "Abercynon",
        "crs_code": "ACY"
    },
    {
        "name": "Aberdare",
        "crs_code": "ABA"
    },
    {
        "name": "Aberdeen",
        "crs_code": "ABD"
    },
    {
        "name": "Aberdour",
        "crs_code": "AUR"
    },
    {
        "name": "Aberdovey",
        "crs_code": "AVY"
    },
    {
        "name": "Abererch",
        "crs_code": "ABH"
    },
    {
        "name": "Abergavenny",
        "crs_code": "AGV"
    },
    {
        "name": "Abergele & Pensarn",
        "crs_code": "AGL"
    },
    {
        "name": "Aberystwyth",
        "crs_code": "AYW"
    },
    {
        "name": "Accrington",
        "crs_code": "ACR"
    },
    {
        "name": "Achanalt",
        "crs_code": "AAT"
    },
    {
        "name": "Achnasheen",
        "crs_code": "ACN"
    },
    {
        "name": "Achnashellach",
        "crs_code": "ACH"
    },
    {
        "name": "Acklington",
        "crs_code": "ACK"
    },
    {
        "name": "Acle",
        "crs_code": "ACL"
    },
    {
        "name": "Acocks Green",
        "crs_code": "ACG"
    },
    {
        "name": "Acton Bridge (Cheshire)",
        "crs_code": "ACB"
    },
    {
        "name": "Acton Central",
        "crs_code": "ACC"
    },
    {
        "name": "Acton Main Line",
        "crs_code": "AML"
    },
    {
        "name": "Adderley Park",
        "crs_code": "ADD"
    },
    {
        "name": "Addiewell",
        "crs_code": "ADW"
    },
    {
        "name": "Addlestone",
        "crs_code": "ASN"
    },
    {
        "name": "Adisham",
        "crs_code": "ADM"
    },
    {
        "name": "Adlington (Cheshire)",
        "crs_code": "ADC"
    },
    {
        "name": "Adlington (Lancs)",
        "crs_code": "ADL"
    },
    {
        "name": "Adwick",
        "crs_code": "AWK"
    },
    {
        "name": "Aigburth",
        "crs_code": "AIG"
    },
    {
        "name": "Ainsdale",
        "crs_code": "ANS"
    },
    {
        "name": "Aintree",
        "crs_code": "AIN"
    },
    {
        "name": "Airbles",
        "crs_code": "AIR"
    },
    {
        "name": "Airdrie",
        "crs_code": "ADR"
    },
    {
        "name": "Albany Park",
        "crs_code": "AYP"
    },
    {
        "name": "Albrighton",
        "crs_code": "ALB"
    },
    {
        "name": "Alderley Edge",
        "crs_code": "ALD"
    },
    {
        "name": "Aldermaston",
        "crs_code": "AMT"
    },
    {
        "name": "Aldershot",
        "crs_code": "AHT"
    },
    {
        "name": "Aldrington",
        "crs_code": "AGT"
    },
    {
        "name": "Alexandra Palace",
        "crs_code": "AAP"
    },
    {
        "name": "Alexandra Parade",
        "crs_code": "AXP"
    },
    {
        "name": "Alexandria",
        "crs_code": "ALX"
    },
    {
        "name": "Alfreton",
        "crs_code": "ALF"
    },
    {
        "name": "Allens West",
        "crs_code": "ALW"
    },
    {
        "name": "Alloa",
        "crs_code": "ALO"
    },
    {
        "name": "Alness",
        "crs_code": "ASS"
    },
    {
        "name": "Alnmouth",
        "crs_code": "ALM"
    },
    {
        "name": "Alresford (Essex)",
        "crs_code": "ALR"
    },
    {
        "name": "Alsager",
        "crs_code": "ASG"
    },
    {
        "name": "Althorne (Essex)",
        "crs_code": "ALN"
    },
    {
        "name": "Althorpe",
        "crs_code": "ALP"
    },
    {
        "name": "Altnabreac",
        "crs_code": "ABC"
    },
    {
        "name": "Alton",
        "crs_code": "AON"
    },
    {
        "name": "Altrincham",
        "crs_code": "ALT"
    },
    {
        "name": "Alvechurch",
        "crs_code": "ALV"
    },
    {
        "name": "Ambergate",
        "crs_code": "AMB"
    },
    {
        "name": "Amberley",
        "crs_code": "AMY"
    },
    {
        "name": "Amersham",
        "crs_code": "AMR"
    },
    {
        "name": "Ammanford",
        "crs_code": "AMF"
    },
    {
        "name": "Ancaster",
        "crs_code": "ANC"
    },
    {
        "name": "Anderston",
        "crs_code": "AND"
    },
    {
        "name": "Andover",
        "crs_code": "ADV"
    },
    {
        "name": "Anerley",
        "crs_code": "ANZ"
    },
    {
        "name": "Angmering",
        "crs_code": "ANG"
    },
    {
        "name": "Annan",
        "crs_code": "ANN"
    },
    {
        "name": "Anniesland",
        "crs_code": "ANL"
    },
    {
        "name": "Ansdell & Fairhaven",
        "crs_code": "AFV"
    },
    {
        "name": "Apperley Bridge",
        "crs_code": "APY"
    },
    {
        "name": "Appleby",
        "crs_code": "APP"
    },
    {
        "name": "Appledore (Kent)",
        "crs_code": "APD"
    },
    {
        "name": "Appleford",
        "crs_code": "APF"
    },
    {
        "name": "Appley Bridge",
        "crs_code": "APB"
    },
    {
        "name": "Apsley",
        "crs_code": "APS"
    },
    {
        "name": "Arbroath",
        "crs_code": "ARB"
    },
    {
        "name": "Ardgay",
        "crs_code": "ARD"
    },
    {
        "name": "Ardlui",
        "crs_code": "AUI"
    },
    {
        "name": "Ardrossan Harbour",
        "crs_code": "ADS"
    },
    {
        "name": "Ardrossan South Beach",
        "crs_code": "ASB"
    },
    {
        "name": "Ardrossan Town",
        "crs_code": "ADN"
    },
    {
        "name": "Ardwick",
        "crs_code": "ADK"
    },
    {
        "name": "Argyle Street",
        "crs_code": "AGS"
    },
    {
        "name": "Arisaig",
        "crs_code": "ARG"
    },
    {
        "name": "Arlesey",
        "crs_code": "ARL"
    },
    {
        "name": "Armadale (West Lothian)",
        "crs_code": "ARM"
    },
    {
        "name": "Armathwaite",
        "crs_code": "AWT"
    },
    {
        "name": "Arnside",
        "crs_code": "ARN"
    },
    {
        "name": "Arram",
        "crs_code": "ARR"
    },
    {
        "name": "Arrochar & Tarbet",
        "crs_code": "ART"
    },
    {
        "name": "Arundel",
        "crs_code": "ARU"
    },
    {
        "name": "Ascot (Berks)",
        "crs_code": "ACT"
    },
    {
        "name": "Ascott-under-Wychwood",
        "crs_code": "AUW"
    },
    {
        "name": "Ash",
        "crs_code": "ASH"
    },
    {
        "name": "Ash Vale",
        "crs_code": "AHV"
    },
    {
        "name": "Ashburys",
        "crs_code": "ABY"
    },
    {
        "name": "Ashchurch for Tewkesbury",
        "crs_code": "ASC"
    },
    {
        "name": "Ashfield",
        "crs_code": "ASF"
    },
    {
        "name": "Ashford (Surrey)",
        "crs_code": "AFS"
    },
    {
        "name": "Ashford International",
        "crs_code": "AFK"
    },
    {
        "name": "Ashford International (Eurostar)",
        "crs_code": "ASI"
    },
    {
        "name": "Ashley",
        "crs_code": "ASY"
    },
    {
        "name": "Ashtead",
        "crs_code": "AHD"
    },
    {
        "name": "Ashton-under-Lyne",
        "crs_code": "AHN"
    },
    {
        "name": "Ashurst (Kent)",
        "crs_code": "AHS"
    },
    {
        "name": "Ashurst New Forest",
        "crs_code": "ANF"
    },
    {
        "name": "Ashwell & Morden",
        "crs_code": "AWM"
    },
    {
        "name": "Askam",
        "crs_code": "ASK"
    },
    {
        "name": "Aslockton",
        "crs_code": "ALK"
    },
    {
        "name": "Aspatria",
        "crs_code": "ASP"
    },
    {
        "name": "Aspley Guise",
        "crs_code": "APG"
    },
    {
        "name": "Aston",
        "crs_code": "AST"
    },
    {
        "name": "Atherstone",
        "crs_code": "ATH"
    },
    {
        "name": "Atherton",
        "crs_code": "ATN"
    },
    {
        "name": "Attadale",
        "crs_code": "ATT"
    },
    {
        "name": "Attenborough",
        "crs_code": "ATB"
    },
    {
        "name": "Attleborough",
        "crs_code": "ATL"
    },
    {
        "name": "Auchinleck",
        "crs_code": "AUK"
    },
    {
        "name": "Audley End",
        "crs_code": "AUD"
    },
    {
        "name": "Aughton Park",
        "crs_code": "AUG"
    },
    {
        "name": "Aviemore",
        "crs_code": "AVM"
    },
    {
        "name": "Avoncliff",
        "crs_code": "AVF"
    },
    {
        "name": "Avonmouth",
        "crs_code": "AVN"
    },
    {
        "name": "Axminster",
        "crs_code": "AXM"
    },
    {
        "name": "Aylesbury",
        "crs_code": "AYS"
    },
    {
        "name": "Aylesbury Vale Parkway",
        "crs_code": "AVP"
    },
    {
        "name": "Aylesford",
        "crs_code": "AYL"
    },
    {
        "name": "Aylesham",
        "crs_code": "AYH"
    },
    {
        "name": "Ayr",
        "crs_code": "AYR"
    },
    {
        "name": "Bache",
        "crs_code": "BAC"
    },
    {
        "name": "Baglan",
        "crs_code": "BAJ"
    },
    {
        "name": "Bagshot",
        "crs_code": "BAG"
    },
    {
        "name": "Baildon",
        "crs_code": "BLD"
    },
    {
        "name": "Baillieston",
        "crs_code": "BIO"
    },
    {
        "name": "Balcombe",
        "crs_code": "BAB"
    },
    {
        "name": "Baldock",
        "crs_code": "BDK"
    },
    {
        "name": "Balham",
        "crs_code": "BAL"
    },
    {
        "name": "Balloch",
        "crs_code": "BHC"
    },
    {
        "name": "Balmossie",
        "crs_code": "BSI"
    },
    {
        "name": "Bamber Bridge",
        "crs_code": "BMB"
    },
    {
        "name": "Bamford",
        "crs_code": "BAM"
    },
    {
        "name": "Banavie",
        "crs_code": "BNV"
    },
    {
        "name": "Banbury",
        "crs_code": "BAN"
    },
    {
        "name": "Bangor (Gwynedd)",
        "crs_code": "BNG"
    },
    {
        "name": "Bank Hall",
        "crs_code": "BAH"
    },
    {
        "name": "Banstead",
        "crs_code": "BAD"
    },
    {
        "name": "Barassie",
        "crs_code": "BSS"
    },
    {
        "name": "Barbican",
        "crs_code": "ZBB"
    },
    {
        "name": "Bardon Mill",
        "crs_code": "BLL"
    },
    {
        "name": "Bare Lane",
        "crs_code": "BAR"
    },
    {
        "name": "Bargeddie",
        "crs_code": "BGI"
    },
    {
        "name": "Bargoed",
        "crs_code": "BGD"
    },
    {
        "name": "Barking",
        "crs_code": "BKG"
    },
    {
        "name": "Barlaston",
        "crs_code": "BRT"
    },
    {
        "name": "Barming",
        "crs_code": "BMG"
    },
    {
        "name": "Barmouth",
        "crs_code": "BRM"
    },
    {
        "name": "Barnehurst",
        "crs_code": "BNH"
    },
    {
        "name": "Barnes",
        "crs_code": "BNS"
    },
    {
        "name": "Barnes Bridge",
        "crs_code": "BNI"
    },
    {
        "name": "Barnetby",
        "crs_code": "BTB"
    },
    {
        "name": "Barnham",
        "crs_code": "BAA"
    },
    {
        "name": "Barnhill",
        "crs_code": "BNL"
    },
    {
        "name": "Barnsley",
        "crs_code": "BNY"
    },
    {
        "name": "Barnstaple",
        "crs_code": "BNP"
    },
    {
        "name": "Barnt Green",
        "crs_code": "BTG"
    },
    {
        "name": "Barrhead",
        "crs_code": "BRR"
    },
    {
        "name": "Barrhill",
        "crs_code": "BRL"
    },
    {
        "name": "Barrow Haven",
        "crs_code": "BAV"
    },
    {
        "name": "Barrow-in-Furness",
        "crs_code": "BIF"
    },
    {
        "name": "Barrow-Upon-Soar",
        "crs_code": "BWS"
    },
    {
        "name": "Barry",
        "crs_code": "BRY"
    },
    {
        "name": "Barry Docks",
        "crs_code": "BYD"
    },
    {
        "name": "Barry Island",
        "crs_code": "BYI"
    },
    {
        "name": "Barry Links",
        "crs_code": "BYL"
    },
    {
        "name": "Barton-on-Humber",
        "crs_code": "BAU"
    },
    {
        "name": "Basildon",
        "crs_code": "BSO"
    },
    {
        "name": "Basingstoke",
        "crs_code": "BSK"
    },
    {
        "name": "Bat & Ball",
        "crs_code": "BBL"
    },
    {
        "name": "Bath Spa",
        "crs_code": "BTH"
    },
    {
        "name": "Bathgate",
        "crs_code": "BHG"
    },
    {
        "name": "Batley",
        "crs_code": "BTL"
    },
    {
        "name": "Battersby",
        "crs_code": "BTT"
    },
    {
        "name": "Battersea Park",
        "crs_code": "BAK"
    },
    {
        "name": "Battle",
        "crs_code": "BAT"
    },
    {
        "name": "Battlesbridge",
        "crs_code": "BLB"
    },
    {
        "name": "Bayford",
        "crs_code": "BAY"
    },
    {
        "name": "Beaconsfield",
        "crs_code": "BCF"
    },
    {
        "name": "Bearley",
        "crs_code": "BER"
    },
    {
        "name": "Bearsden",
        "crs_code": "BRN"
    },
    {
        "name": "Bearsted",
        "crs_code": "BSD"
    },
    {
        "name": "Beasdale",
        "crs_code": "BSL"
    },
    {
        "name": "Beaulieu Road",
        "crs_code": "BEU"
    },
    {
        "name": "Beauly",
        "crs_code": "BEL"
    },
    {
        "name": "Bebington",
        "crs_code": "BEB"
    },
    {
        "name": "Beccles",
        "crs_code": "BCC"
    },
    {
        "name": "Beckenham Hill",
        "crs_code": "BEC"
    },
    {
        "name": "Beckenham Junction",
        "crs_code": "BKJ"
    },
    {
        "name": "Bedford",
        "crs_code": "BDM"
    },
    {
        "name": "Bedford St Johns",
        "crs_code": "BSJ"
    },
    {
        "name": "Bedhampton",
        "crs_code": "BDH"
    },
    {
        "name": "Bedminster",
        "crs_code": "BMT"
    },
    {
        "name": "Bedworth",
        "crs_code": "BEH"
    },
    {
        "name": "Bedwyn",
        "crs_code": "BDW"
    },
    {
        "name": "Beeston",
        "crs_code": "BEE"
    },
    {
        "name": "Bekesbourne",
        "crs_code": "BKS"
    },
    {
        "name": "Belle Vue",
        "crs_code": "BLV"
    },
    {
        "name": "Bellgrove",
        "crs_code": "BLG"
    },
    {
        "name": "Bellingham",
        "crs_code": "BGM"
    },
    {
        "name": "Bellshill",
        "crs_code": "BLH"
    },
    {
        "name": "Belmont",
        "crs_code": "BLM"
    },
    {
        "name": "Belper",
        "crs_code": "BLP"
    },
    {
        "name": "Beltring",
        "crs_code": "BEG"
    },
    {
        "name": "Belvedere",
        "crs_code": "BVD"
    },
    {
        "name": "Bempton",
        "crs_code": "BEM"
    },
    {
        "name": "Ben Rhydding",
        "crs_code": "BEY"
    },
    {
        "name": "Benfleet",
        "crs_code": "BEF"
    },
    {
        "name": "Bentham",
        "crs_code": "BEN"
    },
    {
        "name": "Bentley (Hants)",
        "crs_code": "BTY"
    },
    {
        "name": "Bentley (South Yorks)",
        "crs_code": "BYK"
    },
    {
        "name": "Bere Alston",
        "crs_code": "BAS"
    },
    {
        "name": "Bere Ferrers",
        "crs_code": "BFE"
    },
    {
        "name": "Berkhamsted",
        "crs_code": "BKM"
    },
    {
        "name": "Berkswell",
        "crs_code": "BKW"
    },
    {
        "name": "Bermuda Park",
        "crs_code": "BEP"
    },
    {
        "name": "Berney Arms",
        "crs_code": "BYA"
    },
    {
        "name": "Berry Brow",
        "crs_code": "BBW"
    },
    {
        "name": "Berrylands",
        "crs_code": "BRS"
    },
    {
        "name": "Berwick (Sussex)",
        "crs_code": "BRK"
    },
    {
        "name": "Berwick-upon-Tweed",
        "crs_code": "BWK"
    },
    {
        "name": "Bescar Lane",
        "crs_code": "BES"
    },
    {
        "name": "Bescot Stadium",
        "crs_code": "BSC"
    },
    {
        "name": "Betchworth",
        "crs_code": "BTO"
    },
    {
        "name": "Bethnal Green",
        "crs_code": "BET"
    },
    {
        "name": "Betws-y-Coed",
        "crs_code": "BYC"
    },
    {
        "name": "Beverley",
        "crs_code": "BEV"
    },
    {
        "name": "Bexhill",
        "crs_code": "BEX"
    },
    {
        "name": "Bexley",
        "crs_code": "BXY"
    },
    {
        "name": "Bexleyheath",
        "crs_code": "BXH"
    },
    {
        "name": "Bicester North",
        "crs_code": "BCS"
    },
    {
        "name": "Bicester Village",
        "crs_code": "BIT"
    },
    {
        "name": "Bickley",
        "crs_code": "BKL"
    },
    {
        "name": "Bidston",
        "crs_code": "BID"
    },
    {
        "name": "Biggleswade",
        "crs_code": "BIW"
    },
    {
        "name": "Bilbrook",
        "crs_code": "BBK"
    },
    {
        "name": "Billericay",
        "crs_code": "BIC"
    },
    {
        "name": "Billingham (Cleveland)",
        "crs_code": "BIL"
    },
    {
        "name": "Billingshurst",
        "crs_code": "BIG"
    },
    {
        "name": "Bingham",
        "crs_code": "BIN"
    },
    {
        "name": "Bingley",
        "crs_code": "BIY"
    },
    {
        "name": "Birchgrove",
        "crs_code": "BCG"
    },
    {
        "name": "Birchington-on-sea",
        "crs_code": "BCH"
    },
    {
        "name": "Birchwood",
        "crs_code": "BWD"
    },
    {
        "name": "Birkbeck",
        "crs_code": "BIK"
    },
    {
        "name": "Birkdale",
        "crs_code": "BDL"
    },
    {
        "name": "Birkenhead Central",
        "crs_code": "BKC"
    },
    {
        "name": "Birkenhead Hamilton Square",
        "crs_code": "BKQ"
    },
    {
        "name": "Birkenhead North",
        "crs_code": "BKN"
    },
    {
        "name": "Birkenhead Park",
        "crs_code": "BKP"
    },
    {
        "name": "Birmingham International",
        "crs_code": "BHI"
    },
    {
        "name": "Birmingham Moor Street",
        "crs_code": "BMO"
    },
    {
        "name": "Birmingham New Street",
        "crs_code": "BHM"
    },
    {
        "name": "Birmingham Snow Hill",
        "crs_code": "BSW"
    },
    {
        "name": "Bishop Auckland",
        "crs_code": "BIA"
    },
    {
        "name": "Bishopbriggs",
        "crs_code": "BBG"
    },
    {
        "name": "Bishops Stortford",
        "crs_code": "BIS"
    },
    {
        "name": "Bishopstone (Sussex)",
        "crs_code": "BIP"
    },
    {
        "name": "Bishopton (Strathclyde)",
        "crs_code": "BPT"
    },
    {
        "name": "Bitterne",
        "crs_code": "BTE"
    },
    {
        "name": "Blackburn",
        "crs_code": "BBN"
    },
    {
        "name": "Blackheath",
        "crs_code": "BKH"
    },
    {
        "name": "Blackhorse Road",
        "crs_code": "BHO"
    },
    {
        "name": "Blackpool North",
        "crs_code": "BPN"
    },
    {
        "name": "Blackpool Pleasure Beach",
        "crs_code": "BPB"
    },
    {
        "name": "Blackpool South",
        "crs_code": "BPS"
    },
    {
        "name": "Blackridge",
        "crs_code": "BKR"
    },
    {
        "name": "Blackrod",
        "crs_code": "BLK"
    },
    {
        "name": "Blackwater",
        "crs_code": "BAW"
    },
    {
        "name": "Blaenau Ffestiniog",
        "crs_code": "BFF"
    },
    {
        "name": "Blair Atholl",
        "crs_code": "BLA"
    },
    {
        "name": "Blairhill",
        "crs_code": "BAI"
    },
    {
        "name": "Blake Street",
        "crs_code": "BKT"
    },
    {
        "name": "Blakedown",
        "crs_code": "BKD"
    },
    {
        "name": "Blantyre",
        "crs_code": "BLT"
    },
    {
        "name": "Blaydon",
        "crs_code": "BLO"
    },
    {
        "name": "Bleasby",
        "crs_code": "BSB"
    },
    {
        "name": "Bletchley",
        "crs_code": "BLY"
    },
    {
        "name": "Bloxwich",
        "crs_code": "BLX"
    },
    {
        "name": "Bloxwich North",
        "crs_code": "BWN"
    },
    {
        "name": "Blundellsands & Crosby",
        "crs_code": "BLN"
    },
    {
        "name": "Blythe Bridge",
        "crs_code": "BYB"
    },
    {
        "name": "Bodmin Parkway",
        "crs_code": "BOD"
    },
    {
        "name": "Bodorgan",
        "crs_code": "BOR"
    },
    {
        "name": "Bognor Regis",
        "crs_code": "BOG"
    },
    {
        "name": "Bogston",
        "crs_code": "BGS"
    },
    {
        "name": "Bolton",
        "crs_code": "BON"
    },
    {
        "name": "Bolton-Upon-Dearne",
        "crs_code": "BTD"
    },
    {
        "name": "Bookham",
        "crs_code": "BKA"
    },
    {
        "name": "Bootle (Cumbria)",
        "crs_code": "BOC"
    },
    {
        "name": "Bootle New Strand",
        "crs_code": "BNW"
    },
    {
        "name": "Bootle Oriel Road",
        "crs_code": "BOT"
    },
    {
        "name": "Bordesley",
        "crs_code": "BBS"
    },
    {
        "name": "Borough Green & Wrotham",
        "crs_code": "BRG"
    },
    {
        "name": "Borth",
        "crs_code": "BRH"
    },
    {
        "name": "Bosham",
        "crs_code": "BOH"
    },
    {
        "name": "Boston",
        "crs_code": "BSN"
    },
    {
        "name": "Botley",
        "crs_code": "BOE"
    },
    {
        "name": "Bottesford",
        "crs_code": "BTF"
    },
    {
        "name": "Bourne End",
        "crs_code": "BNE"
    },
    {
        "name": "Bournemouth",
        "crs_code": "BMH"
    },
    {
        "name": "Bournville",
        "crs_code": "BRV"
    },
    {
        "name": "Bow Brickhill",
        "crs_code": "BWB"
    },
    {
        "name": "Bowes Park",
        "crs_code": "BOP"
    },
    {
        "name": "Bowling",
        "crs_code": "BWG"
    },
    {
        "name": "Box Hill & Westhumble",
        "crs_code": "BXW"
    },
    {
        "name": "Bracknell",
        "crs_code": "BCE"
    },
    {
        "name": "Bradford Forster Square",
        "crs_code": "BDQ"
    },
    {
        "name": "Bradford Interchange",
        "crs_code": "BDI"
    },
    {
        "name": "Bradford-on-Avon",
        "crs_code": "BOA"
    },
    {
        "name": "Brading",
        "crs_code": "BDN"
    },
    {
        "name": "Braintree",
        "crs_code": "BTR"
    },
    {
        "name": "Braintree Freeport",
        "crs_code": "BTP"
    },
    {
        "name": "Bramhall",
        "crs_code": "BML"
    },
    {
        "name": "Bramley (Hants)",
        "crs_code": "BMY"
    },
    {
        "name": "Bramley (W Yorks)",
        "crs_code": "BLE"
    },
    {
        "name": "Brampton (Cumbria)",
        "crs_code": "BMP"
    },
    {
        "name": "Brampton (Suffolk)",
        "crs_code": "BRP"
    },
    {
        "name": "Branchton",
        "crs_code": "BCN"
    },
    {
        "name": "Brandon",
        "crs_code": "BND"
    },
    {
        "name": "Branksome",
        "crs_code": "BSM"
    },
    {
        "name": "Braystones (Cumbria)",
        "crs_code": "BYS"
    },
    {
        "name": "Bredbury",
        "crs_code": "BDY"
    },
    {
        "name": "Breich",
        "crs_code": "BRC"
    },
    {
        "name": "Brentford",
        "crs_code": "BFD"
    },
    {
        "name": "Brentwood",
        "crs_code": "BRE"
    },
    {
        "name": "Bricket Wood",
        "crs_code": "BWO"
    },
    {
        "name": "Bridge of Allan",
        "crs_code": "BEA"
    },
    {
        "name": "Bridge of Orchy",
        "crs_code": "BRO"
    },
    {
        "name": "Bridgend",
        "crs_code": "BGN"
    },
    {
        "name": "Bridgeton",
        "crs_code": "BDG"
    },
    {
        "name": "Bridgwater",
        "crs_code": "BWT"
    },
    {
        "name": "Bridlington",
        "crs_code": "BDT"
    },
    {
        "name": "Brierfield",
        "crs_code": "BRF"
    },
    {
        "name": "Brigg",
        "crs_code": "BGG"
    },
    {
        "name": "Brighouse",
        "crs_code": "BGH"
    },
    {
        "name": "Brighton (East Sussex)",
        "crs_code": "BTN"
    },
    {
        "name": "Brimsdown",
        "crs_code": "BMD"
    },
    {
        "name": "Brinnington",
        "crs_code": "BNT"
    },
    {
        "name": "Bristol Parkway",
        "crs_code": "BPW"
    },
    {
        "name": "Bristol Temple Meads",
        "crs_code": "BRI"
    },
    {
        "name": "Brithdir",
        "crs_code": "BHD"
    },
    {
        "name": "Briton Ferry",
        "crs_code": "BNF"
    },
    {
        "name": "Brixton",
        "crs_code": "BRX"
    },
    {
        "name": "Broad Green",
        "crs_code": "BGE"
    },
    {
        "name": "Broadbottom",
        "crs_code": "BDB"
    },
    {
        "name": "Broadstairs",
        "crs_code": "BSR"
    },
    {
        "name": "Brockenhurst",
        "crs_code": "BCU"
    },
    {
        "name": "Brockholes",
        "crs_code": "BHS"
    },
    {
        "name": "Brockley",
        "crs_code": "BCY"
    },
    {
        "name": "Bromborough",
        "crs_code": "BOM"
    },
    {
        "name": "Bromborough Rake",
        "crs_code": "BMR"
    },
    {
        "name": "Bromley Cross (Lancs)",
        "crs_code": "BMC"
    },
    {
        "name": "Bromley North",
        "crs_code": "BMN"
    },
    {
        "name": "Bromley South",
        "crs_code": "BMS"
    },
    {
        "name": "Bromsgrove",
        "crs_code": "BMV"
    },
    {
        "name": "Brondesbury",
        "crs_code": "BSY"
    },
    {
        "name": "Brondesbury Park",
        "crs_code": "BSP"
    },
    {
        "name": "Brookmans Park",
        "crs_code": "BPK"
    },
    {
        "name": "Brookwood",
        "crs_code": "BKO"
    },
    {
        "name": "Broome",
        "crs_code": "BME"
    },
    {
        "name": "Broomfleet",
        "crs_code": "BMF"
    },
    {
        "name": "Brora",
        "crs_code": "BRA"
    },
    {
        "name": "Brough",
        "crs_code": "BUH"
    },
    {
        "name": "Broughty Ferry",
        "crs_code": "BYF"
    },
    {
        "name": "Broxbourne",
        "crs_code": "BXB"
    },
    {
        "name": "Bruce Grove",
        "crs_code": "BCV"
    },
    {
        "name": "Brundall",
        "crs_code": "BDA"
    },
    {
        "name": "Brundall Gardens",
        "crs_code": "BGA"
    },
    {
        "name": "Brunstane",
        "crs_code": "BSU"
    },
    {
        "name": "Brunswick",
        "crs_code": "BRW"
    },
    {
        "name": "Bruton",
        "crs_code": "BRU"
    },
    {
        "name": "Bryn",
        "crs_code": "BYN"
    },
    {
        "name": "Buckenham (Norfolk)",
        "crs_code": "BUC"
    },
    {
        "name": "Buckley",
        "crs_code": "BCK"
    },
    {
        "name": "Bucknell",
        "crs_code": "BUK"
    },
    {
        "name": "Buckshaw Parkway",
        "crs_code": "BSV"
    },
    {
        "name": "Bugle",
        "crs_code": "BGL"
    },
    {
        "name": "Builth Road",
        "crs_code": "BHR"
    },
    {
        "name": "Bulwell",
        "crs_code": "BLW"
    },
    {
        "name": "Bures",
        "crs_code": "BUE"
    },
    {
        "name": "Burgess Hill",
        "crs_code": "BUG"
    },
    {
        "name": "Burley Park",
        "crs_code": "BUY"
    },
    {
        "name": "Burley-in-Wharfedale",
        "crs_code": "BUW"
    },
    {
        "name": "Burnage",
        "crs_code": "BNA"
    },
    {
        "name": "Burneside (Cumbria)",
        "crs_code": "BUD"
    },
    {
        "name": "Burnham (Bucks)",
        "crs_code": "BNM"
    },
    {
        "name": "Burnham-on-Crouch",
        "crs_code": "BUU"
    },
    {
        "name": "Burnley Barracks",
        "crs_code": "BUB"
    },
    {
        "name": "Burnley Central",
        "crs_code": "BNC"
    },
    {
        "name": "Burnley Manchester Road",
        "crs_code": "BYM"
    },
    {
        "name": "Burnside (Strathclyde)",
        "crs_code": "BUI"
    },
    {
        "name": "Burntisland",
        "crs_code": "BTS"
    },
    {
        "name": "Burscough Bridge",
        "crs_code": "BCB"
    },
    {
        "name": "Burscough Junction",
        "crs_code": "BCJ"
    },
    {
        "name": "Bursledon",
        "crs_code": "BUO"
    },
    {
        "name": "Burton Joyce",
        "crs_code": "BUJ"
    },
    {
        "name": "Burton-on-Trent",
        "crs_code": "BUT"
    },
    {
        "name": "Bury St Edmunds",
        "crs_code": "BSE"
    },
    {
        "name": "Busby",
        "crs_code": "BUS"
    },
    {
        "name": "Bush Hill Park",
        "crs_code": "BHK"
    },
    {
        "name": "Bushey",
        "crs_code": "BSH"
    },
    {
        "name": "Butlers Lane",
        "crs_code": "BUL"
    },
    {
        "name": "Buxted",
        "crs_code": "BXD"
    },
    {
        "name": "Buxton",
        "crs_code": "BUX"
    },
    {
        "name": "Byfleet & New Haw",
        "crs_code": "BFN"
    },
    {
        "name": "Bynea",
        "crs_code": "BYE"
    },
    {
        "name": "Cadoxton",
        "crs_code": "CAD"
    },
    {
        "name": "Caergwrle",
        "crs_code": "CGW"
    },
    {
        "name": "Caerphilly",
        "crs_code": "CPH"
    },
    {
        "name": "Caersws",
        "crs_code": "CWS"
    },
    {
        "name": "Caldercruix",
        "crs_code": "CAC"
    },
    {
        "name": "Caldicot",
        "crs_code": "CDT"
    },
    {
        "name": "Caledonian Rd & Barnsbury",
        "crs_code": "CIR"
    },
    {
        "name": "Calstock",
        "crs_code": "CSK"
    },
    {
        "name": "Cam & Dursley",
        "crs_code": "CDU"
    },
    {
        "name": "Camberley",
        "crs_code": "CAM"
    },
    {
        "name": "Camborne",
        "crs_code": "CBN"
    },
    {
        "name": "Cambridge",
        "crs_code": "CBG"
    },
    {
        "name": "Cambridge Heath",
        "crs_code": "CBH"
    },
    {
        "name": "Cambridge North",
        "crs_code": "CMB"
    },
    {
        "name": "Cambuslang",
        "crs_code": "CBL"
    },
    {
        "name": "Camden Road",
        "crs_code": "CMD"
    },
    {
        "name": "Camelon",
        "crs_code": "CMO"
    },
    {
        "name": "Canada Water",
        "crs_code": "ZCW"
    },
    {
        "name": "Canley",
        "crs_code": "CNL"
    },
    {
        "name": "Cannock",
        "crs_code": "CAO"
    },
    {
        "name": "Canonbury",
        "crs_code": "CNN"
    },
    {
        "name": "Canterbury East",
        "crs_code": "CBE"
    },
    {
        "name": "Canterbury West",
        "crs_code": "CBW"
    },
    {
        "name": "Cantley",
        "crs_code": "CNY"
    },
    {
        "name": "Capenhurst",
        "crs_code": "CPU"
    },
    {
        "name": "Carbis Bay",
        "crs_code": "CBB"
    },
    {
        "name": "Cardenden",
        "crs_code": "CDD"
    },
    {
        "name": "Cardiff Bay",
        "crs_code": "CDB"
    },
    {
        "name": "Cardiff Central",
        "crs_code": "CDF"
    },
    {
        "name": "Cardiff Queen Street",
        "crs_code": "CDQ"
    },
    {
        "name": "Cardonald",
        "crs_code": "CDO"
    },
    {
        "name": "Cardross",
        "crs_code": "CDR"
    },
    {
        "name": "Carfin",
        "crs_code": "CRF"
    },
    {
        "name": "Cark & Cartmel",
        "crs_code": "CAK"
    },
    {
        "name": "Carlisle",
        "crs_code": "CAR"
    },
    {
        "name": "Carlton",
        "crs_code": "CTO"
    },
    {
        "name": "Carluke",
        "crs_code": "CLU"
    },
    {
        "name": "Carmarthen",
        "crs_code": "CMN"
    },
    {
        "name": "Carmyle",
        "crs_code": "CML"
    },
    {
        "name": "Carnforth",
        "crs_code": "CNF"
    },
    {
        "name": "Carnoustie",
        "crs_code": "CAN"
    },
    {
        "name": "Carntyne",
        "crs_code": "CAY"
    },
    {
        "name": "Carpenders Park",
        "crs_code": "CPK"
    },
    {
        "name": "Carrbridge",
        "crs_code": "CAG"
    },
    {
        "name": "Carshalton",
        "crs_code": "CSH"
    },
    {
        "name": "Carshalton Beeches",
        "crs_code": "CSB"
    },
    {
        "name": "Carstairs",
        "crs_code": "CRS"
    },
    {
        "name": "Cartsdyke",
        "crs_code": "CDY"
    },
    {
        "name": "Castle Bar Park",
        "crs_code": "CBP"
    },
    {
        "name": "Castle Cary",
        "crs_code": "CLC"
    },
    {
        "name": "Castleford",
        "crs_code": "CFD"
    },
    {
        "name": "Castleton (Manchester)",
        "crs_code": "CAS"
    },
    {
        "name": "Castleton Moor",
        "crs_code": "CSM"
    },
    {
        "name": "Caterham",
        "crs_code": "CAT"
    },
    {
        "name": "Catford",
        "crs_code": "CTF"
    },
    {
        "name": "Catford Bridge",
        "crs_code": "CFB"
    },
    {
        "name": "Cathays",
        "crs_code": "CYS"
    },
    {
        "name": "Cathcart",
        "crs_code": "CCT"
    },
    {
        "name": "Cattal",
        "crs_code": "CTL"
    },
    {
        "name": "Causeland",
        "crs_code": "CAU"
    },
    {
        "name": "Cefn-y-Bedd",
        "crs_code": "CYB"
    },
    {
        "name": "Chadwell Heath",
        "crs_code": "CTH"
    },
    {
        "name": "Chafford Hundred Lakeside",
        "crs_code": "CFH"
    },
    {
        "name": "Chalfont & Latimer",
        "crs_code": "CFO"
    },
    {
        "name": "Chalkwell",
        "crs_code": "CHW"
    },
    {
        "name": "Chandlers Ford",
        "crs_code": "CFR"
    },
    {
        "name": "Chapel-en-le-Frith",
        "crs_code": "CEF"
    },
    {
        "name": "Chapelton (Devon)",
        "crs_code": "CPN"
    },
    {
        "name": "Chapeltown (South Yorks)",
        "crs_code": "CLN"
    },
    {
        "name": "Chappel & Wakes Colne",
        "crs_code": "CWC"
    },
    {
        "name": "Charing (Kent)",
        "crs_code": "CHG"
    },
    {
        "name": "Charing Cross (Glasgow)",
        "crs_code": "CHC"
    },
    {
        "name": "Charlbury",
        "crs_code": "CBY"
    },
    {
        "name": "Charlton",
        "crs_code": "CTN"
    },
    {
        "name": "Chartham",
        "crs_code": "CRT"
    },
    {
        "name": "Chassen Road",
        "crs_code": "CSR"
    },
    {
        "name": "Chatelherault",
        "crs_code": "CTE"
    },
    {
        "name": "Chatham",
        "crs_code": "CTM"
    },
    {
        "name": "Chathill",
        "crs_code": "CHT"
    },
    {
        "name": "Cheadle Hulme",
        "crs_code": "CHU"
    },
    {
        "name": "Cheam",
        "crs_code": "CHE"
    },
    {
        "name": "Cheddington",
        "crs_code": "CED"
    },
    {
        "name": "Chelford (Cheshire)",
        "crs_code": "CEL"
    },
    {
        "name": "Chelmsford",
        "crs_code": "CHM"
    },
    {
        "name": "Chelsfield",
        "crs_code": "CLD"
    },
    {
        "name": "Cheltenham Spa",
        "crs_code": "CNM"
    },
    {
        "name": "Chepstow",
        "crs_code": "CPW"
    },
    {
        "name": "Cherry Tree",
        "crs_code": "CYT"
    },
    {
        "name": "Chertsey",
        "crs_code": "CHY"
    },
    {
        "name": "Cheshunt",
        "crs_code": "CHN"
    },
    {
        "name": "Chessington North",
        "crs_code": "CSN"
    },
    {
        "name": "Chessington South",
        "crs_code": "CSS"
    },
    {
        "name": "Chester",
        "crs_code": "CTR"
    },
    {
        "name": "Chester Road",
        "crs_code": "CRD"
    },
    {
        "name": "Chesterfield",
        "crs_code": "CHD"
    },
    {
        "name": "Chester-le-Street",
        "crs_code": "CLS"
    },
    {
        "name": "Chestfield & Swalecliffe",
        "crs_code": "CSW"
    },
    {
        "name": "Chetnole",
        "crs_code": "CNO"
    },
    {
        "name": "Chichester",
        "crs_code": "CCH"
    },
    {
        "name": "Chilham",
        "crs_code": "CIL"
    },
    {
        "name": "Chilworth",
        "crs_code": "CHL"
    },
    {
        "name": "Chingford",
        "crs_code": "CHI"
    },
    {
        "name": "Chinley",
        "crs_code": "CLY"
    },
    {
        "name": "Chippenham",
        "crs_code": "CPM"
    },
    {
        "name": "Chipstead",
        "crs_code": "CHP"
    },
    {
        "name": "Chirk",
        "crs_code": "CRK"
    },
    {
        "name": "Chislehurst",
        "crs_code": "CIT"
    },
    {
        "name": "Chiswick",
        "crs_code": "CHK"
    },
    {
        "name": "Cholsey",
        "crs_code": "CHO"
    },
    {
        "name": "Chorley",
        "crs_code": "CRL"
    },
    {
        "name": "Chorleywood",
        "crs_code": "CLW"
    },
    {
        "name": "Christchurch",
        "crs_code": "CHR"
    },
    {
        "name": "Christs Hospital",
        "crs_code": "CHH"
    },
    {
        "name": "Church & Oswaldtwistle",
        "crs_code": "CTW"
    },
    {
        "name": "Church Fenton",
        "crs_code": "CHF"
    },
    {
        "name": "Church Stretton",
        "crs_code": "CTT"
    },
    {
        "name": "Cilmeri",
        "crs_code": "CIM"
    },
    {
        "name": "City Thameslink",
        "crs_code": "CTK"
    },
    {
        "name": "Clacton-on-Sea",
        "crs_code": "CLT"
    },
    {
        "name": "Clandon",
        "crs_code": "CLA"
    },
    {
        "name": "Clapham (North Yorkshire)",
        "crs_code": "CPY"
    },
    {
        "name": "Clapham High Street",
        "crs_code": "CLP"
    },
    {
        "name": "Clapham Junction",
        "crs_code": "CLJ"
    },
    {
        "name": "Clapton",
        "crs_code": "CPT"
    },
    {
        "name": "Clarbeston Road",
        "crs_code": "CLR"
    },
    {
        "name": "Clarkston",
        "crs_code": "CKS"
    },
    {
        "name": "Claverdon",
        "crs_code": "CLV"
    },
    {
        "name": "Claygate",
        "crs_code": "CLG"
    },
    {
        "name": "Cleethorpes",
        "crs_code": "CLE"
    },
    {
        "name": "Cleland",
        "crs_code": "CEA"
    },
    {
        "name": "Clifton (Manchester)",
        "crs_code": "CLI"
    },
    {
        "name": "Clifton Down",
        "crs_code": "CFN"
    },
    {
        "name": "Clitheroe",
        "crs_code": "CLH"
    },
    {
        "name": "Clock House",
        "crs_code": "CLK"
    },
    {
        "name": "Clunderwen",
        "crs_code": "CUW"
    },
    {
        "name": "Clydebank",
        "crs_code": "CYK"
    },
    {
        "name": "Coatbridge Central",
        "crs_code": "CBC"
    },
    {
        "name": "Coatbridge Sunnyside",
        "crs_code": "CBS"
    },
    {
        "name": "Coatdyke",
        "crs_code": "COA"
    },
    {
        "name": "Cobham & Stoke d'Abernon",
        "crs_code": "CSD"
    },
    {
        "name": "Codsall",
        "crs_code": "CSL"
    },
    {
        "name": "Cogan",
        "crs_code": "CGN"
    },
    {
        "name": "Colchester",
        "crs_code": "COL"
    },
    {
        "name": "Colchester Town",
        "crs_code": "CET"
    },
    {
        "name": "Coleshill Parkway",
        "crs_code": "CEH"
    },
    {
        "name": "Collingham",
        "crs_code": "CLM"
    },
    {
        "name": "Collington",
        "crs_code": "CLL"
    },
    {
        "name": "Colne",
        "crs_code": "CNE"
    },
    {
        "name": "Colwall",
        "crs_code": "CWL"
    },
    {
        "name": "Colwyn Bay",
        "crs_code": "CWB"
    },
    {
        "name": "Combe (Oxon)",
        "crs_code": "CME"
    },
    {
        "name": "Commondale",
        "crs_code": "COM"
    },
    {
        "name": "Congleton",
        "crs_code": "CNG"
    },
    {
        "name": "Conisbrough",
        "crs_code": "CNS"
    },
    {
        "name": "Connel Ferry",
        "crs_code": "CON"
    },
    {
        "name": "Conon Bridge",
        "crs_code": "CBD"
    },
    {
        "name": "Cononley",
        "crs_code": "CEY"
    },
    {
        "name": "Conway Park",
        "crs_code": "CNP"
    },
    {
        "name": "Conwy",
        "crs_code": "CNW"
    },
    {
        "name": "Cooden Beach",
        "crs_code": "COB"
    },
    {
        "name": "Cookham",
        "crs_code": "COO"
    },
    {
        "name": "Cooksbridge",
        "crs_code": "CBR"
    },
    {
        "name": "Coombe Junction Halt",
        "crs_code": "COE"
    },
    {
        "name": "Copplestone",
        "crs_code": "COP"
    },
    {
        "name": "Corbridge",
        "crs_code": "CRB"
    },
    {
        "name": "Corby",
        "crs_code": "COR"
    },
    {
        "name": "Corfe Castle",
        "crs_code": "CFC"
    },
    {
        "name": "Corkerhill",
        "crs_code": "CKH"
    },
    {
        "name": "Corkickle",
        "crs_code": "CKL"
    },
    {
        "name": "Corpach",
        "crs_code": "CPA"
    },
    {
        "name": "Corrour",
        "crs_code": "CRR"
    },
    {
        "name": "Coryton",
        "crs_code": "COY"
    },
    {
        "name": "Coseley",
        "crs_code": "CSY"
    },
    {
        "name": "Cosford",
        "crs_code": "COS"
    },
    {
        "name": "Cosham",
        "crs_code": "CSA"
    },
    {
        "name": "Cottingham",
        "crs_code": "CGM"
    },
    {
        "name": "Cottingley",
        "crs_code": "COT"
    },
    {
        "name": "Coulsdon South",
        "crs_code": "CDS"
    },
    {
        "name": "Coulsdon Town",
        "crs_code": "CDN"
    },
    {
        "name": "Coventry",
        "crs_code": "COV"
    },
    {
        "name": "Coventry Arena",
        "crs_code": "CAA"
    },
    {
        "name": "Cowden (Kent)",
        "crs_code": "CWN"
    },
    {
        "name": "Cowdenbeath",
        "crs_code": "COW"
    },
    {
        "name": "Cradley Heath",
        "crs_code": "CRA"
    },
    {
        "name": "Craigendoran",
        "crs_code": "CGD"
    },
    {
        "name": "Cramlington",
        "crs_code": "CRM"
    },
    {
        "name": "Cranbrook (Devon)",
        "crs_code": "CBK"
    },
    {
        "name": "Craven Arms",
        "crs_code": "CRV"
    },
    {
        "name": "Crawley",
        "crs_code": "CRW"
    },
    {
        "name": "Crayford",
        "crs_code": "CRY"
    },
    {
        "name": "Crediton",
        "crs_code": "CDI"
    },
    {
        "name": "Cressing (Essex)",
        "crs_code": "CES"
    },
    {
        "name": "Cressington",
        "crs_code": "CSG"
    },
    {
        "name": "Creswell",
        "crs_code": "CWD"
    },
    {
        "name": "Crewe",
        "crs_code": "CRE"
    },
    {
        "name": "Crewkerne",
        "crs_code": "CKN"
    },
    {
        "name": "Crews Hill",
        "crs_code": "CWH"
    },
    {
        "name": "Crianlarich",
        "crs_code": "CNR"
    },
    {
        "name": "Criccieth",
        "crs_code": "CCC"
    },
    {
        "name": "Cricklewood",
        "crs_code": "CRI"
    },
    {
        "name": "Croftfoot",
        "crs_code": "CFF"
    },
    {
        "name": "Crofton Park",
        "crs_code": "CFT"
    },
    {
        "name": "Cromer",
        "crs_code": "CMR"
    },
    {
        "name": "Cromford",
        "crs_code": "CMF"
    },
    {
        "name": "Crookston",
        "crs_code": "CKT"
    },
    {
        "name": "Cross Gates",
        "crs_code": "CRG"
    },
    {
        "name": "Crossflatts",
        "crs_code": "CFL"
    },
    {
        "name": "Crosshill",
        "crs_code": "COI"
    },
    {
        "name": "Crosskeys",
        "crs_code": "CKY"
    },
    {
        "name": "Crossmyloof",
        "crs_code": "CMY"
    },
    {
        "name": "Croston",
        "crs_code": "CSO"
    },
    {
        "name": "Crouch Hill",
        "crs_code": "CRH"
    },
    {
        "name": "Crowborough",
        "crs_code": "COH"
    },
    {
        "name": "Crowhurst",
        "crs_code": "CWU"
    },
    {
        "name": "Crowle",
        "crs_code": "CWE"
    },
    {
        "name": "Crowthorne",
        "crs_code": "CRN"
    },
    {
        "name": "Croy",
        "crs_code": "CRO"
    },
    {
        "name": "Crystal Palace",
        "crs_code": "CYP"
    },
    {
        "name": "Cuddington",
        "crs_code": "CUD"
    },
    {
        "name": "Cuffley",
        "crs_code": "CUF"
    },
    {
        "name": "Culham",
        "crs_code": "CUM"
    },
    {
        "name": "Culrain",
        "crs_code": "CUA"
    },
    {
        "name": "Cumbernauld",
        "crs_code": "CUB"
    },
    {
        "name": "Cupar",
        "crs_code": "CUP"
    },
    {
        "name": "Curriehill",
        "crs_code": "CUH"
    },
    {
        "name": "Cuxton",
        "crs_code": "CUX"
    },
    {
        "name": "Cwmbach",
        "crs_code": "CMH"
    },
    {
        "name": "Cwmbran",
        "crs_code": "CWM"
    },
    {
        "name": "Cynghordy",
        "crs_code": "CYN"
    },
    {
        "name": "Dagenham Dock",
        "crs_code": "DDK"
    },
    {
        "name": "Daisy Hill",
        "crs_code": "DSY"
    },
    {
        "name": "Dalgety Bay",
        "crs_code": "DAG"
    },
    {
        "name": "Dalmally",
        "crs_code": "DAL"
    },
    {
        "name": "Dalmarnock",
        "crs_code": "DAK"
    },
    {
        "name": "Dalmeny",
        "crs_code": "DAM"
    },
    {
        "name": "Dalmuir",
        "crs_code": "DMR"
    },
    {
        "name": "Dalreoch",
        "crs_code": "DLR"
    },
    {
        "name": "Dalry",
        "crs_code": "DLY"
    },
    {
        "name": "Dalston (Cumbria)",
        "crs_code": "DLS"
    },
    {
        "name": "Dalston Junction",
        "crs_code": "DLJ"
    },
    {
        "name": "Dalston Kingsland",
        "crs_code": "DLK"
    },
    {
        "name": "Dalton (Cumbria)",
        "crs_code": "DLT"
    },
    {
        "name": "Dalwhinnie",
        "crs_code": "DLW"
    },
    {
        "name": "Danby",
        "crs_code": "DNY"
    },
    {
        "name": "Danescourt",
        "crs_code": "DCT"
    },
    {
        "name": "Danzey",
        "crs_code": "DZY"
    },
    {
        "name": "Darlington",
        "crs_code": "DAR"
    },
    {
        "name": "Darnall",
        "crs_code": "DAN"
    },
    {
        "name": "Darsham",
        "crs_code": "DSM"
    },
    {
        "name": "Dartford",
        "crs_code": "DFD"
    },
    {
        "name": "Darton",
        "crs_code": "DRT"
    },
    {
        "name": "Darwen",
        "crs_code": "DWN"
    },
    {
        "name": "Datchet",
        "crs_code": "DAT"
    },
    {
        "name": "Davenport",
        "crs_code": "DVN"
    },
    {
        "name": "Dawlish",
        "crs_code": "DWL"
    },
    {
        "name": "Dawlish Warren",
        "crs_code": "DWW"
    },
    {
        "name": "Deal",
        "crs_code": "DEA"
    },
    {
        "name": "Dean (Wilts)",
        "crs_code": "DEN"
    },
    {
        "name": "Deansgate",
        "crs_code": "DGT"
    },
    {
        "name": "Deganwy",
        "crs_code": "DGY"
    },
    {
        "name": "Deighton",
        "crs_code": "DHN"
    },
    {
        "name": "Delamere",
        "crs_code": "DLM"
    },
    {
        "name": "Denby Dale",
        "crs_code": "DBD"
    },
    {
        "name": "Denham",
        "crs_code": "DNM"
    },
    {
        "name": "Denham Golf Club",
        "crs_code": "DGC"
    },
    {
        "name": "Denmark Hill",
        "crs_code": "DMK"
    },
    {
        "name": "Dent",
        "crs_code": "DNT"
    },
    {
        "name": "Denton",
        "crs_code": "DTN"
    },
    {
        "name": "Deptford",
        "crs_code": "DEP"
    },
    {
        "name": "Derby",
        "crs_code": "DBY"
    },
    {
        "name": "Derby Road (Ipswich)",
        "crs_code": "DBR"
    },
    {
        "name": "Devonport (Devon)",
        "crs_code": "DPT"
    },
    {
        "name": "Devonport Dockyard",
        "crs_code": "DOC"
    },
    {
        "name": "Dewsbury",
        "crs_code": "DEW"
    },
    {
        "name": "Didcot Parkway",
        "crs_code": "DID"
    },
    {
        "name": "Digby & Sowton",
        "crs_code": "DIG"
    },
    {
        "name": "Dilton Marsh",
        "crs_code": "DMH"
    },
    {
        "name": "Dinas (Rhondda)",
        "crs_code": "DMG"
    },
    {
        "name": "Dinas Powys",
        "crs_code": "DNS"
    },
    {
        "name": "Dingle Road",
        "crs_code": "DGL"
    },
    {
        "name": "Dingwall",
        "crs_code": "DIN"
    },
    {
        "name": "Dinsdale",
        "crs_code": "DND"
    },
    {
        "name": "Dinting",
        "crs_code": "DTG"
    },
    {
        "name": "Disley",
        "crs_code": "DSL"
    },
    {
        "name": "Diss",
        "crs_code": "DIS"
    },
    {
        "name": "Dodworth",
        "crs_code": "DOD"
    },
    {
        "name": "Dolau",
        "crs_code": "DOL"
    },
    {
        "name": "Doleham",
        "crs_code": "DLH"
    },
    {
        "name": "Dolgarrog",
        "crs_code": "DLG"
    },
    {
        "name": "Dolwyddelan",
        "crs_code": "DWD"
    },
    {
        "name": "Doncaster",
        "crs_code": "DON"
    },
    {
        "name": "Dorchester South",
        "crs_code": "DCH"
    },
    {
        "name": "Dorchester West",
        "crs_code": "DCW"
    },
    {
        "name": "Dore & Totley",
        "crs_code": "DOR"
    },
    {
        "name": "Dorking (Main)",
        "crs_code": "DKG"
    },
    {
        "name": "Dorking Deepdene",
        "crs_code": "DPD"
    },
    {
        "name": "Dorking West",
        "crs_code": "DKT"
    },
    {
        "name": "Dormans",
        "crs_code": "DMS"
    },
    {
        "name": "Dorridge",
        "crs_code": "DDG"
    },
    {
        "name": "Dove Holes",
        "crs_code": "DVH"
    },
    {
        "name": "Dover Priory",
        "crs_code": "DVP"
    },
    {
        "name": "Dovercourt",
        "crs_code": "DVC"
    },
    {
        "name": "Dovey Junction",
        "crs_code": "DVY"
    },
    {
        "name": "Downham Market",
        "crs_code": "DOW"
    },
    {
        "name": "Drayton Green",
        "crs_code": "DRG"
    },
    {
        "name": "Drayton Park",
        "crs_code": "DYP"
    },
    {
        "name": "Drem",
        "crs_code": "DRM"
    },
    {
        "name": "Driffield",
        "crs_code": "DRF"
    },
    {
        "name": "Drigg",
        "crs_code": "DRI"
    },
    {
        "name": "Droitwich Spa",
        "crs_code": "DTW"
    },
    {
        "name": "Dronfield",
        "crs_code": "DRO"
    },
    {
        "name": "Drumchapel",
        "crs_code": "DMC"
    },
    {
        "name": "Drumfrochar",
        "crs_code": "DFR"
    },
    {
        "name": "Drumgelloch",
        "crs_code": "DRU"
    },
    {
        "name": "Drumry",
        "crs_code": "DMY"
    },
    {
        "name": "Dublin Ferryport",
        "crs_code": "DFP"
    },
    {
        "name": "Dublin Port - Stena",
        "crs_code": "DPS"
    },
    {
        "name": "Duddeston",
        "crs_code": "DUD"
    },
    {
        "name": "Dudley Port",
        "crs_code": "DDP"
    },
    {
        "name": "Duffield",
        "crs_code": "DFI"
    },
    {
        "name": "Duirinish",
        "crs_code": "DRN"
    },
    {
        "name": "Duke Street",
        "crs_code": "DST"
    },
    {
        "name": "Dullingham",
        "crs_code": "DUL"
    },
    {
        "name": "Dumbarton Central",
        "crs_code": "DBC"
    },
    {
        "name": "Dumbarton East",
        "crs_code": "DBE"
    },
    {
        "name": "Dumbreck",
        "crs_code": "DUM"
    },
    {
        "name": "Dumfries",
        "crs_code": "DMF"
    },
    {
        "name": "Dumpton Park",
        "crs_code": "DMP"
    },
    {
        "name": "Dunbar",
        "crs_code": "DUN"
    },
    {
        "name": "Dunblane",
        "crs_code": "DBL"
    },
    {
        "name": "Duncraig",
        "crs_code": "DCG"
    },
    {
        "name": "Dundee",
        "crs_code": "DEE"
    },
    {
        "name": "Dunfermline Queen Margaret",
        "crs_code": "DFL"
    },
    {
        "name": "Dunfermline Town",
        "crs_code": "DFE"
    },
    {
        "name": "Dunkeld & Birnam",
        "crs_code": "DKD"
    },
    {
        "name": "Dunlop",
        "crs_code": "DNL"
    },
    {
        "name": "Dunrobin Castle",
        "crs_code": "DNO"
    },
    {
        "name": "Dunston",
        "crs_code": "DOT"
    },
    {
        "name": "Dunton Green",
        "crs_code": "DNG"
    },
    {
        "name": "Durham",
        "crs_code": "DHM"
    },
    {
        "name": "Durrington-on-Sea",
        "crs_code": "DUR"
    },
    {
        "name": "Dyce",
        "crs_code": "DYC"
    },
    {
        "name": "Dyffryn Ardudwy",
        "crs_code": "DYF"
    },
    {
        "name": "Eaglescliffe",
        "crs_code": "EAG"
    },
    {
        "name": "Ealing Broadway",
        "crs_code": "EAL"
    },
    {
        "name": "Earlestown",
        "crs_code": "ERL"
    },
    {
        "name": "Earley",
        "crs_code": "EAR"
    },
    {
        "name": "Earlsfield",
        "crs_code": "EAD"
    },
    {
        "name": "Earlswood (Surrey)",
        "crs_code": "ELD"
    },
    {
        "name": "Earlswood (West Midlands)",
        "crs_code": "EWD"
    },
    {
        "name": "East Croydon",
        "crs_code": "ECR"
    },
    {
        "name": "East Didsbury",
        "crs_code": "EDY"
    },
    {
        "name": "East Dulwich",
        "crs_code": "EDW"
    },
    {
        "name": "East Farleigh",
        "crs_code": "EFL"
    },
    {
        "name": "East Garforth",
        "crs_code": "EGF"
    },
    {
        "name": "East Grinstead",
        "crs_code": "EGR"
    },
    {
        "name": "East Kilbride",
        "crs_code": "EKL"
    },
    {
        "name": "East Malling",
        "crs_code": "EML"
    },
    {
        "name": "East Midlands Parkway",
        "crs_code": "EMD"
    },
    {
        "name": "East Tilbury",
        "crs_code": "ETL"
    },
    {
        "name": "East Worthing",
        "crs_code": "EWR"
    },
    {
        "name": "Eastbourne",
        "crs_code": "EBN"
    },
    {
        "name": "Eastbrook",
        "crs_code": "EBK"
    },
    {
        "name": "Easterhouse",
        "crs_code": "EST"
    },
    {
        "name": "Eastham Rake",
        "crs_code": "ERA"
    },
    {
        "name": "Eastleigh",
        "crs_code": "ESL"
    },
    {
        "name": "Eastrington",
        "crs_code": "EGN"
    },
    {
        "name": "Ebbsfleet International",
        "crs_code": "EBD"
    },
    {
        "name": "Ebbw Vale Parkway",
        "crs_code": "EBV"
    },
    {
        "name": "Ebbw Vale Town",
        "crs_code": "EBB"
    },
    {
        "name": "Eccles (Manchester)",
        "crs_code": "ECC"
    },
    {
        "name": "Eccles Road",
        "crs_code": "ECS"
    },
    {
        "name": "Eccleston Park",
        "crs_code": "ECL"
    },
    {
        "name": "Edale",
        "crs_code": "EDL"
    },
    {
        "name": "Eden Park",
        "crs_code": "EDN"
    },
    {
        "name": "Edenbridge",
        "crs_code": "EBR"
    },
    {
        "name": "Edenbridge Town",
        "crs_code": "EBT"
    },
    {
        "name": "Edge Hill",
        "crs_code": "EDG"
    },
    {
        "name": "Edinburgh",
        "crs_code": "EDB"
    },
    {
        "name": "Edinburgh Gateway",
        "crs_code": "EGY"
    },
    {
        "name": "Edinburgh Park",
        "crs_code": "EDP"
    },
    {
        "name": "Edmonton Green",
        "crs_code": "EDR"
    },
    {
        "name": "Effingham Junction",
        "crs_code": "EFF"
    },
    {
        "name": "Eggesford",
        "crs_code": "EGG"
    },
    {
        "name": "Egham",
        "crs_code": "EGH"
    },
    {
        "name": "Egton",
        "crs_code": "EGT"
    },
    {
        "name": "Elephant & Castle",
        "crs_code": "EPH"
    },
    {
        "name": "Elephant & Castle (Underground)",
        "crs_code": "ZEL"
    },
    {
        "name": "Elgin",
        "crs_code": "ELG"
    },
    {
        "name": "Ellesmere Port",
        "crs_code": "ELP"
    },
    {
        "name": "Elmers End",
        "crs_code": "ELE"
    },
    {
        "name": "Elmstead Woods",
        "crs_code": "ESD"
    },
    {
        "name": "Elmswell",
        "crs_code": "ESW"
    },
    {
        "name": "Elsecar",
        "crs_code": "ELR"
    },
    {
        "name": "Elsenham (Essex)",
        "crs_code": "ESM"
    },
    {
        "name": "Elstree & Borehamwood",
        "crs_code": "ELS"
    },
    {
        "name": "Eltham",
        "crs_code": "ELW"
    },
    {
        "name": "Elton & Orston",
        "crs_code": "ELO"
    },
    {
        "name": "Ely",
        "crs_code": "ELY"
    },
    {
        "name": "Emerson Park",
        "crs_code": "EMP"
    },
    {
        "name": "Emsworth",
        "crs_code": "EMS"
    },
    {
        "name": "Energlyn & Churchill Park",
        "crs_code": "ECP"
    },
    {
        "name": "Enfield Chase",
        "crs_code": "ENC"
    },
    {
        "name": "Enfield Lock",
        "crs_code": "ENL"
    },
    {
        "name": "Enfield Town",
        "crs_code": "ENF"
    },
    {
        "name": "Entwistle",
        "crs_code": "ENT"
    },
    {
        "name": "Epsom (Surrey)",
        "crs_code": "EPS"
    },
    {
        "name": "Epsom Downs",
        "crs_code": "EPD"
    },
    {
        "name": "Erdington",
        "crs_code": "ERD"
    },
    {
        "name": "Eridge",
        "crs_code": "ERI"
    },
    {
        "name": "Erith",
        "crs_code": "ERH"
    },
    {
        "name": "Esher",
        "crs_code": "ESH"
    },
    {
        "name": "Eskbank",
        "crs_code": "EKB"
    },
    {
        "name": "Essex Road",
        "crs_code": "EXR"
    },
    {
        "name": "Etchingham",
        "crs_code": "ETC"
    },
    {
        "name": "Euxton Balshaw Lane",
        "crs_code": "EBA"
    },
    {
        "name": "Evesham",
        "crs_code": "EVE"
    },
    {
        "name": "Ewell East",
        "crs_code": "EWE"
    },
    {
        "name": "Ewell West",
        "crs_code": "EWW"
    },
    {
        "name": "Exeter Central",
        "crs_code": "EXC"
    },
    {
        "name": "Exeter St David's",
        "crs_code": "EXD"
    },
    {
        "name": "Exeter St Thomas",
        "crs_code": "EXT"
    },
    {
        "name": "Exhibition Centre (Glasgow)",
        "crs_code": "EXG"
    },
    {
        "name": "Exmouth",
        "crs_code": "EXM"
    },
    {
        "name": "Exton",
        "crs_code": "EXN"
    },
    {
        "name": "Eynsford",
        "crs_code": "EYN"
    },
    {
        "name": "Fairbourne",
        "crs_code": "FRB"
    },
    {
        "name": "Fairfield",
        "crs_code": "FRF"
    },
    {
        "name": "Fairlie",
        "crs_code": "FRL"
    },
    {
        "name": "Fairwater",
        "crs_code": "FRW"
    },
    {
        "name": "Falconwood",
        "crs_code": "FCN"
    },
    {
        "name": "Falkirk Grahamston",
        "crs_code": "FKG"
    },
    {
        "name": "Falkirk High",
        "crs_code": "FKK"
    },
    {
        "name": "Falls of Cruachan",
        "crs_code": "FOC"
    },
    {
        "name": "Falmer",
        "crs_code": "FMR"
    },
    {
        "name": "Falmouth Docks",
        "crs_code": "FAL"
    },
    {
        "name": "Falmouth Town",
        "crs_code": "FMT"
    },
    {
        "name": "Fareham",
        "crs_code": "FRM"
    },
    {
        "name": "Farnborough (Main)",
        "crs_code": "FNB"
    },
    {
        "name": "Farnborough North",
        "crs_code": "FNN"
    },
    {
        "name": "Farncombe",
        "crs_code": "FNC"
    },
    {
        "name": "Farnham",
        "crs_code": "FNH"
    },
    {
        "name": "Farningham Road",
        "crs_code": "FNR"
    },
    {
        "name": "Farnworth",
        "crs_code": "FNW"
    },
    {
        "name": "Farringdon",
        "crs_code": "ZFD"
    },
    {
        "name": "Fauldhouse",
        "crs_code": "FLD"
    },
    {
        "name": "Faversham",
        "crs_code": "FAV"
    },
    {
        "name": "Faygate",
        "crs_code": "FGT"
    },
    {
        "name": "Fazakerley",
        "crs_code": "FAZ"
    },
    {
        "name": "Fearn",
        "crs_code": "FRN"
    },
    {
        "name": "Featherstone",
        "crs_code": "FEA"
    },
    {
        "name": "Felixstowe",
        "crs_code": "FLX"
    },
    {
        "name": "Feltham",
        "crs_code": "FEL"
    },
    {
        "name": "Feniton",
        "crs_code": "FNT"
    },
    {
        "name": "Fenny Stratford",
        "crs_code": "FEN"
    },
    {
        "name": "Fernhill",
        "crs_code": "FER"
    },
    {
        "name": "Ferriby",
        "crs_code": "FRY"
    },
    {
        "name": "Ferryside",
        "crs_code": "FYS"
    },
    {
        "name": "Ffairfach",
        "crs_code": "FFA"
    },
    {
        "name": "Filey",
        "crs_code": "FIL"
    },
    {
        "name": "Filton Abbey Wood",
        "crs_code": "FIT"
    },
    {
        "name": "Finchley Road & Frognal",
        "crs_code": "FNY"
    },
    {
        "name": "Finsbury Park",
        "crs_code": "FPK"
    },
    {
        "name": "Finstock",
        "crs_code": "FIN"
    },
    {
        "name": "Fishbourne (Sussex)",
        "crs_code": "FSB"
    },
    {
        "name": "Fishersgate",
        "crs_code": "FSG"
    },
    {
        "name": "Fishguard & Goodwick",
        "crs_code": "FGW"
    },
    {
        "name": "Fishguard Harbour",
        "crs_code": "FGH"
    },
    {
        "name": "Fiskerton",
        "crs_code": "FSK"
    },
    {
        "name": "Fitzwilliam",
        "crs_code": "FZW"
    },
    {
        "name": "Five Ways",
        "crs_code": "FWY"
    },
    {
        "name": "Fleet",
        "crs_code": "FLE"
    },
    {
        "name": "Flimby",
        "crs_code": "FLM"
    },
    {
        "name": "Flint",
        "crs_code": "FLN"
    },
    {
        "name": "Flitwick",
        "crs_code": "FLT"
    },
    {
        "name": "Flixton",
        "crs_code": "FLI"
    },
    {
        "name": "Flowery Field",
        "crs_code": "FLF"
    },
    {
        "name": "Folkestone Central",
        "crs_code": "FKC"
    },
    {
        "name": "Folkestone West",
        "crs_code": "FKW"
    },
    {
        "name": "Ford",
        "crs_code": "FOD"
    },
    {
        "name": "Forest Gate",
        "crs_code": "FOG"
    },
    {
        "name": "Forest Hill",
        "crs_code": "FOH"
    },
    {
        "name": "Formby",
        "crs_code": "FBY"
    },
    {
        "name": "Forres",
        "crs_code": "FOR"
    },
    {
        "name": "Forsinard",
        "crs_code": "FRS"
    },
    {
        "name": "Fort Matilda",
        "crs_code": "FTM"
    },
    {
        "name": "Fort William",
        "crs_code": "FTW"
    },
    {
        "name": "Four Oaks",
        "crs_code": "FOK"
    },
    {
        "name": "Foxfield",
        "crs_code": "FOX"
    },
    {
        "name": "Foxton",
        "crs_code": "FXN"
    },
    {
        "name": "Frant",
        "crs_code": "FRT"
    },
    {
        "name": "Fratton",
        "crs_code": "FTN"
    },
    {
        "name": "Freshfield",
        "crs_code": "FRE"
    },
    {
        "name": "Freshford",
        "crs_code": "FFD"
    },
    {
        "name": "Frimley",
        "crs_code": "FML"
    },
    {
        "name": "Frinton-on-Sea",
        "crs_code": "FRI"
    },
    {
        "name": "Frizinghall",
        "crs_code": "FZH"
    },
    {
        "name": "Frodsham",
        "crs_code": "FRD"
    },
    {
        "name": "Frome",
        "crs_code": "FRO"
    },
    {
        "name": "Fulwell",
        "crs_code": "FLW"
    },
    {
        "name": "Furness Vale",
        "crs_code": "FNV"
    },
    {
        "name": "Furze Platt",
        "crs_code": "FZP"
    },
    {
        "name": "Gainsborough Central",
        "crs_code": "GNB"
    },
    {
        "name": "Gainsborough Lea Road",
        "crs_code": "GBL"
    },
    {
        "name": "Galashiels",
        "crs_code": "GAL"
    },
    {
        "name": "Garelochhead",
        "crs_code": "GCH"
    },
    {
        "name": "Garforth",
        "crs_code": "GRF"
    },
    {
        "name": "Gargrave",
        "crs_code": "GGV"
    },
    {
        "name": "Garrowhill",
        "crs_code": "GAR"
    },
    {
        "name": "Garscadden",
        "crs_code": "GRS"
    },
    {
        "name": "Garsdale",
        "crs_code": "GSD"
    },
    {
        "name": "Garston (Hertfordshire)",
        "crs_code": "GSN"
    },
    {
        "name": "Garswood",
        "crs_code": "GSW"
    },
    {
        "name": "Gartcosh",
        "crs_code": "GRH"
    },
    {
        "name": "Garth (Mid Glamorgan)",
        "crs_code": "GMG"
    },
    {
        "name": "Garth (Powys)",
        "crs_code": "GTH"
    },
    {
        "name": "Garve",
        "crs_code": "GVE"
    },
    {
        "name": "Gathurst",
        "crs_code": "GST"
    },
    {
        "name": "Gatley",
        "crs_code": "GTY"
    },
    {
        "name": "Gatwick Airport",
        "crs_code": "GTW"
    },
    {
        "name": "Georgemas Junction",
        "crs_code": "GGJ"
    },
    {
        "name": "Gerrards Cross",
        "crs_code": "GER"
    },
    {
        "name": "Gidea Park",
        "crs_code": "GDP"
    },
    {
        "name": "Giffnock",
        "crs_code": "GFN"
    },
    {
        "name": "Giggleswick",
        "crs_code": "GIG"
    },
    {
        "name": "Gilberdyke",
        "crs_code": "GBD"
    },
    {
        "name": "Gilfach Fargoed",
        "crs_code": "GFF"
    },
    {
        "name": "Gillingham (Dorset)",
        "crs_code": "GIL"
    },
    {
        "name": "Gillingham (Kent)",
        "crs_code": "GLM"
    },
    {
        "name": "Gilshochill",
        "crs_code": "GSC"
    },
    {
        "name": "Gipsy Hill",
        "crs_code": "GIP"
    },
    {
        "name": "Girvan",
        "crs_code": "GIR"
    },
    {
        "name": "Glaisdale",
        "crs_code": "GLS"
    },
    {
        "name": "Glan Conwy",
        "crs_code": "GCW"
    },
    {
        "name": "Glasgow Central",
        "crs_code": "GLC"
    },
    {
        "name": "Glasgow Queen Street",
        "crs_code": "GLQ"
    },
    {
        "name": "Glasshoughton",
        "crs_code": "GLH"
    },
    {
        "name": "Glazebrook",
        "crs_code": "GLZ"
    },
    {
        "name": "Gleneagles",
        "crs_code": "GLE"
    },
    {
        "name": "Glenfinnan",
        "crs_code": "GLF"
    },
    {
        "name": "Glengarnock",
        "crs_code": "GLG"
    },
    {
        "name": "Glenrothes with Thornton",
        "crs_code": "GLT"
    },
    {
        "name": "Glossop",
        "crs_code": "GLO"
    },
    {
        "name": "Gloucester",
        "crs_code": "GCR"
    },
    {
        "name": "Glynde",
        "crs_code": "GLY"
    },
    {
        "name": "Gobowen",
        "crs_code": "GOB"
    },
    {
        "name": "Godalming",
        "crs_code": "GOD"
    },
    {
        "name": "Godley",
        "crs_code": "GDL"
    },
    {
        "name": "Godstone",
        "crs_code": "GDN"
    },
    {
        "name": "Goldthorpe",
        "crs_code": "GOE"
    },
    {
        "name": "Golf Street",
        "crs_code": "GOF"
    },
    {
        "name": "Golspie",
        "crs_code": "GOL"
    },
    {
        "name": "Gomshall",
        "crs_code": "GOM"
    },
    {
        "name": "Goodmayes",
        "crs_code": "GMY"
    },
    {
        "name": "Goole",
        "crs_code": "GOO"
    },
    {
        "name": "Goostrey",
        "crs_code": "GTR"
    },
    {
        "name": "Gordon Hill",
        "crs_code": "GDH"
    },
    {
        "name": "Gorebridge",
        "crs_code": "GBG"
    },
    {
        "name": "Goring & Streatley",
        "crs_code": "GOR"
    },
    {
        "name": "Goring-by-Sea",
        "crs_code": "GBS"
    },
    {
        "name": "Gorton",
        "crs_code": "GTO"
    },
    {
        "name": "Gospel Oak",
        "crs_code": "GPO"
    },
    {
        "name": "Gourock",
        "crs_code": "GRK"
    },
    {
        "name": "Gowerton",
        "crs_code": "GWN"
    },
    {
        "name": "Goxhill",
        "crs_code": "GOX"
    },
    {
        "name": "Grange Park",
        "crs_code": "GPK"
    },
    {
        "name": "Grange-Over-Sands",
        "crs_code": "GOS"
    },
    {
        "name": "Grangetown (Cardiff)",
        "crs_code": "GTN"
    },
    {
        "name": "Grantham",
        "crs_code": "GRA"
    },
    {
        "name": "Grateley",
        "crs_code": "GRT"
    },
    {
        "name": "Gravelly Hill",
        "crs_code": "GVH"
    },
    {
        "name": "Gravesend",
        "crs_code": "GRV"
    },
    {
        "name": "Grays",
        "crs_code": "GRY"
    },
    {
        "name": "Great Ayton",
        "crs_code": "GTA"
    },
    {
        "name": "Great Bentley",
        "crs_code": "GRB"
    },
    {
        "name": "Great Chesterford",
        "crs_code": "GRC"
    },
    {
        "name": "Great Coates",
        "crs_code": "GCT"
    },
    {
        "name": "Great Malvern",
        "crs_code": "GMV"
    },
    {
        "name": "Great Missenden",
        "crs_code": "GMN"
    },
    {
        "name": "Great Yarmouth",
        "crs_code": "GYM"
    },
    {
        "name": "Green Lane",
        "crs_code": "GNL"
    },
    {
        "name": "Green Road",
        "crs_code": "GNR"
    },
    {
        "name": "Greenbank",
        "crs_code": "GBK"
    },
    {
        "name": "Greenfaulds",
        "crs_code": "GRL"
    },
    {
        "name": "Greenfield",
        "crs_code": "GNF"
    },
    {
        "name": "Greenford",
        "crs_code": "GFD"
    },
    {
        "name": "Greenhithe",
        "crs_code": "GNH"
    },
    {
        "name": "Greenock Central",
        "crs_code": "GKC"
    },
    {
        "name": "Greenock West",
        "crs_code": "GKW"
    },
    {
        "name": "Greenwich",
        "crs_code": "GNW"
    },
    {
        "name": "Gretna Green",
        "crs_code": "GEA"
    },
    {
        "name": "Grimsby Docks",
        "crs_code": "GMD"
    },
    {
        "name": "Grimsby Town",
        "crs_code": "GMB"
    },
    {
        "name": "Grindleford",
        "crs_code": "GRN"
    },
    {
        "name": "Grosmont",
        "crs_code": "GMT"
    },
    {
        "name": "Grove Park",
        "crs_code": "GRP"
    },
    {
        "name": "Guide Bridge",
        "crs_code": "GUI"
    },
    {
        "name": "Guildford",
        "crs_code": "GLD"
    },
    {
        "name": "Guiseley",
        "crs_code": "GSY"
    },
    {
        "name": "Gunnersbury",
        "crs_code": "GUN"
    },
    {
        "name": "Gunnislake",
        "crs_code": "GSL"
    },
    {
        "name": "Gunton",
        "crs_code": "GNT"
    },
    {
        "name": "Gwersyllt",
        "crs_code": "GWE"
    },
    {
        "name": "Gypsy Lane",
        "crs_code": "GYP"
    },
    {
        "name": "Habrough",
        "crs_code": "HAB"
    },
    {
        "name": "Hackbridge",
        "crs_code": "HCB"
    },
    {
        "name": "Hackney Central",
        "crs_code": "HKC"
    },
    {
        "name": "Hackney Downs",
        "crs_code": "HAC"
    },
    {
        "name": "Hackney Wick",
        "crs_code": "HKW"
    },
    {
        "name": "Haddenham & Thame Parkway",
        "crs_code": "HDM"
    },
    {
        "name": "Haddiscoe",
        "crs_code": "HAD"
    },
    {
        "name": "Hadfield",
        "crs_code": "HDF"
    },
    {
        "name": "Hadley Wood",
        "crs_code": "HDW"
    },
    {
        "name": "Hag Fold",
        "crs_code": "HGF"
    },
    {
        "name": "Haggerston",
        "crs_code": "HGG"
    },
    {
        "name": "Hagley",
        "crs_code": "HAG"
    },
    {
        "name": "Hairmyres",
        "crs_code": "HMY"
    },
    {
        "name": "Hale (Manchester)",
        "crs_code": "HAL"
    },
    {
        "name": "Halesworth",
        "crs_code": "HAS"
    },
    {
        "name": "Halewood",
        "crs_code": "HED"
    },
    {
        "name": "Halifax",
        "crs_code": "HFX"
    },
    {
        "name": "Hall Green",
        "crs_code": "HLG"
    },
    {
        "name": "Hall Road",
        "crs_code": "HLR"
    },
    {
        "name": "Halling",
        "crs_code": "HAI"
    },
    {
        "name": "Hall-i'-th'-Wood",
        "crs_code": "HID"
    },
    {
        "name": "Haltwhistle",
        "crs_code": "HWH"
    },
    {
        "name": "Ham Street",
        "crs_code": "HMT"
    },
    {
        "name": "Hamble",
        "crs_code": "HME"
    },
    {
        "name": "Hamilton Central",
        "crs_code": "HNC"
    },
    {
        "name": "Hamilton West",
        "crs_code": "HNW"
    },
    {
        "name": "Hammerton",
        "crs_code": "HMM"
    },
    {
        "name": "Hampden Park (Sussex)",
        "crs_code": "HMD"
    },
    {
        "name": "Hampstead Heath",
        "crs_code": "HDH"
    },
    {
        "name": "Hampton (London)",
        "crs_code": "HMP"
    },
    {
        "name": "Hampton Court",
        "crs_code": "HMC"
    },
    {
        "name": "Hampton Wick",
        "crs_code": "HMW"
    },
    {
        "name": "Hampton-in-Arden",
        "crs_code": "HIA"
    },
    {
        "name": "Hamstead (Birmingham)",
        "crs_code": "HSD"
    },
    {
        "name": "Hamworthy",
        "crs_code": "HAM"
    },
    {
        "name": "Hanborough",
        "crs_code": "HND"
    },
    {
        "name": "Handforth",
        "crs_code": "HTH"
    },
    {
        "name": "Hanwell",
        "crs_code": "HAN"
    },
    {
        "name": "Hapton",
        "crs_code": "HPN"
    },
    {
        "name": "Harlech",
        "crs_code": "HRL"
    },
    {
        "name": "Harlesden",
        "crs_code": "HDN"
    },
    {
        "name": "Harling Road",
        "crs_code": "HRD"
    },
    {
        "name": "Harlington (Beds)",
        "crs_code": "HLN"
    },
    {
        "name": "Harlow Mill",
        "crs_code": "HWM"
    },
    {
        "name": "Harlow Town",
        "crs_code": "HWN"
    },
    {
        "name": "Harold Wood",
        "crs_code": "HRO"
    },
    {
        "name": "Harpenden",
        "crs_code": "HPD"
    },
    {
        "name": "Harrietsham",
        "crs_code": "HRM"
    },
    {
        "name": "Harringay",
        "crs_code": "HGY"
    },
    {
        "name": "Harringay Green Lanes",
        "crs_code": "HRY"
    },
    {
        "name": "Harrington",
        "crs_code": "HRR"
    },
    {
        "name": "Harrogate",
        "crs_code": "HGT"
    },
    {
        "name": "Harrow & Wealdstone",
        "crs_code": "HRW"
    },
    {
        "name": "Harrow-on-the-Hill",
        "crs_code": "HOH"
    },
    {
        "name": "Hartford (Cheshire)",
        "crs_code": "HTF"
    },
    {
        "name": "Hartlebury",
        "crs_code": "HBY"
    },
    {
        "name": "Hartlepool",
        "crs_code": "HPL"
    },
    {
        "name": "Hartwood",
        "crs_code": "HTW"
    },
    {
        "name": "Harwich International",
        "crs_code": "HPQ"
    },
    {
        "name": "Harwich Town",
        "crs_code": "HWC"
    },
    {
        "name": "Haslemere",
        "crs_code": "HSL"
    },
    {
        "name": "Hassocks",
        "crs_code": "HSK"
    },
    {
        "name": "Hastings",
        "crs_code": "HGS"
    },
    {
        "name": "Hatch End",
        "crs_code": "HTE"
    },
    {
        "name": "Hatfield & Stainforth",
        "crs_code": "HFS"
    },
    {
        "name": "Hatfield (Herts)",
        "crs_code": "HAT"
    },
    {
        "name": "Hatfield Peverel",
        "crs_code": "HAP"
    },
    {
        "name": "Hathersage",
        "crs_code": "HSG"
    },
    {
        "name": "Hattersley",
        "crs_code": "HTY"
    },
    {
        "name": "Hatton",
        "crs_code": "HTN"
    },
    {
        "name": "Havant",
        "crs_code": "HAV"
    },
    {
        "name": "Havenhouse",
        "crs_code": "HVN"
    },
    {
        "name": "Haverfordwest",
        "crs_code": "HVF"
    },
    {
        "name": "Hawarden",
        "crs_code": "HWD"
    },
    {
        "name": "Hawarden Bridge",
        "crs_code": "HWB"
    },
    {
        "name": "Hawkhead",
        "crs_code": "HKH"
    },
    {
        "name": "Haydon Bridge",
        "crs_code": "HDB"
    },
    {
        "name": "Haydons Road",
        "crs_code": "HYR"
    },
    {
        "name": "Hayes & Harlington",
        "crs_code": "HAY"
    },
    {
        "name": "Hayes (Kent)",
        "crs_code": "HYS"
    },
    {
        "name": "Hayle",
        "crs_code": "HYL"
    },
    {
        "name": "Haymarket",
        "crs_code": "HYM"
    },
    {
        "name": "Haywards Heath",
        "crs_code": "HHE"
    },
    {
        "name": "Hazel Grove",
        "crs_code": "HAZ"
    },
    {
        "name": "Headcorn",
        "crs_code": "HCN"
    },
    {
        "name": "Headingley",
        "crs_code": "HDY"
    },
    {
        "name": "Headstone Lane",
        "crs_code": "HDL"
    },
    {
        "name": "Heald Green",
        "crs_code": "HDG"
    },
    {
        "name": "Healing",
        "crs_code": "HLI"
    },
    {
        "name": "Heath High Level",
        "crs_code": "HHL"
    },
    {
        "name": "Heath Low Level",
        "crs_code": "HLL"
    },
    {
        "name": "Heathrow Airport Terminal 4",
        "crs_code": "HAF"
    },
    {
        "name": "Heathrow Airport Terminal 5",
        "crs_code": "HWV"
    },
    {
        "name": "Heathrow Airport Terminals 1, 2 and 3",
        "crs_code": "HXX"
    },
    {
        "name": "Heaton Chapel",
        "crs_code": "HTC"
    },
    {
        "name": "Hebden Bridge",
        "crs_code": "HBD"
    },
    {
        "name": "Heckington",
        "crs_code": "HEC"
    },
    {
        "name": "Hedge End",
        "crs_code": "HDE"
    },
    {
        "name": "Hednesford",
        "crs_code": "HNF"
    },
    {
        "name": "Heighington",
        "crs_code": "HEI"
    },
    {
        "name": "Helensburgh Central",
        "crs_code": "HLC"
    },
    {
        "name": "Helensburgh Upper",
        "crs_code": "HLU"
    },
    {
        "name": "Hellifield",
        "crs_code": "HLD"
    },
    {
        "name": "Helmsdale",
        "crs_code": "HMS"
    },
    {
        "name": "Helsby",
        "crs_code": "HSB"
    },
    {
        "name": "Hemel Hempstead",
        "crs_code": "HML"
    },
    {
        "name": "Hendon",
        "crs_code": "HEN"
    },
    {
        "name": "Hengoed",
        "crs_code": "HNG"
    },
    {
        "name": "Henley-in-Arden",
        "crs_code": "HNL"
    },
    {
        "name": "Henley-on-Thames",
        "crs_code": "HOT"
    },
    {
        "name": "Hensall",
        "crs_code": "HEL"
    },
    {
        "name": "Hereford",
        "crs_code": "HFD"
    },
    {
        "name": "Herne Bay",
        "crs_code": "HNB"
    },
    {
        "name": "Herne Hill",
        "crs_code": "HNH"
    },
    {
        "name": "Hersham",
        "crs_code": "HER"
    },
    {
        "name": "Hertford East",
        "crs_code": "HFE"
    },
    {
        "name": "Hertford North",
        "crs_code": "HFN"
    },
    {
        "name": "Hessle",
        "crs_code": "HES"
    },
    {
        "name": "Heswall",
        "crs_code": "HSW"
    },
    {
        "name": "Hever",
        "crs_code": "HEV"
    },
    {
        "name": "Heworth",
        "crs_code": "HEW"
    },
    {
        "name": "Hexham",
        "crs_code": "HEX"
    },
    {
        "name": "Heyford",
        "crs_code": "HYD"
    },
    {
        "name": "Heysham Port",
        "crs_code": "HHB"
    },
    {
        "name": "High Brooms",
        "crs_code": "HIB"
    },
    {
        "name": "High Street (Glasgow)",
        "crs_code": "HST"
    },
    {
        "name": "High Street Kensington Underground",
        "crs_code": "ZHS"
    },
    {
        "name": "High Wycombe",
        "crs_code": "HWY"
    },
    {
        "name": "Higham (Kent)",
        "crs_code": "HGM"
    },
    {
        "name": "Highams Park",
        "crs_code": "HIP"
    },
    {
        "name": "Highbridge & Burnham",
        "crs_code": "HIG"
    },
    {
        "name": "Highbury & Islington",
        "crs_code": "HHY"
    },
    {
        "name": "Hightown",
        "crs_code": "HTO"
    },
    {
        "name": "Hildenborough",
        "crs_code": "HLB"
    },
    {
        "name": "Hillfoot",
        "crs_code": "HLF"
    },
    {
        "name": "Hillington East",
        "crs_code": "HLE"
    },
    {
        "name": "Hillington West",
        "crs_code": "HLW"
    },
    {
        "name": "Hillside",
        "crs_code": "HIL"
    },
    {
        "name": "Hilsea",
        "crs_code": "HLS"
    },
    {
        "name": "Hinchley Wood",
        "crs_code": "HYW"
    },
    {
        "name": "Hinckley (Leics)",
        "crs_code": "HNK"
    },
    {
        "name": "Hindley",
        "crs_code": "HIN"
    },
    {
        "name": "Hinton Admiral",
        "crs_code": "HNA"
    },
    {
        "name": "Hitchin",
        "crs_code": "HIT"
    },
    {
        "name": "Hither Green",
        "crs_code": "HGR"
    },
    {
        "name": "Hockley",
        "crs_code": "HOC"
    },
    {
        "name": "Hollingbourne",
        "crs_code": "HBN"
    },
    {
        "name": "Holmes Chapel",
        "crs_code": "HCH"
    },
    {
        "name": "Holmwood",
        "crs_code": "HLM"
    },
    {
        "name": "Holton Heath",
        "crs_code": "HOL"
    },
    {
        "name": "Holyhead",
        "crs_code": "HHD"
    },
    {
        "name": "Holytown",
        "crs_code": "HLY"
    },
    {
        "name": "Homerton",
        "crs_code": "HMN"
    },
    {
        "name": "Honeybourne",
        "crs_code": "HYB"
    },
    {
        "name": "Honiton",
        "crs_code": "HON"
    },
    {
        "name": "Honley",
        "crs_code": "HOY"
    },
    {
        "name": "Honor Oak Park",
        "crs_code": "HPA"
    },
    {
        "name": "Hook",
        "crs_code": "HOK"
    },
    {
        "name": "Hooton",
        "crs_code": "HOO"
    },
    {
        "name": "Hope (Derbyshire)",
        "crs_code": "HOP"
    },
    {
        "name": "Hope (Flintshire)",
        "crs_code": "HPE"
    },
    {
        "name": "Hopton Heath",
        "crs_code": "HPT"
    },
    {
        "name": "Horden",
        "crs_code": "HRE"
    },
    {
        "name": "Horley",
        "crs_code": "HOR"
    },
    {
        "name": "Hornbeam Park",
        "crs_code": "HBP"
    },
    {
        "name": "Hornsey",
        "crs_code": "HRN"
    },
    {
        "name": "Horsforth",
        "crs_code": "HRS"
    },
    {
        "name": "Horsham",
        "crs_code": "HRH"
    },
    {
        "name": "Horsley",
        "crs_code": "HSY"
    },
    {
        "name": "Horton-in-Ribblesdale",
        "crs_code": "HIR"
    },
    {
        "name": "Horwich Parkway",
        "crs_code": "HWI"
    },
    {
        "name": "Hoscar",
        "crs_code": "HSC"
    },
    {
        "name": "Hough Green",
        "crs_code": "HGN"
    },
    {
        "name": "Hounslow",
        "crs_code": "HOU"
    },
    {
        "name": "Hove",
        "crs_code": "HOV"
    },
    {
        "name": "Hoveton & Wroxham",
        "crs_code": "HXM"
    },
    {
        "name": "How Wood (Herts)",
        "crs_code": "HWW"
    },
    {
        "name": "Howden",
        "crs_code": "HOW"
    },
    {
        "name": "Howwood (Renfrewshire)",
        "crs_code": "HOZ"
    },
    {
        "name": "Hoxton",
        "crs_code": "HOX"
    },
    {
        "name": "Hoylake",
        "crs_code": "HYK"
    },
    {
        "name": "Hubberts Bridge",
        "crs_code": "HBB"
    },
    {
        "name": "Hucknall",
        "crs_code": "HKN"
    },
    {
        "name": "Huddersfield",
        "crs_code": "HUD"
    },
    {
        "name": "Hull",
        "crs_code": "HUL"
    },
    {
        "name": "Humphrey Park",
        "crs_code": "HUP"
    },
    {
        "name": "Huncoat",
        "crs_code": "HCT"
    },
    {
        "name": "Hungerford",
        "crs_code": "HGD"
    },
    {
        "name": "Hunmanby",
        "crs_code": "HUB"
    },
    {
        "name": "Huntingdon",
        "crs_code": "HUN"
    },
    {
        "name": "Huntly",
        "crs_code": "HNT"
    },
    {
        "name": "Hunts Cross",
        "crs_code": "HNX"
    },
    {
        "name": "Hurst Green",
        "crs_code": "HUR"
    },
    {
        "name": "Hutton Cranswick",
        "crs_code": "HUT"
    },
    {
        "name": "Huyton",
        "crs_code": "HUY"
    },
    {
        "name": "Hyde Central",
        "crs_code": "HYC"
    },
    {
        "name": "Hyde North",
        "crs_code": "HYT"
    },
    {
        "name": "Hykeham",
        "crs_code": "HKM"
    },
    {
        "name": "Hyndland",
        "crs_code": "HYN"
    },
    {
        "name": "Hythe (Essex)",
        "crs_code": "HYH"
    },
    {
        "name": "IBM Halt",
        "crs_code": "IBM"
    },
    {
        "name": "Ifield",
        "crs_code": "IFI"
    },
    {
        "name": "Ilford",
        "crs_code": "IFD"
    },
    {
        "name": "Ilkeston",
        "crs_code": "ILN"
    },
    {
        "name": "Ilkley",
        "crs_code": "ILK"
    },
    {
        "name": "Imperial Wharf",
        "crs_code": "IMW"
    },
    {
        "name": "Ince & Elton",
        "crs_code": "INE"
    },
    {
        "name": "Ince (Manchester)",
        "crs_code": "INC"
    },
    {
        "name": "Ingatestone",
        "crs_code": "INT"
    },
    {
        "name": "Insch",
        "crs_code": "INS"
    },
    {
        "name": "Invergordon",
        "crs_code": "IGD"
    },
    {
        "name": "Invergowrie",
        "crs_code": "ING"
    },
    {
        "name": "Inverkeithing",
        "crs_code": "INK"
    },
    {
        "name": "Inverkip",
        "crs_code": "INP"
    },
    {
        "name": "Inverness",
        "crs_code": "INV"
    },
    {
        "name": "Invershin",
        "crs_code": "INH"
    },
    {
        "name": "Inverurie",
        "crs_code": "INR"
    },
    {
        "name": "Ipswich",
        "crs_code": "IPS"
    },
    {
        "name": "Irlam",
        "crs_code": "IRL"
    },
    {
        "name": "Irvine",
        "crs_code": "IRV"
    },
    {
        "name": "Isleworth",
        "crs_code": "ISL"
    },
    {
        "name": "Islip",
        "crs_code": "ISP"
    },
    {
        "name": "Iver",
        "crs_code": "IVR"
    },
    {
        "name": "Ivybridge",
        "crs_code": "IVY"
    },
    {
        "name": "James Cook",
        "crs_code": "JCH"
    },
    {
        "name": "Jewellery Quarter",
        "crs_code": "JEQ"
    },
    {
        "name": "Johnston (Pembs)",
        "crs_code": "JOH"
    },
    {
        "name": "Johnstone (Strathclyde)",
        "crs_code": "JHN"
    },
    {
        "name": "Jordanhill",
        "crs_code": "JOR"
    },
    {
        "name": "Kearsley (Manchester)",
        "crs_code": "KSL"
    },
    {
        "name": "Kearsney (Kent)",
        "crs_code": "KSN"
    },
    {
        "name": "Keighley",
        "crs_code": "KEI"
    },
    {
        "name": "Keith",
        "crs_code": "KEH"
    },
    {
        "name": "Kelvedon",
        "crs_code": "KEL"
    },
    {
        "name": "Kelvindale",
        "crs_code": "KVD"
    },
    {
        "name": "Kemble",
        "crs_code": "KEM"
    },
    {
        "name": "Kempston Hardwick",
        "crs_code": "KMH"
    },
    {
        "name": "Kempton Park Racecourse",
        "crs_code": "KMP"
    },
    {
        "name": "Kemsing",
        "crs_code": "KMS"
    },
    {
        "name": "Kemsley",
        "crs_code": "KML"
    },
    {
        "name": "Kendal",
        "crs_code": "KEN"
    },
    {
        "name": "Kenilworth",
        "crs_code": "KNW"
    },
    {
        "name": "Kenley",
        "crs_code": "KLY"
    },
    {
        "name": "Kennett",
        "crs_code": "KNE"
    },
    {
        "name": "Kennishead",
        "crs_code": "KNS"
    },
    {
        "name": "Kensal Green",
        "crs_code": "KNL"
    },
    {
        "name": "Kensal Rise",
        "crs_code": "KNR"
    },
    {
        "name": "Kensington Olympia",
        "crs_code": "KPA"
    },
    {
        "name": "Kent House",
        "crs_code": "KTH"
    },
    {
        "name": "Kentish Town",
        "crs_code": "KTN"
    },
    {
        "name": "Kentish Town West",
        "crs_code": "KTW"
    },
    {
        "name": "Kenton",
        "crs_code": "KNT"
    },
    {
        "name": "Kents Bank",
        "crs_code": "KBK"
    },
    {
        "name": "Kettering",
        "crs_code": "KET"
    },
    {
        "name": "Kew Bridge",
        "crs_code": "KWB"
    },
    {
        "name": "Kew Gardens",
        "crs_code": "KWG"
    },
    {
        "name": "Keyham",
        "crs_code": "KEY"
    },
    {
        "name": "Keynsham",
        "crs_code": "KYN"
    },
    {
        "name": "Kidbrooke",
        "crs_code": "KDB"
    },
    {
        "name": "Kidderminster",
        "crs_code": "KID"
    },
    {
        "name": "Kidsgrove",
        "crs_code": "KDG"
    },
    {
        "name": "Kidwelly",
        "crs_code": "KWL"
    },
    {
        "name": "Kilburn High Road",
        "crs_code": "KBN"
    },
    {
        "name": "Kildale",
        "crs_code": "KLD"
    },
    {
        "name": "Kildonan",
        "crs_code": "KIL"
    },
    {
        "name": "Kilgetty",
        "crs_code": "KGT"
    },
    {
        "name": "Kilmarnock",
        "crs_code": "KMK"
    },
    {
        "name": "Kilmaurs",
        "crs_code": "KLM"
    },
    {
        "name": "Kilpatrick",
        "crs_code": "KPT"
    },
    {
        "name": "Kilwinning",
        "crs_code": "KWN"
    },
    {
        "name": "Kinbrace",
        "crs_code": "KBC"
    },
    {
        "name": "Kingham",
        "crs_code": "KGM"
    },
    {
        "name": "Kinghorn",
        "crs_code": "KGH"
    },
    {
        "name": "Kings Langley",
        "crs_code": "KGL"
    },
    {
        "name": "Kings Lynn",
        "crs_code": "KLN"
    },
    {
        "name": "Kings Norton",
        "crs_code": "KNN"
    },
    {
        "name": "Kings Nympton",
        "crs_code": "KGN"
    },
    {
        "name": "Kings Park",
        "crs_code": "KGP"
    },
    {
        "name": "Kings Sutton",
        "crs_code": "KGS"
    },
    {
        "name": "Kingsknowe",
        "crs_code": "KGE"
    },
    {
        "name": "Kingston",
        "crs_code": "KNG"
    },
    {
        "name": "Kingswood",
        "crs_code": "KND"
    },
    {
        "name": "Kingussie",
        "crs_code": "KIN"
    },
    {
        "name": "Kintbury",
        "crs_code": "KIT"
    },
    {
        "name": "Kirby Cross",
        "crs_code": "KBX"
    },
    {
        "name": "Kirk Sandall",
        "crs_code": "KKS"
    },
    {
        "name": "Kirkby (Merseyside)",
        "crs_code": "KIR"
    },
    {
        "name": "Kirkby Stephen",
        "crs_code": "KSW"
    },
    {
        "name": "Kirkby-in-Ashfield",
        "crs_code": "KKB"
    },
    {
        "name": "Kirkby-in-Furness",
        "crs_code": "KBF"
    },
    {
        "name": "Kirkcaldy",
        "crs_code": "KDY"
    },
    {
        "name": "Kirkconnel",
        "crs_code": "KRK"
    },
    {
        "name": "Kirkdale",
        "crs_code": "KKD"
    },
    {
        "name": "Kirkham & Wesham",
        "crs_code": "KKM"
    },
    {
        "name": "Kirkhill",
        "crs_code": "KKH"
    },
    {
        "name": "Kirknewton",
        "crs_code": "KKN"
    },
    {
        "name": "Kirkstall Forge",
        "crs_code": "KLF"
    },
    {
        "name": "Kirkwood",
        "crs_code": "KWD"
    },
    {
        "name": "Kirton Lindsey",
        "crs_code": "KTL"
    },
    {
        "name": "Kiveton Bridge",
        "crs_code": "KIV"
    },
    {
        "name": "Kiveton Park",
        "crs_code": "KVP"
    },
    {
        "name": "Knaresborough",
        "crs_code": "KNA"
    },
    {
        "name": "Knebworth",
        "crs_code": "KBW"
    },
    {
        "name": "Knighton",
        "crs_code": "KNI"
    },
    {
        "name": "Knockholt",
        "crs_code": "KCK"
    },
    {
        "name": "Knottingley",
        "crs_code": "KNO"
    },
    {
        "name": "Knucklas",
        "crs_code": "KNU"
    },
    {
        "name": "Knutsford",
        "crs_code": "KNF"
    },
    {
        "name": "Kyle of Lochalsh",
        "crs_code": "KYL"
    },
    {
        "name": "Ladybank",
        "crs_code": "LDY"
    },
    {
        "name": "Ladywell",
        "crs_code": "LAD"
    },
    {
        "name": "Laindon",
        "crs_code": "LAI"
    },
    {
        "name": "Lairg",
        "crs_code": "LRG"
    },
    {
        "name": "Lake",
        "crs_code": "LKE"
    },
    {
        "name": "Lakenheath",
        "crs_code": "LAK"
    },
    {
        "name": "Lamphey",
        "crs_code": "LAM"
    },
    {
        "name": "Lanark",
        "crs_code": "LNK"
    },
    {
        "name": "Lancaster",
        "crs_code": "LAN"
    },
    {
        "name": "Lancing",
        "crs_code": "LAC"
    },
    {
        "name": "Landywood",
        "crs_code": "LAW"
    },
    {
        "name": "Langbank",
        "crs_code": "LGB"
    },
    {
        "name": "Langho",
        "crs_code": "LHO"
    },
    {
        "name": "Langley (Berks)",
        "crs_code": "LNY"
    },
    {
        "name": "Langley Green",
        "crs_code": "LGG"
    },
    {
        "name": "Langley Mill",
        "crs_code": "LGM"
    },
    {
        "name": "Langside",
        "crs_code": "LGS"
    },
    {
        "name": "Langwathby",
        "crs_code": "LGW"
    },
    {
        "name": "Langwith-Whaley Thorns",
        "crs_code": "LAG"
    },
    {
        "name": "Lapford",
        "crs_code": "LAP"
    },
    {
        "name": "Lapworth",
        "crs_code": "LPW"
    },
    {
        "name": "Larbert",
        "crs_code": "LBT"
    },
    {
        "name": "Largs",
        "crs_code": "LAR"
    },
    {
        "name": "Larkhall",
        "crs_code": "LRH"
    },
    {
        "name": "Laurencekirk",
        "crs_code": "LAU"
    },
    {
        "name": "Lawrence Hill",
        "crs_code": "LWH"
    },
    {
        "name": "Layton (Lancs)",
        "crs_code": "LAY"
    },
    {
        "name": "Lazonby & Kirkoswald",
        "crs_code": "LZB"
    },
    {
        "name": "Lea Bridge",
        "crs_code": "LEB"
    },
    {
        "name": "Lea Green",
        "crs_code": "LEG"
    },
    {
        "name": "Lea Hall",
        "crs_code": "LEH"
    },
    {
        "name": "Leagrave",
        "crs_code": "LEA"
    },
    {
        "name": "Lealholm",
        "crs_code": "LHM"
    },
    {
        "name": "Leamington Spa",
        "crs_code": "LMS"
    },
    {
        "name": "Leasowe",
        "crs_code": "LSW"
    },
    {
        "name": "Leatherhead",
        "crs_code": "LHD"
    },
    {
        "name": "Ledbury",
        "crs_code": "LED"
    },
    {
        "name": "Lee (London)",
        "crs_code": "LEE"
    },
    {
        "name": "Leeds",
        "crs_code": "LDS"
    },
    {
        "name": "Leicester",
        "crs_code": "LEI"
    },
    {
        "name": "Leigh (Kent)",
        "crs_code": "LIH"
    },
    {
        "name": "Leigh-on-Sea",
        "crs_code": "LES"
    },
    {
        "name": "Leighton Buzzard",
        "crs_code": "LBZ"
    },
    {
        "name": "Lelant",
        "crs_code": "LEL"
    },
    {
        "name": "Lelant Saltings",
        "crs_code": "LTS"
    },
    {
        "name": "Lenham",
        "crs_code": "LEN"
    },
    {
        "name": "Lenzie",
        "crs_code": "LNZ"
    },
    {
        "name": "Leominster",
        "crs_code": "LEO"
    },
    {
        "name": "Letchworth Garden City",
        "crs_code": "LET"
    },
    {
        "name": "Leuchars (for St. Andrews)",
        "crs_code": "LEU"
    },
    {
        "name": "Levenshulme",
        "crs_code": "LVM"
    },
    {
        "name": "Lewes",
        "crs_code": "LWS"
    },
    {
        "name": "Lewisham",
        "crs_code": "LEW"
    },
    {
        "name": "Leyland",
        "crs_code": "LEY"
    },
    {
        "name": "Leyton Midland Road",
        "crs_code": "LEM"
    },
    {
        "name": "Leytonstone High Road",
        "crs_code": "LER"
    },
    {
        "name": "Lichfield City",
        "crs_code": "LIC"
    },
    {
        "name": "Lichfield Trent Valley",
        "crs_code": "LTV"
    },
    {
        "name": "Lidlington",
        "crs_code": "LID"
    },
    {
        "name": "Limehouse",
        "crs_code": "LHS"
    },
    {
        "name": "Lincoln Central",
        "crs_code": "LCN"
    },
    {
        "name": "Lingfield",
        "crs_code": "LFD"
    },
    {
        "name": "Lingwood",
        "crs_code": "LGD"
    },
    {
        "name": "Linlithgow",
        "crs_code": "LIN"
    },
    {
        "name": "Liphook",
        "crs_code": "LIP"
    },
    {
        "name": "Liskeard",
        "crs_code": "LSK"
    },
    {
        "name": "Liss",
        "crs_code": "LIS"
    },
    {
        "name": "Lisvane & Thornhill",
        "crs_code": "LVT"
    },
    {
        "name": "Little Kimble",
        "crs_code": "LTK"
    },
    {
        "name": "Little Sutton",
        "crs_code": "LTT"
    },
    {
        "name": "Littleborough",
        "crs_code": "LTL"
    },
    {
        "name": "Littlehampton",
        "crs_code": "LIT"
    },
    {
        "name": "Littlehaven",
        "crs_code": "LVN"
    },
    {
        "name": "Littleport",
        "crs_code": "LTP"
    },
    {
        "name": "Liverpool Central",
        "crs_code": "LVC"
    },
    {
        "name": "Liverpool James Street",
        "crs_code": "LVJ"
    },
    {
        "name": "Liverpool Lime Street",
        "crs_code": "LIV"
    },
    {
        "name": "Liverpool South Parkway",
        "crs_code": "LPY"
    },
    {
        "name": "Livingston North",
        "crs_code": "LSN"
    },
    {
        "name": "Livingston South",
        "crs_code": "LVG"
    },
    {
        "name": "Llanaber",
        "crs_code": "LLA"
    },
    {
        "name": "Llanbedr",
        "crs_code": "LBR"
    },
    {
        "name": "Llanbister Road",
        "crs_code": "LLT"
    },
    {
        "name": "Llanbradach",
        "crs_code": "LNB"
    },
    {
        "name": "Llandaf",
        "crs_code": "LLN"
    },
    {
        "name": "Llandanwg",
        "crs_code": "LDN"
    },
    {
        "name": "Llandecwyn",
        "crs_code": "LLC"
    },
    {
        "name": "Llandeilo",
        "crs_code": "LLL"
    },
    {
        "name": "Llandovery",
        "crs_code": "LLV"
    },
    {
        "name": "Llandrindod",
        "crs_code": "LLO"
    },
    {
        "name": "Llandudno",
        "crs_code": "LLD"
    },
    {
        "name": "Llandudno Junction",
        "crs_code": "LLJ"
    },
    {
        "name": "Llandybie",
        "crs_code": "LLI"
    },
    {
        "name": "Llanelli",
        "crs_code": "LLE"
    },
    {
        "name": "Llanfairfechan",
        "crs_code": "LLF"
    },
    {
        "name": "Llanfairpwll",
        "crs_code": "LPG"
    },
    {
        "name": "Llangadog",
        "crs_code": "LLG"
    },
    {
        "name": "Llangammarch",
        "crs_code": "LLM"
    },
    {
        "name": "Llangennech",
        "crs_code": "LLH"
    },
    {
        "name": "Llangynllo",
        "crs_code": "LGO"
    },
    {
        "name": "Llanharan",
        "crs_code": "LLR"
    },
    {
        "name": "Llanhilleth",
        "crs_code": "LTH"
    },
    {
        "name": "Llanishen",
        "crs_code": "LLS"
    },
    {
        "name": "Llanrwst",
        "crs_code": "LWR"
    },
    {
        "name": "Llansamlet",
        "crs_code": "LAS"
    },
    {
        "name": "Llantwit Major",
        "crs_code": "LWM"
    },
    {
        "name": "Llanwrda",
        "crs_code": "LNR"
    },
    {
        "name": "Llanwrtyd",
        "crs_code": "LNW"
    },
    {
        "name": "Llwyngwril",
        "crs_code": "LLW"
    },
    {
        "name": "Llwynypia",
        "crs_code": "LLY"
    },
    {
        "name": "Loch Awe",
        "crs_code": "LHA"
    },
    {
        "name": "Loch Eil Outward Bound",
        "crs_code": "LHE"
    },
    {
        "name": "Lochailort",
        "crs_code": "LCL"
    },
    {
        "name": "Locheilside",
        "crs_code": "LCS"
    },
    {
        "name": "Lochgelly",
        "crs_code": "LCG"
    },
    {
        "name": "Lochluichart",
        "crs_code": "LCC"
    },
    {
        "name": "Lochwinnoch",
        "crs_code": "LHW"
    },
    {
        "name": "Lockerbie",
        "crs_code": "LOC"
    },
    {
        "name": "Lockwood",
        "crs_code": "LCK"
    },
    {
        "name": "London Blackfriars",
        "crs_code": "BFR"
    },
    {
        "name": "London Bridge",
        "crs_code": "LBG"
    },
    {
        "name": "London Cannon Street",
        "crs_code": "CST"
    },
    {
        "name": "London Charing Cross",
        "crs_code": "CHX"
    },
    {
        "name": "London Euston",
        "crs_code": "EUS"
    },
    {
        "name": "London Fenchurch Street",
        "crs_code": "FST"
    },
    {
        "name": "London Fields",
        "crs_code": "LOF"
    },
    {
        "name": "London Kings Cross",
        "crs_code": "KGX"
    },
    {
        "name": "London Liverpool Street",
        "crs_code": "LST"
    },
    {
        "name": "London Marylebone",
        "crs_code": "MYB"
    },
    {
        "name": "London Paddington",
        "crs_code": "PAD"
    },
    {
        "name": "London Road (Brighton)",
        "crs_code": "LRB"
    },
    {
        "name": "London Road (Guildford)",
        "crs_code": "LRD"
    },
    {
        "name": "London St Pancras (Intl)",
        "crs_code": "SPX"
    },
    {
        "name": "London St Pancras International",
        "crs_code": "STP"
    },
    {
        "name": "London Victoria",
        "crs_code": "VIC"
    },
    {
        "name": "London Waterloo",
        "crs_code": "WAT"
    },
    {
        "name": "London Waterloo East",
        "crs_code": "WAE"
    },
    {
        "name": "Long Buckby",
        "crs_code": "LBK"
    },
    {
        "name": "Long Eaton",
        "crs_code": "LGE"
    },
    {
        "name": "Long Preston",
        "crs_code": "LPR"
    },
    {
        "name": "Longbeck",
        "crs_code": "LGK"
    },
    {
        "name": "Longbridge",
        "crs_code": "LOB"
    },
    {
        "name": "Longcross",
        "crs_code": "LNG"
    },
    {
        "name": "Longfield",
        "crs_code": "LGF"
    },
    {
        "name": "Longniddry",
        "crs_code": "LND"
    },
    {
        "name": "Longport",
        "crs_code": "LPT"
    },
    {
        "name": "Longton",
        "crs_code": "LGN"
    },
    {
        "name": "Looe",
        "crs_code": "LOO"
    },
    {
        "name": "Lostock",
        "crs_code": "LOT"
    },
    {
        "name": "Lostock Gralam",
        "crs_code": "LTG"
    },
    {
        "name": "Lostock Hall",
        "crs_code": "LOH"
    },
    {
        "name": "Lostwithiel",
        "crs_code": "LOS"
    },
    {
        "name": "Loughborough",
        "crs_code": "LBO"
    },
    {
        "name": "Loughborough Junction",
        "crs_code": "LGJ"
    },
    {
        "name": "Low Moor",
        "crs_code": "LMR"
    },
    {
        "name": "Lowdham",
        "crs_code": "LOW"
    },
    {
        "name": "Lower Sydenham",
        "crs_code": "LSY"
    },
    {
        "name": "Lowestoft",
        "crs_code": "LWT"
    },
    {
        "name": "Ludlow",
        "crs_code": "LUD"
    },
    {
        "name": "Luton",
        "crs_code": "LUT"
    },
    {
        "name": "Luton Airport Parkway",
        "crs_code": "LTN"
    },
    {
        "name": "Luxulyan",
        "crs_code": "LUX"
    },
    {
        "name": "Lydney",
        "crs_code": "LYD"
    },
    {
        "name": "Lye (West Midlands)",
        "crs_code": "LYE"
    },
    {
        "name": "Lymington Pier",
        "crs_code": "LYP"
    },
    {
        "name": "Lymington Town",
        "crs_code": "LYT"
    },
    {
        "name": "Lympstone Commando",
        "crs_code": "LYC"
    },
    {
        "name": "Lympstone Village",
        "crs_code": "LYM"
    },
    {
        "name": "Lytham",
        "crs_code": "LTM"
    },
    {
        "name": "Macclesfield",
        "crs_code": "MAC"
    },
    {
        "name": "Machynlleth",
        "crs_code": "MCN"
    },
    {
        "name": "Maesteg",
        "crs_code": "MST"
    },
    {
        "name": "Maesteg (Ewenny Road)",
        "crs_code": "MEW"
    },
    {
        "name": "Maghull",
        "crs_code": "MAG"
    },
    {
        "name": "Maghull North",
        "crs_code": "MNS"
    },
    {
        "name": "Maiden Newton",
        "crs_code": "MDN"
    },
    {
        "name": "Maidenhead",
        "crs_code": "MAI"
    },
    {
        "name": "Maidstone Barracks",
        "crs_code": "MDB"
    },
    {
        "name": "Maidstone East",
        "crs_code": "MDE"
    },
    {
        "name": "Maidstone West",
        "crs_code": "MDW"
    },
    {
        "name": "Malden Manor",
        "crs_code": "MAL"
    },
    {
        "name": "Mallaig",
        "crs_code": "MLG"
    },
    {
        "name": "Malton",
        "crs_code": "MLT"
    },
    {
        "name": "Malvern Link",
        "crs_code": "MVL"
    },
    {
        "name": "Manchester Airport",
        "crs_code": "MIA"
    },
    {
        "name": "Manchester Oxford Road",
        "crs_code": "MCO"
    },
    {
        "name": "Manchester Piccadilly",
        "crs_code": "MAN"
    },
    {
        "name": "Manchester United Football Ground",
        "crs_code": "MUF"
    },
    {
        "name": "Manchester Victoria",
        "crs_code": "MCV"
    },
    {
        "name": "Manea",
        "crs_code": "MNE"
    },
    {
        "name": "Manningtree",
        "crs_code": "MNG"
    },
    {
        "name": "Manor Park",
        "crs_code": "MNP"
    },
    {
        "name": "Manor Road",
        "crs_code": "MNR"
    },
    {
        "name": "Manorbier",
        "crs_code": "MRB"
    },
    {
        "name": "Manors",
        "crs_code": "MAS"
    },
    {
        "name": "Mansfield",
        "crs_code": "MFT"
    },
    {
        "name": "Mansfield Woodhouse",
        "crs_code": "MSW"
    },
    {
        "name": "March",
        "crs_code": "MCH"
    },
    {
        "name": "Marden (Kent)",
        "crs_code": "MRN"
    },
    {
        "name": "Margate",
        "crs_code": "MAR"
    },
    {
        "name": "Market Harborough",
        "crs_code": "MHR"
    },
    {
        "name": "Market Rasen",
        "crs_code": "MKR"
    },
    {
        "name": "Markinch",
        "crs_code": "MNC"
    },
    {
        "name": "Marks Tey",
        "crs_code": "MKT"
    },
    {
        "name": "Marlow",
        "crs_code": "MLW"
    },
    {
        "name": "Marple",
        "crs_code": "MPL"
    },
    {
        "name": "Marsden (Yorks)",
        "crs_code": "MSN"
    },
    {
        "name": "Marske",
        "crs_code": "MSK"
    },
    {
        "name": "Marston Green",
        "crs_code": "MGN"
    },
    {
        "name": "Martin Mill",
        "crs_code": "MTM"
    },
    {
        "name": "Martins Heron",
        "crs_code": "MAO"
    },
    {
        "name": "Marton",
        "crs_code": "MTO"
    },
    {
        "name": "Maryhill",
        "crs_code": "MYH"
    },
    {
        "name": "Maryland",
        "crs_code": "MYL"
    },
    {
        "name": "Maryport",
        "crs_code": "MRY"
    },
    {
        "name": "Matlock",
        "crs_code": "MAT"
    },
    {
        "name": "Matlock Bath",
        "crs_code": "MTB"
    },
    {
        "name": "Mauldeth Road",
        "crs_code": "MAU"
    },
    {
        "name": "Maxwell Park",
        "crs_code": "MAX"
    },
    {
        "name": "Maybole",
        "crs_code": "MAY"
    },
    {
        "name": "Maze Hill",
        "crs_code": "MZH"
    },
    {
        "name": "Meadowhall",
        "crs_code": "MHS"
    },
    {
        "name": "Meldreth",
        "crs_code": "MEL"
    },
    {
        "name": "Melksham",
        "crs_code": "MKM"
    },
    {
        "name": "Melton (Suffolk)",
        "crs_code": "MES"
    },
    {
        "name": "Melton Mowbray",
        "crs_code": "MMO"
    },
    {
        "name": "Menheniot",
        "crs_code": "MEN"
    },
    {
        "name": "Menston",
        "crs_code": "MNN"
    },
    {
        "name": "Meols",
        "crs_code": "MEO"
    },
    {
        "name": "Meols Cop",
        "crs_code": "MEC"
    },
    {
        "name": "Meopham",
        "crs_code": "MEP"
    },
    {
        "name": "Meridian Water",
        "crs_code": "MRW"
    },
    {
        "name": "Merryton",
        "crs_code": "MEY"
    },
    {
        "name": "Merstham",
        "crs_code": "MHM"
    },
    {
        "name": "Merthyr Tydfil",
        "crs_code": "MER"
    },
    {
        "name": "Merthyr Vale",
        "crs_code": "MEV"
    },
    {
        "name": "Metheringham",
        "crs_code": "MGM"
    },
    {
        "name": "MetroCentre",
        "crs_code": "MCE"
    },
    {
        "name": "Mexborough",
        "crs_code": "MEX"
    },
    {
        "name": "Micheldever",
        "crs_code": "MIC"
    },
    {
        "name": "Micklefield",
        "crs_code": "MIK"
    },
    {
        "name": "Middlesbrough",
        "crs_code": "MBR"
    },
    {
        "name": "Middlewood",
        "crs_code": "MDL"
    },
    {
        "name": "Midgham",
        "crs_code": "MDG"
    },
    {
        "name": "Milford (Surrey)",
        "crs_code": "MLF"
    },
    {
        "name": "Milford Haven",
        "crs_code": "MFH"
    },
    {
        "name": "Mill Hill (Lancs)",
        "crs_code": "MLH"
    },
    {
        "name": "Mill Hill Broadway",
        "crs_code": "MIL"
    },
    {
        "name": "Millbrook (Beds)",
        "crs_code": "MLB"
    },
    {
        "name": "Millbrook (Hants)",
        "crs_code": "MBK"
    },
    {
        "name": "Milliken Park",
        "crs_code": "MIN"
    },
    {
        "name": "Millom",
        "crs_code": "MLM"
    },
    {
        "name": "Mills Hill (Manchester)",
        "crs_code": "MIH"
    },
    {
        "name": "Milngavie",
        "crs_code": "MLN"
    },
    {
        "name": "Milton Keynes Central",
        "crs_code": "MKC"
    },
    {
        "name": "Minffordd",
        "crs_code": "MFF"
    },
    {
        "name": "Minster",
        "crs_code": "MSR"
    },
    {
        "name": "Mirfield",
        "crs_code": "MIR"
    },
    {
        "name": "Mistley",
        "crs_code": "MIS"
    },
    {
        "name": "Mitcham Eastfields",
        "crs_code": "MTC"
    },
    {
        "name": "Mitcham Junction",
        "crs_code": "MIJ"
    },
    {
        "name": "Mobberley",
        "crs_code": "MOB"
    },
    {
        "name": "Monifieth",
        "crs_code": "MON"
    },
    {
        "name": "Monks Risborough",
        "crs_code": "MRS"
    },
    {
        "name": "Montpelier",
        "crs_code": "MTP"
    },
    {
        "name": "Montrose",
        "crs_code": "MTS"
    },
    {
        "name": "Moorfields",
        "crs_code": "MRF"
    },
    {
        "name": "Moorgate",
        "crs_code": "MOG"
    },
    {
        "name": "Moorside",
        "crs_code": "MSD"
    },
    {
        "name": "Moorthorpe",
        "crs_code": "MRP"
    },
    {
        "name": "Morar",
        "crs_code": "MRR"
    },
    {
        "name": "Morchard Road",
        "crs_code": "MRD"
    },
    {
        "name": "Morden South",
        "crs_code": "MDS"
    },
    {
        "name": "Morecambe",
        "crs_code": "MCM"
    },
    {
        "name": "Moreton (Dorset)",
        "crs_code": "MTN"
    },
    {
        "name": "Moreton (Merseyside)",
        "crs_code": "MRT"
    },
    {
        "name": "Moreton-in-Marsh",
        "crs_code": "MIM"
    },
    {
        "name": "Morfa Mawddach",
        "crs_code": "MFA"
    },
    {
        "name": "Morley",
        "crs_code": "MLY"
    },
    {
        "name": "Morpeth",
        "crs_code": "MPT"
    },
    {
        "name": "Mortimer",
        "crs_code": "MOR"
    },
    {
        "name": "Mortlake",
        "crs_code": "MTL"
    },
    {
        "name": "Moses Gate",
        "crs_code": "MSS"
    },
    {
        "name": "Moss Side",
        "crs_code": "MOS"
    },
    {
        "name": "Mossley (Manchester)",
        "crs_code": "MSL"
    },
    {
        "name": "Mossley Hill",
        "crs_code": "MSH"
    },
    {
        "name": "Mosspark",
        "crs_code": "MPK"
    },
    {
        "name": "Moston",
        "crs_code": "MSO"
    },
    {
        "name": "Motherwell",
        "crs_code": "MTH"
    },
    {
        "name": "Motspur Park",
        "crs_code": "MOT"
    },
    {
        "name": "Mottingham",
        "crs_code": "MTG"
    },
    {
        "name": "Mottisfont & Dunbridge",
        "crs_code": "DBG"
    },
    {
        "name": "Mouldsworth",
        "crs_code": "MLD"
    },
    {
        "name": "Moulsecoomb",
        "crs_code": "MCB"
    },
    {
        "name": "Mount Florida",
        "crs_code": "MFL"
    },
    {
        "name": "Mount Vernon",
        "crs_code": "MTV"
    },
    {
        "name": "Mountain Ash",
        "crs_code": "MTA"
    },
    {
        "name": "Muir of Ord",
        "crs_code": "MOO"
    },
    {
        "name": "Muirend",
        "crs_code": "MUI"
    },
    {
        "name": "Musselburgh",
        "crs_code": "MUB"
    },
    {
        "name": "Mytholmroyd",
        "crs_code": "MYT"
    },
    {
        "name": "Nafferton",
        "crs_code": "NFN"
    },
    {
        "name": "Nailsea & Backwell",
        "crs_code": "NLS"
    },
    {
        "name": "Nairn",
        "crs_code": "NRN"
    },
    {
        "name": "Nantwich",
        "crs_code": "NAN"
    },
    {
        "name": "Narberth",
        "crs_code": "NAR"
    },
    {
        "name": "Narborough",
        "crs_code": "NBR"
    },
    {
        "name": "Navigation Road",
        "crs_code": "NVR"
    },
    {
        "name": "Neath",
        "crs_code": "NTH"
    },
    {
        "name": "Needham Market",
        "crs_code": "NMT"
    },
    {
        "name": "Neilston",
        "crs_code": "NEI"
    },
    {
        "name": "Nelson",
        "crs_code": "NEL"
    },
    {
        "name": "Neston",
        "crs_code": "NES"
    },
    {
        "name": "Netherfield",
        "crs_code": "NET"
    },
    {
        "name": "Nethertown",
        "crs_code": "NRT"
    },
    {
        "name": "Netley",
        "crs_code": "NTL"
    },
    {
        "name": "New Barnet",
        "crs_code": "NBA"
    },
    {
        "name": "New Beckenham",
        "crs_code": "NBC"
    },
    {
        "name": "New Brighton",
        "crs_code": "NBN"
    },
    {
        "name": "New Clee",
        "crs_code": "NCE"
    },
    {
        "name": "New Cross",
        "crs_code": "NWX"
    },
    {
        "name": "New Cross Gate",
        "crs_code": "NXG"
    },
    {
        "name": "New Cumnock",
        "crs_code": "NCK"
    },
    {
        "name": "New Eltham",
        "crs_code": "NEH"
    },
    {
        "name": "New Holland",
        "crs_code": "NHL"
    },
    {
        "name": "New Hythe",
        "crs_code": "NHE"
    },
    {
        "name": "New Lane",
        "crs_code": "NLN"
    },
    {
        "name": "New Malden",
        "crs_code": "NEM"
    },
    {
        "name": "New Mills Central",
        "crs_code": "NMC"
    },
    {
        "name": "New Mills Newtown",
        "crs_code": "NMN"
    },
    {
        "name": "New Milton",
        "crs_code": "NWM"
    },
    {
        "name": "New Pudsey",
        "crs_code": "NPD"
    },
    {
        "name": "New Southgate",
        "crs_code": "NSG"
    },
    {
        "name": "Newark Castle",
        "crs_code": "NCT"
    },
    {
        "name": "Newark North Gate",
        "crs_code": "NNG"
    },
    {
        "name": "Newbridge",
        "crs_code": "NBE"
    },
    {
        "name": "Newbury",
        "crs_code": "NBY"
    },
    {
        "name": "Newbury Racecourse",
        "crs_code": "NRC"
    },
    {
        "name": "Newcastle",
        "crs_code": "NCL"
    },
    {
        "name": "Newcourt",
        "crs_code": "NCO"
    },
    {
        "name": "Newcraighall",
        "crs_code": "NEW"
    },
    {
        "name": "Newhaven Harbour",
        "crs_code": "NVH"
    },
    {
        "name": "Newhaven Town",
        "crs_code": "NVN"
    },
    {
        "name": "Newington",
        "crs_code": "NGT"
    },
    {
        "name": "Newmarket",
        "crs_code": "NMK"
    },
    {
        "name": "Newport (Essex)",
        "crs_code": "NWE"
    },
    {
        "name": "Newport (South Wales)",
        "crs_code": "NWP"
    },
    {
        "name": "Newquay",
        "crs_code": "NQY"
    },
    {
        "name": "Newstead",
        "crs_code": "NSD"
    },
    {
        "name": "Newton (Lanark)",
        "crs_code": "NTN"
    },
    {
        "name": "Newton Abbot",
        "crs_code": "NTA"
    },
    {
        "name": "Newton Aycliffe",
        "crs_code": "NAY"
    },
    {
        "name": "Newton for Hyde",
        "crs_code": "NWN"
    },
    {
        "name": "Newton St Cyres",
        "crs_code": "NTC"
    },
    {
        "name": "Newtongrange",
        "crs_code": "NEG"
    },
    {
        "name": "Newton-le-Willows",
        "crs_code": "NLW"
    },
    {
        "name": "Newtonmore",
        "crs_code": "NWR"
    },
    {
        "name": "Newton-on-Ayr",
        "crs_code": "NOA"
    },
    {
        "name": "Newtown (Powys)",
        "crs_code": "NWT"
    },
    {
        "name": "Ninian Park",
        "crs_code": "NNP"
    },
    {
        "name": "Nitshill",
        "crs_code": "NIT"
    },
    {
        "name": "Norbiton",
        "crs_code": "NBT"
    },
    {
        "name": "Norbury",
        "crs_code": "NRB"
    },
    {
        "name": "Normans Bay",
        "crs_code": "NSB"
    },
    {
        "name": "Normanton",
        "crs_code": "NOR"
    },
    {
        "name": "North Berwick",
        "crs_code": "NBW"
    },
    {
        "name": "North Camp",
        "crs_code": "NCM"
    },
    {
        "name": "North Dulwich",
        "crs_code": "NDL"
    },
    {
        "name": "North Fambridge",
        "crs_code": "NFA"
    },
    {
        "name": "North Llanrwst",
        "crs_code": "NLR"
    },
    {
        "name": "North Queensferry",
        "crs_code": "NQU"
    },
    {
        "name": "North Road (Darlington)",
        "crs_code": "NRD"
    },
    {
        "name": "North Sheen",
        "crs_code": "NSH"
    },
    {
        "name": "North Walsham",
        "crs_code": "NWA"
    },
    {
        "name": "North Wembley",
        "crs_code": "NWB"
    },
    {
        "name": "Northallerton",
        "crs_code": "NTR"
    },
    {
        "name": "Northampton",
        "crs_code": "NMP"
    },
    {
        "name": "Northfield",
        "crs_code": "NFD"
    },
    {
        "name": "Northfleet",
        "crs_code": "NFL"
    },
    {
        "name": "Northolt Park",
        "crs_code": "NLT"
    },
    {
        "name": "Northumberland Park",
        "crs_code": "NUM"
    },
    {
        "name": "Northwich",
        "crs_code": "NWI"
    },
    {
        "name": "Norwich",
        "crs_code": "NRW"
    },
    {
        "name": "Norwood Junction",
        "crs_code": "NWD"
    },
    {
        "name": "Nottingham",
        "crs_code": "NOT"
    },
    {
        "name": "Nuneaton",
        "crs_code": "NUN"
    },
    {
        "name": "Nunhead",
        "crs_code": "NHD"
    },
    {
        "name": "Nunthorpe",
        "crs_code": "NNT"
    },
    {
        "name": "Nutbourne",
        "crs_code": "NUT"
    },
    {
        "name": "Nutfield",
        "crs_code": "NUF"
    },
    {
        "name": "Oakengates",
        "crs_code": "OKN"
    },
    {
        "name": "Oakham",
        "crs_code": "OKM"
    },
    {
        "name": "Oakleigh Park",
        "crs_code": "OKL"
    },
    {
        "name": "Oban",
        "crs_code": "OBN"
    },
    {
        "name": "Ockendon",
        "crs_code": "OCK"
    },
    {
        "name": "Ockley",
        "crs_code": "OLY"
    },
    {
        "name": "Okehampton",
        "crs_code": "OKE"
    },
    {
        "name": "Okehampton",
        "crs_code": "OKE"
    },
    {
        "name": "Old Hill",
        "crs_code": "OHL"
    },
    {
        "name": "Old Roan",
        "crs_code": "ORN"
    },
    {
        "name": "Old Street",
        "crs_code": "OLD"
    },
    {
        "name": "Oldfield Park",
        "crs_code": "OLF"
    },
    {
        "name": "Olton",
        "crs_code": "OLT"
    },
    {
        "name": "Ore",
        "crs_code": "ORE"
    },
    {
        "name": "Ormskirk",
        "crs_code": "OMS"
    },
    {
        "name": "Orpington",
        "crs_code": "ORP"
    },
    {
        "name": "Orrell",
        "crs_code": "ORR"
    },
    {
        "name": "Orrell Park",
        "crs_code": "OPK"
    },
    {
        "name": "Otford",
        "crs_code": "OTF"
    },
    {
        "name": "Oulton Broad North",
        "crs_code": "OUN"
    },
    {
        "name": "Oulton Broad South",
        "crs_code": "OUS"
    },
    {
        "name": "Outwood",
        "crs_code": "OUT"
    },
    {
        "name": "Overpool",
        "crs_code": "OVE"
    },
    {
        "name": "Overton",
        "crs_code": "OVR"
    },
    {
        "name": "Oxenholme Lake District",
        "crs_code": "OXN"
    },
    {
        "name": "Oxford",
        "crs_code": "OXF"
    },
    {
        "name": "Oxford Parkway",
        "crs_code": "OXP"
    },
    {
        "name": "Oxshott",
        "crs_code": "OXS"
    },
    {
        "name": "Oxted",
        "crs_code": "OXT"
    },
    {
        "name": "Paddock Wood",
        "crs_code": "PDW"
    },
    {
        "name": "Padgate",
        "crs_code": "PDG"
    },
    {
        "name": "Paignton",
        "crs_code": "PGN"
    },
    {
        "name": "Paisley Canal",
        "crs_code": "PCN"
    },
    {
        "name": "Paisley Gilmour Street",
        "crs_code": "PYG"
    },
    {
        "name": "Paisley St James",
        "crs_code": "PYJ"
    },
    {
        "name": "Palmers Green",
        "crs_code": "PAL"
    },
    {
        "name": "Pangbourne",
        "crs_code": "PAN"
    },
    {
        "name": "Pannal",
        "crs_code": "PNL"
    },
    {
        "name": "Pantyffynnon",
        "crs_code": "PTF"
    },
    {
        "name": "Par",
        "crs_code": "PAR"
    },
    {
        "name": "Parbold",
        "crs_code": "PBL"
    },
    {
        "name": "Park Street",
        "crs_code": "PKT"
    },
    {
        "name": "Parkstone (Dorset)",
        "crs_code": "PKS"
    },
    {
        "name": "Parson Street",
        "crs_code": "PSN"
    },
    {
        "name": "Partick",
        "crs_code": "PTK"
    },
    {
        "name": "Parton",
        "crs_code": "PRN"
    },
    {
        "name": "Patchway",
        "crs_code": "PWY"
    },
    {
        "name": "Patricroft",
        "crs_code": "PAT"
    },
    {
        "name": "Patterton",
        "crs_code": "PTT"
    },
    {
        "name": "Peartree",
        "crs_code": "PEA"
    },
    {
        "name": "Peckham Rye",
        "crs_code": "PMR"
    },
    {
        "name": "Pegswood",
        "crs_code": "PEG"
    },
    {
        "name": "Pemberton",
        "crs_code": "PEM"
    },
    {
        "name": "Pembrey & Burry Port",
        "crs_code": "PBY"
    },
    {
        "name": "Pembroke",
        "crs_code": "PMB"
    },
    {
        "name": "Pembroke Dock",
        "crs_code": "PMD"
    },
    {
        "name": "Penally",
        "crs_code": "PNA"
    },
    {
        "name": "Penarth",
        "crs_code": "PEN"
    },
    {
        "name": "Pencoed",
        "crs_code": "PCD"
    },
    {
        "name": "Pengam",
        "crs_code": "PGM"
    },
    {
        "name": "Penge East",
        "crs_code": "PNE"
    },
    {
        "name": "Penge West",
        "crs_code": "PNW"
    },
    {
        "name": "Penhelig",
        "crs_code": "PHG"
    },
    {
        "name": "Penistone",
        "crs_code": "PNS"
    },
    {
        "name": "Penkridge",
        "crs_code": "PKG"
    },
    {
        "name": "Penmaenmawr",
        "crs_code": "PMW"
    },
    {
        "name": "Penmere",
        "crs_code": "PNM"
    },
    {
        "name": "Penrhiwceiber",
        "crs_code": "PER"
    },
    {
        "name": "Penrhyndeudraeth",
        "crs_code": "PRH"
    },
    {
        "name": "Penrith (North Lakes)",
        "crs_code": "PNR"
    },
    {
        "name": "Penryn (Cornwall)",
        "crs_code": "PYN"
    },
    {
        "name": "Pensarn (Gwynedd)",
        "crs_code": "PES"
    },
    {
        "name": "Penshurst",
        "crs_code": "PHR"
    },
    {
        "name": "Pentre-Bach",
        "crs_code": "PTB"
    },
    {
        "name": "Pen-y-Bont",
        "crs_code": "PNY"
    },
    {
        "name": "Penychain",
        "crs_code": "PNC"
    },
    {
        "name": "Penyffordd",
        "crs_code": "PNF"
    },
    {
        "name": "Penzance",
        "crs_code": "PNZ"
    },
    {
        "name": "Perranwell",
        "crs_code": "PRW"
    },
    {
        "name": "Perry Barr",
        "crs_code": "PRY"
    },
    {
        "name": "Pershore",
        "crs_code": "PSH"
    },
    {
        "name": "Perth",
        "crs_code": "PTH"
    },
    {
        "name": "Peterborough",
        "crs_code": "PBO"
    },
    {
        "name": "Petersfield",
        "crs_code": "PTR"
    },
    {
        "name": "Petts Wood",
        "crs_code": "PET"
    },
    {
        "name": "Pevensey & Westham",
        "crs_code": "PEV"
    },
    {
        "name": "Pevensey Bay",
        "crs_code": "PEB"
    },
    {
        "name": "Pewsey",
        "crs_code": "PEW"
    },
    {
        "name": "Pilning",
        "crs_code": "PIL"
    },
    {
        "name": "Pinhoe",
        "crs_code": "PIN"
    },
    {
        "name": "Pitlochry",
        "crs_code": "PIT"
    },
    {
        "name": "Pitsea",
        "crs_code": "PSE"
    },
    {
        "name": "Pleasington",
        "crs_code": "PLS"
    },
    {
        "name": "Plockton",
        "crs_code": "PLK"
    },
    {
        "name": "Pluckley",
        "crs_code": "PLC"
    },
    {
        "name": "Plumley",
        "crs_code": "PLM"
    },
    {
        "name": "Plumpton",
        "crs_code": "PMP"
    },
    {
        "name": "Plumstead",
        "crs_code": "PLU"
    },
    {
        "name": "Plymouth",
        "crs_code": "PLY"
    },
    {
        "name": "Pokesdown",
        "crs_code": "POK"
    },
    {
        "name": "Polegate",
        "crs_code": "PLG"
    },
    {
        "name": "Polesworth",
        "crs_code": "PSW"
    },
    {
        "name": "Pollokshaws East",
        "crs_code": "PWE"
    },
    {
        "name": "Pollokshaws West",
        "crs_code": "PWW"
    },
    {
        "name": "Pollokshields East",
        "crs_code": "PLE"
    },
    {
        "name": "Pollokshields West",
        "crs_code": "PLW"
    },
    {
        "name": "Polmont",
        "crs_code": "PMT"
    },
    {
        "name": "Polsloe Bridge",
        "crs_code": "POL"
    },
    {
        "name": "Ponders End",
        "crs_code": "PON"
    },
    {
        "name": "Pontarddulais",
        "crs_code": "PTD"
    },
    {
        "name": "Pontefract Baghill",
        "crs_code": "PFR"
    },
    {
        "name": "Pontefract Monkhill",
        "crs_code": "PFM"
    },
    {
        "name": "Pontefract Tanshelf",
        "crs_code": "POT"
    },
    {
        "name": "Pontlottyn",
        "crs_code": "PLT"
    },
    {
        "name": "Pontyclun",
        "crs_code": "PYC"
    },
    {
        "name": "Pont-y-Pant",
        "crs_code": "PYP"
    },
    {
        "name": "Pontypool & New Inn",
        "crs_code": "PPL"
    },
    {
        "name": "Pontypridd",
        "crs_code": "PPD"
    },
    {
        "name": "Poole",
        "crs_code": "POO"
    },
    {
        "name": "Poppleton",
        "crs_code": "POP"
    },
    {
        "name": "Port Glasgow",
        "crs_code": "PTG"
    },
    {
        "name": "Port Sunlight",
        "crs_code": "PSL"
    },
    {
        "name": "Port Talbot Parkway",
        "crs_code": "PTA"
    },
    {
        "name": "Portchester",
        "crs_code": "PTC"
    },
    {
        "name": "Porth",
        "crs_code": "POR"
    },
    {
        "name": "Porthmadog",
        "crs_code": "PTM"
    },
    {
        "name": "Portlethen",
        "crs_code": "PLN"
    },
    {
        "name": "Portslade",
        "crs_code": "PLD"
    },
    {
        "name": "Portsmouth & Southsea",
        "crs_code": "PMS"
    },
    {
        "name": "Portsmouth Arms",
        "crs_code": "PMA"
    },
    {
        "name": "Portsmouth Harbour",
        "crs_code": "PMH"
    },
    {
        "name": "Possilpark & Parkhouse",
        "crs_code": "PPK"
    },
    {
        "name": "Potters Bar",
        "crs_code": "PBR"
    },
    {
        "name": "Poulton-le-Fylde",
        "crs_code": "PFY"
    },
    {
        "name": "Poynton",
        "crs_code": "PYT"
    },
    {
        "name": "Prees",
        "crs_code": "PRS"
    },
    {
        "name": "Prescot",
        "crs_code": "PSC"
    },
    {
        "name": "Prestatyn",
        "crs_code": "PRT"
    },
    {
        "name": "Prestbury",
        "crs_code": "PRB"
    },
    {
        "name": "Preston (Lancs)",
        "crs_code": "PRE"
    },
    {
        "name": "Preston Park",
        "crs_code": "PRP"
    },
    {
        "name": "Prestonpans",
        "crs_code": "PST"
    },
    {
        "name": "Prestwick International Airport",
        "crs_code": "PRA"
    },
    {
        "name": "Prestwick Town",
        "crs_code": "PTW"
    },
    {
        "name": "Priesthill & Darnley",
        "crs_code": "PTL"
    },
    {
        "name": "Princes Risborough",
        "crs_code": "PRR"
    },
    {
        "name": "Prittlewell",
        "crs_code": "PRL"
    },
    {
        "name": "Prudhoe",
        "crs_code": "PRU"
    },
    {
        "name": "Pulborough",
        "crs_code": "PUL"
    },
    {
        "name": "Purfleet",
        "crs_code": "PFL"
    },
    {
        "name": "Purley",
        "crs_code": "PUR"
    },
    {
        "name": "Purley Oaks",
        "crs_code": "PUO"
    },
    {
        "name": "Putney",
        "crs_code": "PUT"
    },
    {
        "name": "Pwllheli",
        "crs_code": "PWL"
    },
    {
        "name": "Pye Corner",
        "crs_code": "PYE"
    },
    {
        "name": "Pyle",
        "crs_code": "PYL"
    },
    {
        "name": "Quakers Yard",
        "crs_code": "QYD"
    },
    {
        "name": "Queenborough",
        "crs_code": "QBR"
    },
    {
        "name": "Queens Park (Glasgow)",
        "crs_code": "QPK"
    },
    {
        "name": "Queens Park (London)",
        "crs_code": "QPW"
    },
    {
        "name": "Queens Road (Peckham)",
        "crs_code": "QRP"
    },
    {
        "name": "Queenstown Road (Battersea)",
        "crs_code": "QRB"
    },
    {
        "name": "Quintrell Downs",
        "crs_code": "QUI"
    },
    {
        "name": "Radcliffe-on-Trent",
        "crs_code": "RDF"
    },
    {
        "name": "Radlett",
        "crs_code": "RDT"
    },
    {
        "name": "Radley",
        "crs_code": "RAD"
    },
    {
        "name": "Radyr",
        "crs_code": "RDR"
    },
    {
        "name": "Rainford",
        "crs_code": "RNF"
    },
    {
        "name": "Rainham (Essex)",
        "crs_code": "RNM"
    },
    {
        "name": "Rainham (Kent)",
        "crs_code": "RAI"
    },
    {
        "name": "Rainhill",
        "crs_code": "RNH"
    },
    {
        "name": "Ramsgate",
        "crs_code": "RAM"
    },
    {
        "name": "Ramsgreave & Wilpshire",
        "crs_code": "RGW"
    },
    {
        "name": "Rannoch",
        "crs_code": "RAN"
    },
    {
        "name": "Rauceby",
        "crs_code": "RAU"
    },
    {
        "name": "Ravenglass for Eskdale",
        "crs_code": "RAV"
    },
    {
        "name": "Ravensbourne",
        "crs_code": "RVB"
    },
    {
        "name": "Ravensthorpe",
        "crs_code": "RVN"
    },
    {
        "name": "Rawcliffe",
        "crs_code": "RWC"
    },
    {
        "name": "Rayleigh",
        "crs_code": "RLG"
    },
    {
        "name": "Raynes Park",
        "crs_code": "RAY"
    },
    {
        "name": "Reading",
        "crs_code": "RDG"
    },
    {
        "name": "Reading West",
        "crs_code": "RDW"
    },
    {
        "name": "Rectory Road",
        "crs_code": "REC"
    },
    {
        "name": "Redbridge",
        "crs_code": "RDB"
    },
    {
        "name": "Redcar British Steel",
        "crs_code": "RBS"
    },
    {
        "name": "Redcar Central",
        "crs_code": "RCC"
    },
    {
        "name": "Redcar East",
        "crs_code": "RCE"
    },
    {
        "name": "Reddish North",
        "crs_code": "RDN"
    },
    {
        "name": "Reddish South",
        "crs_code": "RDS"
    },
    {
        "name": "Redditch",
        "crs_code": "RDC"
    },
    {
        "name": "Redhill",
        "crs_code": "RDH"
    },
    {
        "name": "Redland",
        "crs_code": "RDA"
    },
    {
        "name": "Redruth",
        "crs_code": "RED"
    },
    {
        "name": "Reedham (Norfolk)",
        "crs_code": "REE"
    },
    {
        "name": "Reedham (Surrey)",
        "crs_code": "RHM"
    },
    {
        "name": "Reigate",
        "crs_code": "REI"
    },
    {
        "name": "Renton",
        "crs_code": "RTN"
    },
    {
        "name": "Retford",
        "crs_code": "RET"
    },
    {
        "name": "Rhiwbina",
        "crs_code": "RHI"
    },
    {
        "name": "Rhoose Cardiff International Airport",
        "crs_code": "RIA"
    },
    {
        "name": "Rhosneigr",
        "crs_code": "RHO"
    },
    {
        "name": "Rhyl",
        "crs_code": "RHL"
    },
    {
        "name": "Rhymney",
        "crs_code": "RHY"
    },
    {
        "name": "Ribblehead",
        "crs_code": "RHD"
    },
    {
        "name": "Rice Lane",
        "crs_code": "RIL"
    },
    {
        "name": "Richmond (London)",
        "crs_code": "RMD"
    },
    {
        "name": "Rickmansworth",
        "crs_code": "RIC"
    },
    {
        "name": "Riddlesdown",
        "crs_code": "RDD"
    },
    {
        "name": "Ridgmont",
        "crs_code": "RID"
    },
    {
        "name": "Riding Mill",
        "crs_code": "RDM"
    },
    {
        "name": "Risca & Pontymister",
        "crs_code": "RCA"
    },
    {
        "name": "Rishton",
        "crs_code": "RIS"
    },
    {
        "name": "Robertsbridge",
        "crs_code": "RBR"
    },
    {
        "name": "Robroyston",
        "crs_code": "RRN"
    },
    {
        "name": "Roby",
        "crs_code": "ROB"
    },
    {
        "name": "Rochdale",
        "crs_code": "RCD"
    },
    {
        "name": "Roche",
        "crs_code": "ROC"
    },
    {
        "name": "Rochester",
        "crs_code": "RTR"
    },
    {
        "name": "Rochford",
        "crs_code": "RFD"
    },
    {
        "name": "Rock Ferry",
        "crs_code": "RFY"
    },
    {
        "name": "Rogart",
        "crs_code": "ROG"
    },
    {
        "name": "Rogerstone",
        "crs_code": "ROR"
    },
    {
        "name": "Rolleston",
        "crs_code": "ROL"
    },
    {
        "name": "Roman Bridge",
        "crs_code": "RMB"
    },
    {
        "name": "Romford",
        "crs_code": "RMF"
    },
    {
        "name": "Romiley",
        "crs_code": "RML"
    },
    {
        "name": "Romsey",
        "crs_code": "ROM"
    },
    {
        "name": "Roose",
        "crs_code": "ROO"
    },
    {
        "name": "Rose Grove",
        "crs_code": "RSG"
    },
    {
        "name": "Rose Hill Marple",
        "crs_code": "RSH"
    },
    {
        "name": "Rosyth",
        "crs_code": "ROS"
    },
    {
        "name": "Rotherham Central",
        "crs_code": "RMC"
    },
    {
        "name": "Rotherhithe",
        "crs_code": "ROE"
    },
    {
        "name": "Roughton Road",
        "crs_code": "RNR"
    },
    {
        "name": "Rowlands Castle",
        "crs_code": "RLN"
    },
    {
        "name": "Rowley Regis",
        "crs_code": "ROW"
    },
    {
        "name": "Roy Bridge",
        "crs_code": "RYB"
    },
    {
        "name": "Roydon",
        "crs_code": "RYN"
    },
    {
        "name": "Royston",
        "crs_code": "RYS"
    },
    {
        "name": "Ruabon",
        "crs_code": "RUA"
    },
    {
        "name": "Rufford",
        "crs_code": "RUF"
    },
    {
        "name": "Rugby",
        "crs_code": "RUG"
    },
    {
        "name": "Rugeley Town",
        "crs_code": "RGT"
    },
    {
        "name": "Rugeley Trent Valley",
        "crs_code": "RGL"
    },
    {
        "name": "Runcorn",
        "crs_code": "RUN"
    },
    {
        "name": "Runcorn East",
        "crs_code": "RUE"
    },
    {
        "name": "Ruskington",
        "crs_code": "RKT"
    },
    {
        "name": "Ruswarp",
        "crs_code": "RUS"
    },
    {
        "name": "Rutherglen",
        "crs_code": "RUT"
    },
    {
        "name": "Ryde Esplanade",
        "crs_code": "RYD"
    },
    {
        "name": "Ryde Pier Head",
        "crs_code": "RYP"
    },
    {
        "name": "Ryde St Johns Road",
        "crs_code": "RYR"
    },
    {
        "name": "Ryder Brow",
        "crs_code": "RRB"
    },
    {
        "name": "Rye (Sussex)",
        "crs_code": "RYE"
    },
    {
        "name": "Rye House",
        "crs_code": "RYH"
    },
    {
        "name": "Salford Central",
        "crs_code": "SFD"
    },
    {
        "name": "Salford Crescent",
        "crs_code": "SLD"
    },
    {
        "name": "Salfords (Surrey)",
        "crs_code": "SAF"
    },
    {
        "name": "Salhouse",
        "crs_code": "SAH"
    },
    {
        "name": "Salisbury",
        "crs_code": "SAL"
    },
    {
        "name": "Saltaire",
        "crs_code": "SAE"
    },
    {
        "name": "Saltash",
        "crs_code": "STS"
    },
    {
        "name": "Saltburn",
        "crs_code": "SLB"
    },
    {
        "name": "Saltcoats",
        "crs_code": "SLT"
    },
    {
        "name": "Saltmarshe",
        "crs_code": "SAM"
    },
    {
        "name": "Salwick",
        "crs_code": "SLW"
    },
    {
        "name": "Sampford Courtenay",
        "crs_code": "SMC"
    },
    {
        "name": "Sandal & Agbrigg",
        "crs_code": "SNA"
    },
    {
        "name": "Sandbach",
        "crs_code": "SDB"
    },
    {
        "name": "Sanderstead",
        "crs_code": "SNR"
    },
    {
        "name": "Sandhills",
        "crs_code": "SDL"
    },
    {
        "name": "Sandhurst (Berks)",
        "crs_code": "SND"
    },
    {
        "name": "Sandling",
        "crs_code": "SDG"
    },
    {
        "name": "Sandown",
        "crs_code": "SAN"
    },
    {
        "name": "Sandplace",
        "crs_code": "SDP"
    },
    {
        "name": "Sandwell & Dudley",
        "crs_code": "SAD"
    },
    {
        "name": "Sandwich",
        "crs_code": "SDW"
    },
    {
        "name": "Sandy",
        "crs_code": "SDY"
    },
    {
        "name": "Sankey for Penketh",
        "crs_code": "SNK"
    },
    {
        "name": "Sanquhar",
        "crs_code": "SQH"
    },
    {
        "name": "Sarn",
        "crs_code": "SRR"
    },
    {
        "name": "Saundersfoot",
        "crs_code": "SDF"
    },
    {
        "name": "Saunderton",
        "crs_code": "SDR"
    },
    {
        "name": "Sawbridgeworth",
        "crs_code": "SAW"
    },
    {
        "name": "Saxilby",
        "crs_code": "SXY"
    },
    {
        "name": "Saxmundham",
        "crs_code": "SAX"
    },
    {
        "name": "Scarborough",
        "crs_code": "SCA"
    },
    {
        "name": "Scotscalder",
        "crs_code": "SCT"
    },
    {
        "name": "Scotstounhill",
        "crs_code": "SCH"
    },
    {
        "name": "Scunthorpe",
        "crs_code": "SCU"
    },
    {
        "name": "Sea Mills",
        "crs_code": "SML"
    },
    {
        "name": "Seaford (Sussex)",
        "crs_code": "SEF"
    },
    {
        "name": "Seaforth & Litherland",
        "crs_code": "SFL"
    },
    {
        "name": "Seaham",
        "crs_code": "SEA"
    },
    {
        "name": "Seamer",
        "crs_code": "SEM"
    },
    {
        "name": "Seascale",
        "crs_code": "SSC"
    },
    {
        "name": "Seaton Carew",
        "crs_code": "SEC"
    },
    {
        "name": "Seer Green & Jordans",
        "crs_code": "SRG"
    },
    {
        "name": "Selby",
        "crs_code": "SBY"
    },
    {
        "name": "Selhurst",
        "crs_code": "SRS"
    },
    {
        "name": "Sellafield",
        "crs_code": "SEL"
    },
    {
        "name": "Selling",
        "crs_code": "SEG"
    },
    {
        "name": "Selly Oak",
        "crs_code": "SLY"
    },
    {
        "name": "Settle",
        "crs_code": "SET"
    },
    {
        "name": "Seven Kings",
        "crs_code": "SVK"
    },
    {
        "name": "Seven Sisters",
        "crs_code": "SVS"
    },
    {
        "name": "Sevenoaks",
        "crs_code": "SEV"
    },
    {
        "name": "Severn Beach",
        "crs_code": "SVB"
    },
    {
        "name": "Severn Tunnel Junction",
        "crs_code": "STJ"
    },
    {
        "name": "Shadwell",
        "crs_code": "SDE"
    },
    {
        "name": "Shalford (Surrey)",
        "crs_code": "SFR"
    },
    {
        "name": "Shanklin",
        "crs_code": "SHN"
    },
    {
        "name": "Shawfair",
        "crs_code": "SFI"
    },
    {
        "name": "Shawford",
        "crs_code": "SHW"
    },
    {
        "name": "Shawlands",
        "crs_code": "SHL"
    },
    {
        "name": "Sheerness-on-Sea",
        "crs_code": "SSS"
    },
    {
        "name": "Sheffield",
        "crs_code": "SHF"
    },
    {
        "name": "Shelford (Cambs)",
        "crs_code": "SED"
    },
    {
        "name": "Shenfield",
        "crs_code": "SNF"
    },
    {
        "name": "Shenstone",
        "crs_code": "SEN"
    },
    {
        "name": "Shepherd's Bush",
        "crs_code": "SPB"
    },
    {
        "name": "Shepherds Well",
        "crs_code": "SPH"
    },
    {
        "name": "Shepley",
        "crs_code": "SPY"
    },
    {
        "name": "Shepperton",
        "crs_code": "SHP"
    },
    {
        "name": "Shepreth",
        "crs_code": "STH"
    },
    {
        "name": "Sherborne",
        "crs_code": "SHE"
    },
    {
        "name": "Sherburn-in-Elmet",
        "crs_code": "SIE"
    },
    {
        "name": "Sheringham",
        "crs_code": "SHM"
    },
    {
        "name": "Shettleston",
        "crs_code": "SLS"
    },
    {
        "name": "Shieldmuir",
        "crs_code": "SDM"
    },
    {
        "name": "Shifnal",
        "crs_code": "SFN"
    },
    {
        "name": "Shildon",
        "crs_code": "SHD"
    },
    {
        "name": "Shiplake",
        "crs_code": "SHI"
    },
    {
        "name": "Shipley (Yorks)",
        "crs_code": "SHY"
    },
    {
        "name": "Shippea Hill",
        "crs_code": "SPP"
    },
    {
        "name": "Shipton",
        "crs_code": "SIP"
    },
    {
        "name": "Shirebrook",
        "crs_code": "SHB"
    },
    {
        "name": "Shirehampton",
        "crs_code": "SHH"
    },
    {
        "name": "Shireoaks",
        "crs_code": "SRO"
    },
    {
        "name": "Shirley",
        "crs_code": "SRL"
    },
    {
        "name": "Shoeburyness",
        "crs_code": "SRY"
    },
    {
        "name": "Sholing",
        "crs_code": "SHO"
    },
    {
        "name": "Shoreditch High Street",
        "crs_code": "SDC"
    },
    {
        "name": "Shoreham (Kent)",
        "crs_code": "SEH"
    },
    {
        "name": "Shoreham-by-Sea",
        "crs_code": "SSE"
    },
    {
        "name": "Shortlands",
        "crs_code": "SRT"
    },
    {
        "name": "Shotton",
        "crs_code": "SHT"
    },
    {
        "name": "Shotts",
        "crs_code": "SHS"
    },
    {
        "name": "Shrewsbury",
        "crs_code": "SHR"
    },
    {
        "name": "Sidcup",
        "crs_code": "SID"
    },
    {
        "name": "Sileby",
        "crs_code": "SIL"
    },
    {
        "name": "Silecroft",
        "crs_code": "SIC"
    },
    {
        "name": "Silkstone Common",
        "crs_code": "SLK"
    },
    {
        "name": "Silver Street",
        "crs_code": "SLV"
    },
    {
        "name": "Silverdale",
        "crs_code": "SVR"
    },
    {
        "name": "Singer",
        "crs_code": "SIN"
    },
    {
        "name": "Sittingbourne",
        "crs_code": "SIT"
    },
    {
        "name": "Skegness",
        "crs_code": "SKG"
    },
    {
        "name": "Skewen",
        "crs_code": "SKE"
    },
    {
        "name": "Skipton",
        "crs_code": "SKI"
    },
    {
        "name": "Slade Green",
        "crs_code": "SGR"
    },
    {
        "name": "Slaithwaite",
        "crs_code": "SWT"
    },
    {
        "name": "Slateford",
        "crs_code": "SLA"
    },
    {
        "name": "Sleaford",
        "crs_code": "SLR"
    },
    {
        "name": "Sleights",
        "crs_code": "SLH"
    },
    {
        "name": "Slough",
        "crs_code": "SLO"
    },
    {
        "name": "Small Heath",
        "crs_code": "SMA"
    },
    {
        "name": "Smallbrook Junction",
        "crs_code": "SAB"
    },
    {
        "name": "Smethwick Galton Bridge",
        "crs_code": "SGB"
    },
    {
        "name": "Smethwick Rolfe Street",
        "crs_code": "SMR"
    },
    {
        "name": "Smithy Bridge",
        "crs_code": "SMB"
    },
    {
        "name": "Snaith",
        "crs_code": "SNI"
    },
    {
        "name": "Snodland",
        "crs_code": "SDA"
    },
    {
        "name": "Snowdown",
        "crs_code": "SWO"
    },
    {
        "name": "Sole Street",
        "crs_code": "SOR"
    },
    {
        "name": "Solihull",
        "crs_code": "SOL"
    },
    {
        "name": "Somerleyton",
        "crs_code": "SYT"
    },
    {
        "name": "South Acton",
        "crs_code": "SAT"
    },
    {
        "name": "South Bank",
        "crs_code": "SBK"
    },
    {
        "name": "South Bermondsey",
        "crs_code": "SBM"
    },
    {
        "name": "South Croydon",
        "crs_code": "SCY"
    },
    {
        "name": "South Elmsall",
        "crs_code": "SES"
    },
    {
        "name": "South Greenford",
        "crs_code": "SGN"
    },
    {
        "name": "South Gyle",
        "crs_code": "SGL"
    },
    {
        "name": "South Hampstead",
        "crs_code": "SOH"
    },
    {
        "name": "South Kenton",
        "crs_code": "SOK"
    },
    {
        "name": "South Merton",
        "crs_code": "SMO"
    },
    {
        "name": "South Milford",
        "crs_code": "SOM"
    },
    {
        "name": "South Ruislip",
        "crs_code": "SRU"
    },
    {
        "name": "South Tottenham",
        "crs_code": "STO"
    },
    {
        "name": "South Wigston",
        "crs_code": "SWS"
    },
    {
        "name": "South Woodham Ferrers",
        "crs_code": "SOF"
    },
    {
        "name": "Southall",
        "crs_code": "STL"
    },
    {
        "name": "Southampton Airport Parkway",
        "crs_code": "SOA"
    },
    {
        "name": "Southampton Central",
        "crs_code": "SOU"
    },
    {
        "name": "Southbourne",
        "crs_code": "SOB"
    },
    {
        "name": "Southbury",
        "crs_code": "SBU"
    },
    {
        "name": "Southease",
        "crs_code": "SEE"
    },
    {
        "name": "Southend Airport",
        "crs_code": "SIA"
    },
    {
        "name": "Southend Central",
        "crs_code": "SOC"
    },
    {
        "name": "Southend East",
        "crs_code": "SOE"
    },
    {
        "name": "Southend Victoria",
        "crs_code": "SOV"
    },
    {
        "name": "Southminster",
        "crs_code": "SMN"
    },
    {
        "name": "Southport",
        "crs_code": "SOP"
    },
    {
        "name": "Southwick",
        "crs_code": "SWK"
    },
    {
        "name": "Sowerby Bridge",
        "crs_code": "SOW"
    },
    {
        "name": "Spalding",
        "crs_code": "SPA"
    },
    {
        "name": "Spean Bridge",
        "crs_code": "SBR"
    },
    {
        "name": "Spital",
        "crs_code": "SPI"
    },
    {
        "name": "Spondon",
        "crs_code": "SPO"
    },
    {
        "name": "Spooner Row",
        "crs_code": "SPN"
    },
    {
        "name": "Spring Road",
        "crs_code": "SRI"
    },
    {
        "name": "Springburn",
        "crs_code": "SPR"
    },
    {
        "name": "Springfield",
        "crs_code": "SPF"
    },
    {
        "name": "Squires Gate",
        "crs_code": "SQU"
    },
    {
        "name": "St Albans Abbey",
        "crs_code": "SAA"
    },
    {
        "name": "St Albans City",
        "crs_code": "SAC"
    },
    {
        "name": "St Andrews Road",
        "crs_code": "SAR"
    },
    {
        "name": "St Annes-on-Sea",
        "crs_code": "SAS"
    },
    {
        "name": "St Austell",
        "crs_code": "SAU"
    },
    {
        "name": "St Bees",
        "crs_code": "SBS"
    },
    {
        "name": "St Budeaux Ferry Road",
        "crs_code": "SBF"
    },
    {
        "name": "St Budeaux Victoria Road",
        "crs_code": "SBV"
    },
    {
        "name": "St Columb Road",
        "crs_code": "SCR"
    },
    {
        "name": "St Denys",
        "crs_code": "SDN"
    },
    {
        "name": "St Erth",
        "crs_code": "SER"
    },
    {
        "name": "St Germans",
        "crs_code": "SGM"
    },
    {
        "name": "St Helens Central",
        "crs_code": "SNH"
    },
    {
        "name": "St Helens Junction",
        "crs_code": "SHJ"
    },
    {
        "name": "St Helier (Surrey)",
        "crs_code": "SIH"
    },
    {
        "name": "St Ives (Cornwall)",
        "crs_code": "SIV"
    },
    {
        "name": "St James Park (Exeter)",
        "crs_code": "SJP"
    },
    {
        "name": "St James Street (Walthamstow)",
        "crs_code": "SJS"
    },
    {
        "name": "St Johns (London)",
        "crs_code": "SAJ"
    },
    {
        "name": "St Keyne Wishing Well Halt",
        "crs_code": "SKN"
    },
    {
        "name": "St Leonards Warrior Square",
        "crs_code": "SLQ"
    },
    {
        "name": "St Margarets (Herts)",
        "crs_code": "SMT"
    },
    {
        "name": "St Margarets (London)",
        "crs_code": "SMG"
    },
    {
        "name": "St Mary Cray",
        "crs_code": "SMY"
    },
    {
        "name": "St Michaels",
        "crs_code": "STM"
    },
    {
        "name": "St Neots",
        "crs_code": "SNO"
    },
    {
        "name": "Stafford",
        "crs_code": "STA"
    },
    {
        "name": "Staines",
        "crs_code": "SNS"
    },
    {
        "name": "Stallingborough",
        "crs_code": "SLL"
    },
    {
        "name": "Stalybridge",
        "crs_code": "SYB"
    },
    {
        "name": "Stamford (Lincs)",
        "crs_code": "SMD"
    },
    {
        "name": "Stamford Hill",
        "crs_code": "SMH"
    },
    {
        "name": "Stanford-le-Hope",
        "crs_code": "SFO"
    },
    {
        "name": "Stanlow & Thornton",
        "crs_code": "SNT"
    },
    {
        "name": "Stansted Airport",
        "crs_code": "SSD"
    },
    {
        "name": "Stansted Mountfitchet",
        "crs_code": "SST"
    },
    {
        "name": "Staplehurst",
        "crs_code": "SPU"
    },
    {
        "name": "Stapleton Road",
        "crs_code": "SRD"
    },
    {
        "name": "Starbeck",
        "crs_code": "SBE"
    },
    {
        "name": "Starcross",
        "crs_code": "SCS"
    },
    {
        "name": "Staveley (Cumbria)",
        "crs_code": "SVL"
    },
    {
        "name": "Stechford",
        "crs_code": "SCF"
    },
    {
        "name": "Steeton & Silsden",
        "crs_code": "SON"
    },
    {
        "name": "Stepps",
        "crs_code": "SPS"
    },
    {
        "name": "Stevenage",
        "crs_code": "SVG"
    },
    {
        "name": "Stevenston",
        "crs_code": "STV"
    },
    {
        "name": "Stewartby",
        "crs_code": "SWR"
    },
    {
        "name": "Stewarton",
        "crs_code": "STT"
    },
    {
        "name": "Stirling",
        "crs_code": "STG"
    },
    {
        "name": "Stockport",
        "crs_code": "SPT"
    },
    {
        "name": "Stocksfield",
        "crs_code": "SKS"
    },
    {
        "name": "Stocksmoor",
        "crs_code": "SSM"
    },
    {
        "name": "Stockton",
        "crs_code": "STK"
    },
    {
        "name": "Stoke Mandeville",
        "crs_code": "SKM"
    },
    {
        "name": "Stoke Newington",
        "crs_code": "SKW"
    },
    {
        "name": "Stoke-on-Trent",
        "crs_code": "SOT"
    },
    {
        "name": "Stone (Staffs)",
        "crs_code": "SNE"
    },
    {
        "name": "Stone Crossing",
        "crs_code": "SCG"
    },
    {
        "name": "Stonebridge Park",
        "crs_code": "SBP"
    },
    {
        "name": "Stonegate",
        "crs_code": "SOG"
    },
    {
        "name": "Stonehaven",
        "crs_code": "STN"
    },
    {
        "name": "Stonehouse",
        "crs_code": "SHU"
    },
    {
        "name": "Stoneleigh",
        "crs_code": "SNL"
    },
    {
        "name": "Stourbridge Junction",
        "crs_code": "SBJ"
    },
    {
        "name": "Stourbridge Town",
        "crs_code": "SBT"
    },
    {
        "name": "Stow",
        "crs_code": "SOI"
    },
    {
        "name": "Stowmarket",
        "crs_code": "SMK"
    },
    {
        "name": "Stranraer",
        "crs_code": "STR"
    },
    {
        "name": "Stratford (London)",
        "crs_code": "SRA"
    },
    {
        "name": "Stratford International",
        "crs_code": "SFA"
    },
    {
        "name": "Stratford-upon-Avon",
        "crs_code": "SAV"
    },
    {
        "name": "Stratford-upon-Avon Parkway",
        "crs_code": "STY"
    },
    {
        "name": "Strathcarron",
        "crs_code": "STC"
    },
    {
        "name": "Strawberry Hill",
        "crs_code": "STW"
    },
    {
        "name": "Streatham (Greater London)",
        "crs_code": "STE"
    },
    {
        "name": "Streatham Common",
        "crs_code": "SRC"
    },
    {
        "name": "Streatham Hill",
        "crs_code": "SRH"
    },
    {
        "name": "Streethouse",
        "crs_code": "SHC"
    },
    {
        "name": "Strines",
        "crs_code": "SRN"
    },
    {
        "name": "Stromeferry",
        "crs_code": "STF"
    },
    {
        "name": "Strood (Kent)",
        "crs_code": "SOO"
    },
    {
        "name": "Stroud (Gloucs)",
        "crs_code": "STD"
    },
    {
        "name": "Sturry",
        "crs_code": "STU"
    },
    {
        "name": "Styal",
        "crs_code": "SYA"
    },
    {
        "name": "Sudbury & Harrow Road",
        "crs_code": "SUD"
    },
    {
        "name": "Sudbury (Suffolk)",
        "crs_code": "SUY"
    },
    {
        "name": "Sudbury Hill Harrow",
        "crs_code": "SDH"
    },
    {
        "name": "Sugar Loaf",
        "crs_code": "SUG"
    },
    {
        "name": "Summerston",
        "crs_code": "SUM"
    },
    {
        "name": "Sunbury",
        "crs_code": "SUU"
    },
    {
        "name": "Sunderland",
        "crs_code": "SUN"
    },
    {
        "name": "Sundridge Park",
        "crs_code": "SUP"
    },
    {
        "name": "Sunningdale",
        "crs_code": "SNG"
    },
    {
        "name": "Sunnymeads",
        "crs_code": "SNY"
    },
    {
        "name": "Surbiton",
        "crs_code": "SUR"
    },
    {
        "name": "Surrey Quays",
        "crs_code": "SQE"
    },
    {
        "name": "Sutton (Surrey)",
        "crs_code": "SUO"
    },
    {
        "name": "Sutton Coldfield",
        "crs_code": "SUT"
    },
    {
        "name": "Sutton Common",
        "crs_code": "SUC"
    },
    {
        "name": "Sutton Parkway",
        "crs_code": "SPK"
    },
    {
        "name": "Swale",
        "crs_code": "SWL"
    },
    {
        "name": "Swanley",
        "crs_code": "SAY"
    },
    {
        "name": "Swanscombe",
        "crs_code": "SWM"
    },
    {
        "name": "Swansea",
        "crs_code": "SWA"
    },
    {
        "name": "Swanwick",
        "crs_code": "SNW"
    },
    {
        "name": "Sway",
        "crs_code": "SWY"
    },
    {
        "name": "Swaythling",
        "crs_code": "SWG"
    },
    {
        "name": "Swinderby",
        "crs_code": "SWD"
    },
    {
        "name": "Swindon (Wilts)",
        "crs_code": "SWI"
    },
    {
        "name": "Swineshead",
        "crs_code": "SWE"
    },
    {
        "name": "Swinton (Manchester)",
        "crs_code": "SNN"
    },
    {
        "name": "Swinton (South Yorks)",
        "crs_code": "SWN"
    },
    {
        "name": "Sydenham (London)",
        "crs_code": "SYD"
    },
    {
        "name": "Sydenham Hill",
        "crs_code": "SYH"
    },
    {
        "name": "Syon Lane",
        "crs_code": "SYL"
    },
    {
        "name": "Syston",
        "crs_code": "SYS"
    },
    {
        "name": "Tackley",
        "crs_code": "TAC"
    },
    {
        "name": "Tadworth",
        "crs_code": "TAD"
    },
    {
        "name": "Taffs Well",
        "crs_code": "TAF"
    },
    {
        "name": "Tain",
        "crs_code": "TAI"
    },
    {
        "name": "Talsarnau",
        "crs_code": "TAL"
    },
    {
        "name": "Talybont",
        "crs_code": "TLB"
    },
    {
        "name": "Tal-y-Cafn",
        "crs_code": "TLC"
    },
    {
        "name": "Tame Bridge Parkway",
        "crs_code": "TAB"
    },
    {
        "name": "Tamworth",
        "crs_code": "TAM"
    },
    {
        "name": "Taplow",
        "crs_code": "TAP"
    },
    {
        "name": "Tattenham Corner",
        "crs_code": "TAT"
    },
    {
        "name": "Taunton",
        "crs_code": "TAU"
    },
    {
        "name": "Taynuilt",
        "crs_code": "TAY"
    },
    {
        "name": "Teddington",
        "crs_code": "TED"
    },
    {
        "name": "Tees-side Airport",
        "crs_code": "TEA"
    },
    {
        "name": "Teignmouth",
        "crs_code": "TGM"
    },
    {
        "name": "Telford Central",
        "crs_code": "TFC"
    },
    {
        "name": "Templecombe",
        "crs_code": "TMC"
    },
    {
        "name": "Tenby",
        "crs_code": "TEN"
    },
    {
        "name": "Teynham",
        "crs_code": "TEY"
    },
    {
        "name": "Thames Ditton",
        "crs_code": "THD"
    },
    {
        "name": "Thatcham",
        "crs_code": "THA"
    },
    {
        "name": "Thatto Heath",
        "crs_code": "THH"
    },
    {
        "name": "The Hawthorns",
        "crs_code": "THW"
    },
    {
        "name": "The Lakes (Warks)",
        "crs_code": "TLK"
    },
    {
        "name": "Theale",
        "crs_code": "THE"
    },
    {
        "name": "Theobalds Grove",
        "crs_code": "TEO"
    },
    {
        "name": "Thetford",
        "crs_code": "TTF"
    },
    {
        "name": "Thirsk",
        "crs_code": "THI"
    },
    {
        "name": "Thornaby",
        "crs_code": "TBY"
    },
    {
        "name": "Thorne North",
        "crs_code": "TNN"
    },
    {
        "name": "Thorne South",
        "crs_code": "TNS"
    },
    {
        "name": "Thornford",
        "crs_code": "THO"
    },
    {
        "name": "Thornliebank",
        "crs_code": "THB"
    },
    {
        "name": "Thornton Abbey",
        "crs_code": "TNA"
    },
    {
        "name": "Thornton Heath",
        "crs_code": "TTH"
    },
    {
        "name": "Thorntonhall",
        "crs_code": "THT"
    },
    {
        "name": "Thorpe Bay",
        "crs_code": "TPB"
    },
    {
        "name": "Thorpe Culvert",
        "crs_code": "TPC"
    },
    {
        "name": "Thorpe-le-Soken",
        "crs_code": "TLS"
    },
    {
        "name": "Three Bridges",
        "crs_code": "TBD"
    },
    {
        "name": "Three Oaks",
        "crs_code": "TOK"
    },
    {
        "name": "Thurgarton",
        "crs_code": "THU"
    },
    {
        "name": "Thurnscoe",
        "crs_code": "THC"
    },
    {
        "name": "Thurso",
        "crs_code": "THS"
    },
    {
        "name": "Thurston",
        "crs_code": "TRS"
    },
    {
        "name": "Tilbury Town",
        "crs_code": "TIL"
    },
    {
        "name": "Tile Hill",
        "crs_code": "THL"
    },
    {
        "name": "Tilehurst",
        "crs_code": "TLH"
    },
    {
        "name": "Tipton",
        "crs_code": "TIP"
    },
    {
        "name": "Tir-Phil",
        "crs_code": "TIR"
    },
    {
        "name": "Tisbury",
        "crs_code": "TIS"
    },
    {
        "name": "Tiverton Parkway",
        "crs_code": "TVP"
    },
    {
        "name": "Todmorden",
        "crs_code": "TOD"
    },
    {
        "name": "Tolworth",
        "crs_code": "TOL"
    },
    {
        "name": "Ton Pentre",
        "crs_code": "TPN"
    },
    {
        "name": "Tonbridge",
        "crs_code": "TON"
    },
    {
        "name": "Tondu",
        "crs_code": "TDU"
    },
    {
        "name": "Tonfanau",
        "crs_code": "TNF"
    },
    {
        "name": "Tonypandy",
        "crs_code": "TNP"
    },
    {
        "name": "Tooting",
        "crs_code": "TOO"
    },
    {
        "name": "Topsham",
        "crs_code": "TOP"
    },
    {
        "name": "Torquay",
        "crs_code": "TQY"
    },
    {
        "name": "Torre",
        "crs_code": "TRR"
    },
    {
        "name": "Totnes",
        "crs_code": "TOT"
    },
    {
        "name": "Tottenham Hale",
        "crs_code": "TOM"
    },
    {
        "name": "Totton",
        "crs_code": "TTN"
    },
    {
        "name": "Town Green",
        "crs_code": "TWN"
    },
    {
        "name": "Trafford Park",
        "crs_code": "TRA"
    },
    {
        "name": "Trefforest",
        "crs_code": "TRF"
    },
    {
        "name": "Trefforest Estate",
        "crs_code": "TRE"
    },
    {
        "name": "Trehafod",
        "crs_code": "TRH"
    },
    {
        "name": "Treherbert",
        "crs_code": "TRB"
    },
    {
        "name": "Treorchy",
        "crs_code": "TRY"
    },
    {
        "name": "Trimley",
        "crs_code": "TRM"
    },
    {
        "name": "Tring",
        "crs_code": "TRI"
    },
    {
        "name": "Troed-y-rhiw",
        "crs_code": "TRD"
    },
    {
        "name": "Troon",
        "crs_code": "TRN"
    },
    {
        "name": "Trowbridge",
        "crs_code": "TRO"
    },
    {
        "name": "Truro",
        "crs_code": "TRU"
    },
    {
        "name": "Tulloch",
        "crs_code": "TUL"
    },
    {
        "name": "Tulse Hill",
        "crs_code": "TUH"
    },
    {
        "name": "Tunbridge Wells",
        "crs_code": "TBW"
    },
    {
        "name": "Turkey Street",
        "crs_code": "TUR"
    },
    {
        "name": "Tutbury & Hatton",
        "crs_code": "TUT"
    },
    {
        "name": "Tweedbank",
        "crs_code": "TWB"
    },
    {
        "name": "Twickenham",
        "crs_code": "TWI"
    },
    {
        "name": "Twyford",
        "crs_code": "TWY"
    },
    {
        "name": "Ty Croes",
        "crs_code": "TYC"
    },
    {
        "name": "Ty Glas",
        "crs_code": "TGS"
    },
    {
        "name": "Tygwyn",
        "crs_code": "TYG"
    },
    {
        "name": "Tyndrum Lower",
        "crs_code": "TYL"
    },
    {
        "name": "Tyseley",
        "crs_code": "TYS"
    },
    {
        "name": "Tywyn",
        "crs_code": "TYW"
    },
    {
        "name": "Uckfield",
        "crs_code": "UCK"
    },
    {
        "name": "Uddingston",
        "crs_code": "UDD"
    },
    {
        "name": "Ulceby",
        "crs_code": "ULC"
    },
    {
        "name": "Ulleskelf",
        "crs_code": "ULL"
    },
    {
        "name": "Ulverston",
        "crs_code": "ULV"
    },
    {
        "name": "Umberleigh",
        "crs_code": "UMB"
    },
    {
        "name": "University (Birmingham)",
        "crs_code": "UNI"
    },
    {
        "name": "Uphall",
        "crs_code": "UHA"
    },
    {
        "name": "Upholland",
        "crs_code": "UPL"
    },
    {
        "name": "Upminster",
        "crs_code": "UPM"
    },
    {
        "name": "Upper Halliford",
        "crs_code": "UPH"
    },
    {
        "name": "Upper Holloway",
        "crs_code": "UHL"
    },
    {
        "name": "Upper Tyndrum",
        "crs_code": "UTY"
    },
    {
        "name": "Upper Warlingham",
        "crs_code": "UWL"
    },
    {
        "name": "Upton (Merseyside)",
        "crs_code": "UPT"
    },
    {
        "name": "Upwey",
        "crs_code": "UPW"
    },
    {
        "name": "Urmston",
        "crs_code": "URM"
    },
    {
        "name": "Uttoxeter",
        "crs_code": "UTT"
    },
    {
        "name": "Valley",
        "crs_code": "VAL"
    },
    {
        "name": "Vauxhall",
        "crs_code": "VXH"
    },
    {
        "name": "Virginia Water",
        "crs_code": "VIR"
    },
    {
        "name": "Waddon",
        "crs_code": "WDO"
    },
    {
        "name": "Wadhurst",
        "crs_code": "WAD"
    },
    {
        "name": "Wainfleet",
        "crs_code": "WFL"
    },
    {
        "name": "Wakefield Kirkgate",
        "crs_code": "WKK"
    },
    {
        "name": "Wakefield Westgate",
        "crs_code": "WKF"
    },
    {
        "name": "Walkden",
        "crs_code": "WKD"
    },
    {
        "name": "Wallasey Grove Road",
        "crs_code": "WLG"
    },
    {
        "name": "Wallasey Village",
        "crs_code": "WLV"
    },
    {
        "name": "Wallington",
        "crs_code": "WLT"
    },
    {
        "name": "Wallyford",
        "crs_code": "WAF"
    },
    {
        "name": "Walmer",
        "crs_code": "WAM"
    },
    {
        "name": "Walsall",
        "crs_code": "WSL"
    },
    {
        "name": "Walsden",
        "crs_code": "WDN"
    },
    {
        "name": "Waltham Cross",
        "crs_code": "WLC"
    },
    {
        "name": "Walthamstow Central",
        "crs_code": "WHC"
    },
    {
        "name": "Walthamstow Queen's Road",
        "crs_code": "WMW"
    },
    {
        "name": "Walton (Merseyside)",
        "crs_code": "WAO"
    },
    {
        "name": "Walton-on-Thames",
        "crs_code": "WAL"
    },
    {
        "name": "Walton-on-the-Naze",
        "crs_code": "WON"
    },
    {
        "name": "Wanborough",
        "crs_code": "WAN"
    },
    {
        "name": "Wandsworth Common",
        "crs_code": "WSW"
    },
    {
        "name": "Wandsworth Road",
        "crs_code": "WWR"
    },
    {
        "name": "Wandsworth Town",
        "crs_code": "WNT"
    },
    {
        "name": "Wanstead Park",
        "crs_code": "WNP"
    },
    {
        "name": "Wapping",
        "crs_code": "WPE"
    },
    {
        "name": "Warblington",
        "crs_code": "WBL"
    },
    {
        "name": "Ware (Herts)",
        "crs_code": "WAR"
    },
    {
        "name": "Wareham (Dorset)",
        "crs_code": "WRM"
    },
    {
        "name": "Wargrave",
        "crs_code": "WGV"
    },
    {
        "name": "Warminster",
        "crs_code": "WMN"
    },
    {
        "name": "Warnham",
        "crs_code": "WNH"
    },
    {
        "name": "Warrington Bank Quay",
        "crs_code": "WBQ"
    },
    {
        "name": "Warrington Central",
        "crs_code": "WAC"
    },
    {
        "name": "Warrington West",
        "crs_code": "WAW"
    },
    {
        "name": "Warwick",
        "crs_code": "WRW"
    },
    {
        "name": "Warwick Parkway",
        "crs_code": "WRP"
    },
    {
        "name": "Water Orton",
        "crs_code": "WTO"
    },
    {
        "name": "Waterbeach",
        "crs_code": "WBC"
    },
    {
        "name": "Wateringbury",
        "crs_code": "WTR"
    },
    {
        "name": "Waterloo (Merseyside)",
        "crs_code": "WLO"
    },
    {
        "name": "Watford High Street",
        "crs_code": "WFH"
    },
    {
        "name": "Watford Junction",
        "crs_code": "WFJ"
    },
    {
        "name": "Watford North",
        "crs_code": "WFN"
    },
    {
        "name": "Watlington",
        "crs_code": "WTG"
    },
    {
        "name": "Watton-at-Stone",
        "crs_code": "WAS"
    },
    {
        "name": "Waun-Gron Park",
        "crs_code": "WNG"
    },
    {
        "name": "Wavertree Technology Park",
        "crs_code": "WAV"
    },
    {
        "name": "Wedgwood",
        "crs_code": "WED"
    },
    {
        "name": "Weeley",
        "crs_code": "WEE"
    },
    {
        "name": "Weeton",
        "crs_code": "WET"
    },
    {
        "name": "Welham Green",
        "crs_code": "WMG"
    },
    {
        "name": "Welling",
        "crs_code": "WLI"
    },
    {
        "name": "Wellingborough",
        "crs_code": "WEL"
    },
    {
        "name": "Wellington (Shropshire)",
        "crs_code": "WLN"
    },
    {
        "name": "Welshpool",
        "crs_code": "WLP"
    },
    {
        "name": "Welwyn Garden City",
        "crs_code": "WGC"
    },
    {
        "name": "Welwyn North",
        "crs_code": "WLW"
    },
    {
        "name": "Wem",
        "crs_code": "WEM"
    },
    {
        "name": "Wembley Central",
        "crs_code": "WMB"
    },
    {
        "name": "Wembley Stadium",
        "crs_code": "WCX"
    },
    {
        "name": "Wemyss Bay",
        "crs_code": "WMS"
    },
    {
        "name": "Wendover",
        "crs_code": "WND"
    },
    {
        "name": "Wennington",
        "crs_code": "WNN"
    },
    {
        "name": "West Allerton",
        "crs_code": "WSA"
    },
    {
        "name": "West Brompton",
        "crs_code": "WBP"
    },
    {
        "name": "West Byfleet",
        "crs_code": "WBY"
    },
    {
        "name": "West Calder",
        "crs_code": "WCL"
    },
    {
        "name": "West Croydon",
        "crs_code": "WCY"
    },
    {
        "name": "West Drayton",
        "crs_code": "WDT"
    },
    {
        "name": "West Dulwich",
        "crs_code": "WDU"
    },
    {
        "name": "West Ealing",
        "crs_code": "WEA"
    },
    {
        "name": "West Ham",
        "crs_code": "WEH"
    },
    {
        "name": "West Hampstead",
        "crs_code": "WHD"
    },
    {
        "name": "West Hampstead Thameslink",
        "crs_code": "WHP"
    },
    {
        "name": "West Horndon",
        "crs_code": "WHR"
    },
    {
        "name": "West Kilbride",
        "crs_code": "WKB"
    },
    {
        "name": "West Kirby",
        "crs_code": "WKI"
    },
    {
        "name": "West Malling",
        "crs_code": "WMA"
    },
    {
        "name": "West Norwood",
        "crs_code": "WNW"
    },
    {
        "name": "West Ruislip",
        "crs_code": "WRU"
    },
    {
        "name": "West Runton",
        "crs_code": "WRN"
    },
    {
        "name": "West St Leonards",
        "crs_code": "WLD"
    },
    {
        "name": "West Sutton",
        "crs_code": "WSU"
    },
    {
        "name": "West Wickham",
        "crs_code": "WWI"
    },
    {
        "name": "West Worthing",
        "crs_code": "WWO"
    },
    {
        "name": "Westbury (Wilts)",
        "crs_code": "WSB"
    },
    {
        "name": "Westcliff",
        "crs_code": "WCF"
    },
    {
        "name": "Westcombe Park",
        "crs_code": "WCB"
    },
    {
        "name": "Westenhanger",
        "crs_code": "WHA"
    },
    {
        "name": "Wester Hailes",
        "crs_code": "WTA"
    },
    {
        "name": "Westerfield",
        "crs_code": "WFI"
    },
    {
        "name": "Westerton",
        "crs_code": "WES"
    },
    {
        "name": "Westgate-on-Sea",
        "crs_code": "WGA"
    },
    {
        "name": "Westhoughton",
        "crs_code": "WHG"
    },
    {
        "name": "Weston Milton",
        "crs_code": "WNM"
    },
    {
        "name": "Weston-super-Mare",
        "crs_code": "WSM"
    },
    {
        "name": "Wetheral",
        "crs_code": "WRL"
    },
    {
        "name": "Weybridge",
        "crs_code": "WYB"
    },
    {
        "name": "Weymouth",
        "crs_code": "WEY"
    },
    {
        "name": "Whaley Bridge",
        "crs_code": "WBR"
    },
    {
        "name": "Whalley (Lancs)",
        "crs_code": "WHE"
    },
    {
        "name": "Whatstandwell",
        "crs_code": "WTS"
    },
    {
        "name": "Whifflet",
        "crs_code": "WFF"
    },
    {
        "name": "Whimple",
        "crs_code": "WHM"
    },
    {
        "name": "Whinhill",
        "crs_code": "WNL"
    },
    {
        "name": "Whiston",
        "crs_code": "WHN"
    },
    {
        "name": "Whitby",
        "crs_code": "WTB"
    },
    {
        "name": "Whitchurch (Cardiff)",
        "crs_code": "WHT"
    },
    {
        "name": "Whitchurch (Hants)",
        "crs_code": "WCH"
    },
    {
        "name": "Whitchurch (Shropshire)",
        "crs_code": "WTC"
    },
    {
        "name": "White Hart Lane",
        "crs_code": "WHL"
    },
    {
        "name": "White Notley",
        "crs_code": "WNY"
    },
    {
        "name": "Whitechapel",
        "crs_code": "ZLW"
    },
    {
        "name": "Whitecraigs",
        "crs_code": "WCR"
    },
    {
        "name": "Whitehaven",
        "crs_code": "WTH"
    },
    {
        "name": "Whitland",
        "crs_code": "WTL"
    },
    {
        "name": "Whitley Bridge",
        "crs_code": "WBD"
    },
    {
        "name": "Whitlocks End",
        "crs_code": "WTE"
    },
    {
        "name": "Whitstable",
        "crs_code": "WHI"
    },
    {
        "name": "Whittlesea",
        "crs_code": "WLE"
    },
    {
        "name": "Whittlesford Parkway",
        "crs_code": "WLF"
    },
    {
        "name": "Whitton (London)",
        "crs_code": "WTN"
    },
    {
        "name": "Whitwell (Derbyshire)",
        "crs_code": "WWL"
    },
    {
        "name": "Whyteleafe",
        "crs_code": "WHY"
    },
    {
        "name": "Whyteleafe South",
        "crs_code": "WHS"
    },
    {
        "name": "Wick",
        "crs_code": "WCK"
    },
    {
        "name": "Wickford",
        "crs_code": "WIC"
    },
    {
        "name": "Wickham Market",
        "crs_code": "WCM"
    },
    {
        "name": "Widdrington",
        "crs_code": "WDD"
    },
    {
        "name": "Widnes",
        "crs_code": "WID"
    },
    {
        "name": "Widney Manor",
        "crs_code": "WMR"
    },
    {
        "name": "Wigan North Western",
        "crs_code": "WGN"
    },
    {
        "name": "Wigan Wallgate",
        "crs_code": "WGW"
    },
    {
        "name": "Wigton",
        "crs_code": "WGT"
    },
    {
        "name": "Wildmill",
        "crs_code": "WMI"
    },
    {
        "name": "Willesden Junction",
        "crs_code": "WIJ"
    },
    {
        "name": "Williamwood",
        "crs_code": "WLM"
    },
    {
        "name": "Willington",
        "crs_code": "WIL"
    },
    {
        "name": "Wilmcote",
        "crs_code": "WMC"
    },
    {
        "name": "Wilmslow",
        "crs_code": "WML"
    },
    {
        "name": "Wilnecote (Staffs)",
        "crs_code": "WNE"
    },
    {
        "name": "Wimbledon",
        "crs_code": "WIM"
    },
    {
        "name": "Wimbledon Chase",
        "crs_code": "WBO"
    },
    {
        "name": "Winchelsea",
        "crs_code": "WSE"
    },
    {
        "name": "Winchester",
        "crs_code": "WIN"
    },
    {
        "name": "Winchfield",
        "crs_code": "WNF"
    },
    {
        "name": "Winchmore Hill",
        "crs_code": "WIH"
    },
    {
        "name": "Windermere",
        "crs_code": "WDM"
    },
    {
        "name": "Windsor & Eton Central",
        "crs_code": "WNC"
    },
    {
        "name": "Windsor & Eton Riverside",
        "crs_code": "WNR"
    },
    {
        "name": "Winnersh",
        "crs_code": "WNS"
    },
    {
        "name": "Winnersh Triangle",
        "crs_code": "WTI"
    },
    {
        "name": "Winsford",
        "crs_code": "WSF"
    },
    {
        "name": "Wishaw",
        "crs_code": "WSH"
    },
    {
        "name": "Witham",
        "crs_code": "WTM"
    },
    {
        "name": "Witley",
        "crs_code": "WTY"
    },
    {
        "name": "Witton (West Midlands)",
        "crs_code": "WTT"
    },
    {
        "name": "Wivelsfield",
        "crs_code": "WVF"
    },
    {
        "name": "Wivenhoe",
        "crs_code": "WIV"
    },
    {
        "name": "Woburn Sands",
        "crs_code": "WOB"
    },
    {
        "name": "Woking",
        "crs_code": "WOK"
    },
    {
        "name": "Wokingham",
        "crs_code": "WKM"
    },
    {
        "name": "Woldingham",
        "crs_code": "WOH"
    },
    {
        "name": "Wolverhampton",
        "crs_code": "WVH"
    },
    {
        "name": "Wolverton",
        "crs_code": "WOL"
    },
    {
        "name": "Wombwell",
        "crs_code": "WOM"
    },
    {
        "name": "Wood End",
        "crs_code": "WDE"
    },
    {
        "name": "Wood Street",
        "crs_code": "WST"
    },
    {
        "name": "Woodbridge",
        "crs_code": "WDB"
    },
    {
        "name": "Woodgrange Park",
        "crs_code": "WGR"
    },
    {
        "name": "Woodhall",
        "crs_code": "WDL"
    },
    {
        "name": "Woodhouse",
        "crs_code": "WDH"
    },
    {
        "name": "Woodlesford",
        "crs_code": "WDS"
    },
    {
        "name": "Woodley",
        "crs_code": "WLY"
    },
    {
        "name": "Woodmansterne",
        "crs_code": "WME"
    },
    {
        "name": "Woodsmoor",
        "crs_code": "WSR"
    },
    {
        "name": "Wool",
        "crs_code": "WOO"
    },
    {
        "name": "Woolston",
        "crs_code": "WLS"
    },
    {
        "name": "Woolwich Arsenal",
        "crs_code": "WWA"
    },
    {
        "name": "Woolwich Dockyard",
        "crs_code": "WWD"
    },
    {
        "name": "Wootton Wawen",
        "crs_code": "WWW"
    },
    {
        "name": "Worcester Foregate Street",
        "crs_code": "WOF"
    },
    {
        "name": "Worcester Park",
        "crs_code": "WCP"
    },
    {
        "name": "Worcester Shrub Hill",
        "crs_code": "WOS"
    },
    {
        "name": "Worcestershire Parkway",
        "crs_code": "WOP"
    },
    {
        "name": "Workington",
        "crs_code": "WKG"
    },
    {
        "name": "Worksop",
        "crs_code": "WRK"
    },
    {
        "name": "Worle",
        "crs_code": "WOR"
    },
    {
        "name": "Worplesdon",
        "crs_code": "WPL"
    },
    {
        "name": "Worstead",
        "crs_code": "WRT"
    },
    {
        "name": "Worthing",
        "crs_code": "WRH"
    },
    {
        "name": "Wrabness",
        "crs_code": "WRB"
    },
    {
        "name": "Wraysbury",
        "crs_code": "WRY"
    },
    {
        "name": "Wrenbury",
        "crs_code": "WRE"
    },
    {
        "name": "Wressle",
        "crs_code": "WRS"
    },
    {
        "name": "Wrexham Central",
        "crs_code": "WXC"
    },
    {
        "name": "Wrexham General",
        "crs_code": "WRX"
    },
    {
        "name": "Wye",
        "crs_code": "WYE"
    },
    {
        "name": "Wylam",
        "crs_code": "WYM"
    },
    {
        "name": "Wylde Green",
        "crs_code": "WYL"
    },
    {
        "name": "Wymondham",
        "crs_code": "WMD"
    },
    {
        "name": "Wythall",
        "crs_code": "WYT"
    },
    {
        "name": "Yalding",
        "crs_code": "YAL"
    },
    {
        "name": "Yardley Wood",
        "crs_code": "YRD"
    },
    {
        "name": "Yarm",
        "crs_code": "YRM"
    },
    {
        "name": "Yate",
        "crs_code": "YAE"
    },
    {
        "name": "Yatton",
        "crs_code": "YAT"
    },
    {
        "name": "Yeoford",
        "crs_code": "YEO"
    },
    {
        "name": "Yeovil Junction",
        "crs_code": "YVJ"
    },
    {
        "name": "Yeovil Pen Mill",
        "crs_code": "YVP"
    },
    {
        "name": "Yetminster",
        "crs_code": "YET"
    },
    {
        "name": "Ynyswen",
        "crs_code": "YNW"
    },
    {
        "name": "Yoker",
        "crs_code": "YOK"
    },
    {
        "name": "York",
        "crs_code": "YRK"
    },
    {
        "name": "Yorton",
        "crs_code": "YRT"
    },
    {
        "name": "Ystrad Mynach",
        "crs_code": "YSM"
    },
    {
        "name": "Ystrad Rhondda",
        "crs_code": "YSR"
    }
];
