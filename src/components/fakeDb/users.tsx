export type User = {
    id: number,
    organization: string;
    username: string;
    email: string;
    phoneNumber: string;
    dateJoined: string;
    status: 'Active' | 'Pending' | 'Inactive' | 'Blacklisted';
    personalInformation: {
      fullname: string;
      bvn: number;
      gender: 'Male' | 'Female' | 'Other';
      marital_status: 'Single' | 'Married' | 'Divorced' | 'Widowed';
      children: number;
      residence_type: 'Condo' | 'Apartment' | 'Condo' | 'Towncondo';
    },
    bankDetails:{
      tier: number;
      amount: number;
      bank_name: string;
    },
    educationAndEmployment: {
      level_of_education: string,
      employment_status: string,
      sector_of_employment: string,
      duration_of_employment: string,
      monthly_income: number,
      loan_repayment: number,
      office_email: string;
    },
    social: {
      facebook: string;
      instagram: string;
      twitter: string;
    },
    guarantor:{
      full_name: string;
      phone: number;
      email: string;
      relationship: string;
    }
  };

let users: User[] = [
  {
    id: 1,
    organization: "Parleynet",
    username: "Morin458",
    email: "morincotton@parleynet.com",
    phoneNumber: "(956) 416-2770",
    dateJoined: "2019-12-19",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 361460968,
      bank_name: "Wema Bank"
    },
    personalInformation: {
      fullname: "Allison Pickett",
      bvn: 88702893658,
      gender: "Female",
      marital_status: "Married",
      children: 5,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Retired",
      sector_of_employment: "Healthcare",
      duration_of_employment: "33 years",
      monthly_income: 377042,
      loan_repayment: 4962,
      office_email: "brewer.velasquez@bolax.com"
    },
    social: {
      facebook: "holland.noble",
      instagram: "mindy_george",
      twitter: "abigail12"
    },
    guarantor: {
      full_name: "Rosanne Cooper",
      phone: 2348980862376,
      email: "rosannecooper@bolax.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 2,
    organization: "Digiprint",
    username: "Buckley727",
    email: "buckleycooper@digiprint.com",
    phoneNumber: "(917) 412-3012",
    dateJoined: "2021-04-13",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 37208920,
      bank_name: "Wema Bank"
    },
    personalInformation: {
      fullname: "Camacho Caldwell",
      bvn: 84142174316,
      gender: "Female",
      marital_status: "Widowed",
      children: 5,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Employed",
      sector_of_employment: "Education",
      duration_of_employment: "20 years",
      monthly_income: 288790,
      loan_repayment: 3165,
      office_email: "frieda.sutton@geofarm.com"
    },
    social: {
      facebook: "dotson.becker",
      instagram: "dunn_hoover",
      twitter: "margie23"
    },
    guarantor: {
      full_name: "Caitlin Carroll",
      phone: 2349005807432,
      email: "caitlincarroll@geofarm.com",
      relationship: "Partner"
    }
  },
  {
    id: 3,
    organization: "Filodyne",
    username: "Debra953",
    email: "debracarroll@filodyne.com",
    phoneNumber: "(811) 519-2186",
    dateJoined: "2017-11-23",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 459002956,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Elise Cameron",
      bvn: 14719970991,
      gender: "Female",
      marital_status: "Married",
      children: 5,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Unemployed",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "12 years",
      monthly_income: 246576,
      loan_repayment: 4510,
      office_email: "annette.love@handshake.com"
    },
    social: {
      facebook: "rochelle.ewing",
      instagram: "collins_bullock",
      twitter: "shaw31"
    },
    guarantor: {
      full_name: "Kelly Landry",
      phone: 2347390226653,
      email: "kellylandry@handshake.com",
      relationship: "Partner"
    }
  },
  {
    id: 4,
    organization: "Terrasys",
    username: "Mckinney139",
    email: "mckinneylandry@terrasys.com",
    phoneNumber: "(852) 537-2091",
    dateJoined: "2022-10-08",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 147158185,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Dana Key",
      bvn: 82487728390,
      gender: "Male",
      marital_status: "Widowed",
      children: 5,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Employed",
      sector_of_employment: "Education",
      duration_of_employment: "39 years",
      monthly_income: 308401,
      loan_repayment: 3951,
      office_email: "leanna.sweet@amtap.com"
    },
    social: {
      facebook: "maude.randall",
      instagram: "bette_decker",
      twitter: "hanson77"
    },
    guarantor: {
      full_name: "Tanya Sexton",
      phone: 2348408731514,
      email: "tanyasexton@amtap.com",
      relationship: "Family"
    }
  },
  {
    id: 5,
    organization: "Equitox",
    username: "Clay868",
    email: "claysexton@equitox.com",
    phoneNumber: "(875) 597-2753",
    dateJoined: "2024-06-07",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 414628900,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Vonda Richards",
      bvn: 39399948093,
      gender: "Male",
      marital_status: "Widowed",
      children: 1,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Student",
      sector_of_employment: "Healthcare",
      duration_of_employment: "7 years",
      monthly_income: 381772,
      loan_repayment: 3306,
      office_email: "justine.ferrell@typhonica.com"
    },
    social: {
      facebook: "richards.simon",
      instagram: "knox_haynes",
      twitter: "graham33"
    },
    guarantor: {
      full_name: "Branch Reynolds",
      phone: 2347728260477,
      email: "branchreynolds@typhonica.com",
      relationship: "Partner"
    }
  },
  {
    id: 6,
    organization: "Cormoran",
    username: "Benson632",
    email: "bensonreynolds@cormoran.com",
    phoneNumber: "(827) 480-2297",
    dateJoined: "2018-10-13",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 91996361,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Carly Stanley",
      bvn: 64884470479,
      gender: "Female",
      marital_status: "Widowed",
      children: 2,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Self-employed",
      sector_of_employment: "Agriculture",
      duration_of_employment: "12 years",
      monthly_income: 328591,
      loan_repayment: 2102,
      office_email: "gaines.kirkland@zanity.com"
    },
    social: {
      facebook: "conner.leon",
      instagram: "conrad_kennedy",
      twitter: "mcintyre22"
    },
    guarantor: {
      full_name: "Sandoval Gross",
      phone: 2347869777081,
      email: "sandovalgross@zanity.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 7,
    organization: "Cytrak",
    username: "Tracy225",
    email: "tracygross@cytrak.com",
    phoneNumber: "(991) 499-3098",
    dateJoined: "2022-01-01",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 284595568,
      bank_name: "First Bank"
    },
    personalInformation: {
      fullname: "Ramsey Stone",
      bvn: 89428494271,
      gender: "Female",
      marital_status: "Widowed",
      children: 4,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Unemployed",
      sector_of_employment: "Healthcare",
      duration_of_employment: "39 years",
      monthly_income: 470958,
      loan_repayment: 3230,
      office_email: "gould.bruce@comtours.com"
    },
    social: {
      facebook: "rowena.best",
      instagram: "oliver_dickerson",
      twitter: "ayers15"
    },
    guarantor: {
      full_name: "Lou Workman",
      phone: 2348846276797,
      email: "louworkman@comtours.com",
      relationship: "Colleague"
    }
  },
  {
    id: 8,
    organization: "Uncorp",
    username: "Lidia414",
    email: "lidiaworkman@uncorp.com",
    phoneNumber: "(815) 568-3950",
    dateJoined: "2015-07-16",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 386381602,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Porter Benton",
      bvn: 10663097787,
      gender: "Male",
      marital_status: "Single",
      children: 4,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Student",
      sector_of_employment: "Construction",
      duration_of_employment: "40 years",
      monthly_income: 290559,
      loan_repayment: 2291,
      office_email: "tamra.stokes@hometown.com"
    },
    social: {
      facebook: "robinson.adkins",
      instagram: "priscilla_smith",
      twitter: "lowe86"
    },
    guarantor: {
      full_name: "Whitfield Berg",
      phone: 2348594626243,
      email: "whitfieldberg@hometown.com",
      relationship: "Family"
    }
  },
  {
    id: 9,
    organization: "Uni",
    username: "Bertie667",
    email: "bertieberg@uni.com",
    phoneNumber: "(811) 512-3377",
    dateJoined: "2017-05-08",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 368290123,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Schneider Webb",
      bvn: 47607079908,
      gender: "Female",
      marital_status: "Married",
      children: 0,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Unemployed",
      sector_of_employment: "Education",
      duration_of_employment: "21 years",
      monthly_income: 478809,
      loan_repayment: 4664,
      office_email: "ward.mcmillan@supremia.com"
    },
    social: {
      facebook: "oneill.hewitt",
      instagram: "jarvis_todd",
      twitter: "lorie83"
    },
    guarantor: {
      full_name: "Desiree Yates",
      phone: 2348409224703,
      email: "desireeyates@supremia.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 10,
    organization: "Bitrex",
    username: "Tanisha230",
    email: "tanishayates@bitrex.com",
    phoneNumber: "(876) 410-2228",
    dateJoined: "2014-01-10",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 485918487,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Wood Newton",
      bvn: 95932184220,
      gender: "Male",
      marital_status: "Single",
      children: 3,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Retired",
      sector_of_employment: "Retail",
      duration_of_employment: "15 years",
      monthly_income: 355465,
      loan_repayment: 3770,
      office_email: "jeanine.hall@poshome.com"
    },
    social: {
      facebook: "phyllis.weaver",
      instagram: "gilmore_garner",
      twitter: "rosa99"
    },
    guarantor: {
      full_name: "Janice Kelley",
      phone: 2347545061842,
      email: "janicekelley@poshome.com",
      relationship: "Partner"
    }
  },
  {
    id: 11,
    organization: "Aquazure",
    username: "Stefanie216",
    email: "stefaniekelley@aquazure.com",
    phoneNumber: "(956) 492-2011",
    dateJoined: "2018-01-31",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 188242050,
      bank_name: "Wema Bank"
    },
    personalInformation: {
      fullname: "Pennington Mcfadden",
      bvn: 39691596285,
      gender: "Female",
      marital_status: "Divorced",
      children: 1,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Student",
      sector_of_employment: "Healthcare",
      duration_of_employment: "25 years",
      monthly_income: 61426,
      loan_repayment: 3417,
      office_email: "amparo.mills@overfork.com"
    },
    social: {
      facebook: "jenny.franco",
      instagram: "pena_williams",
      twitter: "sonia60"
    },
    guarantor: {
      full_name: "Rivas Ellis",
      phone: 2348926560681,
      email: "rivasellis@overfork.com",
      relationship: "Partner"
    }
  },
  {
    id: 12,
    organization: "Quilk",
    username: "Donna978",
    email: "donnaellis@quilk.com",
    phoneNumber: "(865) 545-2314",
    dateJoined: "2014-11-08",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 227667762,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Serrano Riddle",
      bvn: 47187302819,
      gender: "Female",
      marital_status: "Married",
      children: 4,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Self-employed",
      sector_of_employment: "Government",
      duration_of_employment: "20 years",
      monthly_income: 350374,
      loan_repayment: 4745,
      office_email: "cannon.brady@inventure.com"
    },
    social: {
      facebook: "perry.wyatt",
      instagram: "bonnie_carson",
      twitter: "burt96"
    },
    guarantor: {
      full_name: "Gonzales Jenkins",
      phone: 2348265881509,
      email: "gonzalesjenkins@inventure.com",
      relationship: "Friend"
    }
  },
  {
    id: 13,
    organization: "Corporana",
    username: "Noel806",
    email: "noeljenkins@corporana.com",
    phoneNumber: "(851) 409-2642",
    dateJoined: "2021-01-02",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 860974,
      bank_name: "First Bank"
    },
    personalInformation: {
      fullname: "Green Taylor",
      bvn: 92792788996,
      gender: "Male",
      marital_status: "Married",
      children: 1,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Unemployed",
      sector_of_employment: "Government",
      duration_of_employment: "27 years",
      monthly_income: 125413,
      loan_repayment: 4161,
      office_email: "langley.burnett@enthaze.com"
    },
    social: {
      facebook: "booker.knowles",
      instagram: "erica_oconnor",
      twitter: "stacy60"
    },
    guarantor: {
      full_name: "Rosie Hardin",
      phone: 2348009315816,
      email: "rosiehardin@enthaze.com",
      relationship: "Colleague"
    }
  },
  {
    id: 14,
    organization: "Cablam",
    username: "Josephine247",
    email: "josephinehardin@cablam.com",
    phoneNumber: "(952) 589-2488",
    dateJoined: "2014-05-13",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 379146576,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Little Santana",
      bvn: 32288739133,
      gender: "Female",
      marital_status: "Divorced",
      children: 3,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Self-employed",
      sector_of_employment: "Education",
      duration_of_employment: "10 years",
      monthly_income: 358492,
      loan_repayment: 2000,
      office_email: "davidson.forbes@ecosys.com"
    },
    social: {
      facebook: "downs.levine",
      instagram: "saunders_callahan",
      twitter: "regina68"
    },
    guarantor: {
      full_name: "Bonner Hartman",
      phone: 2348405730891,
      email: "bonnerhartman@ecosys.com",
      relationship: "Family"
    }
  },
  {
    id: 15,
    organization: "Scentric",
    username: "Doyle853",
    email: "doylehartman@scentric.com",
    phoneNumber: "(990) 440-2258",
    dateJoined: "2022-01-23",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 188431974,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Marion Lee",
      bvn: 69242337168,
      gender: "Female",
      marital_status: "Single",
      children: 2,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Unemployed",
      sector_of_employment: "Retail",
      duration_of_employment: "12 years",
      monthly_income: 143121,
      loan_repayment: 2221,
      office_email: "wise.powers@uneeq.com"
    },
    social: {
      facebook: "fran.patel",
      instagram: "bartlett_nichols",
      twitter: "rosanna5"
    },
    guarantor: {
      full_name: "Angelica Osborne",
      phone: 2348406708703,
      email: "angelicaosborne@uneeq.com",
      relationship: "Colleague"
    }
  },
  {
    id: 16,
    organization: "Zidant",
    username: "Black244",
    email: "blackosborne@zidant.com",
    phoneNumber: "(991) 506-3944",
    dateJoined: "2022-03-06",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 334727491,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Blanca Wade",
      bvn: 18099624206,
      gender: "Female",
      marital_status: "Single",
      children: 5,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Self-employed",
      sector_of_employment: "Technology",
      duration_of_employment: "28 years",
      monthly_income: 111432,
      loan_repayment: 3959,
      office_email: "alejandra.farmer@geekular.com"
    },
    social: {
      facebook: "kristina.price",
      instagram: "samantha_clark",
      twitter: "kirk33"
    },
    guarantor: {
      full_name: "Debora Colon",
      phone: 2347075694433,
      email: "deboracolon@geekular.com",
      relationship: "Colleague"
    }
  },
  {
    id: 17,
    organization: "Bovis",
    username: "Carey423",
    email: "careycolon@bovis.com",
    phoneNumber: "(806) 452-2378",
    dateJoined: "2019-04-29",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 441147439,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "West Klein",
      bvn: 57362081769,
      gender: "Male",
      marital_status: "Widowed",
      children: 1,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Self-employed",
      sector_of_employment: "Finance",
      duration_of_employment: "5 years",
      monthly_income: 321437,
      loan_repayment: 3470,
      office_email: "vang.kline@rockyard.com"
    },
    social: {
      facebook: "willis.greene",
      instagram: "finley_justice",
      twitter: "jessie14"
    },
    guarantor: {
      full_name: "Trisha Chen",
      phone: 2347372797866,
      email: "trishachen@rockyard.com",
      relationship: "Colleague"
    }
  },
  {
    id: 18,
    organization: "Zentix",
    username: "Carrillo692",
    email: "carrillochen@zentix.com",
    phoneNumber: "(900) 407-3045",
    dateJoined: "2021-05-28",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 31720854,
      bank_name: "GTBank"
    },
    personalInformation: {
      fullname: "Lesa Langley",
      bvn: 25988251497,
      gender: "Male",
      marital_status: "Widowed",
      children: 0,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Self-employed",
      sector_of_employment: "Agriculture",
      duration_of_employment: "17 years",
      monthly_income: 107216,
      loan_repayment: 4931,
      office_email: "bernice.stevenson@plexia.com"
    },
    social: {
      facebook: "glenna.bowen",
      instagram: "rose_marshall",
      twitter: "hilda45"
    },
    guarantor: {
      full_name: "Liliana Roach",
      phone: 2347959253180,
      email: "lilianaroach@plexia.com",
      relationship: "Colleague"
    }
  },
  {
    id: 19,
    organization: "Softmicro",
    username: "Patricia633",
    email: "patriciaroach@softmicro.com",
    phoneNumber: "(955) 437-3326",
    dateJoined: "2016-11-05",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 114544125,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Mildred Fowler",
      bvn: 88773734430,
      gender: "Female",
      marital_status: "Single",
      children: 2,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Self-employed",
      sector_of_employment: "Retail",
      duration_of_employment: "16 years",
      monthly_income: 401517,
      loan_repayment: 3123,
      office_email: "annie.wong@corepan.com"
    },
    social: {
      facebook: "talley.leonard",
      instagram: "roberts_davidson",
      twitter: "jill37"
    },
    guarantor: {
      full_name: "Elnora Gill",
      phone: 2347192080320,
      email: "elnoragill@corepan.com",
      relationship: "Partner"
    }
  },
  {
    id: 20,
    organization: "Enjola",
    username: "Andrea976",
    email: "andreagill@enjola.com",
    phoneNumber: "(977) 526-3834",
    dateJoined: "2020-01-22",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 444267023,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Clemons Medina",
      bvn: 81669677259,
      gender: "Female",
      marital_status: "Single",
      children: 3,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Self-employed",
      sector_of_employment: "Finance",
      duration_of_employment: "8 years",
      monthly_income: 412561,
      loan_repayment: 2115,
      office_email: "tabatha.galloway@quailcom.com"
    },
    social: {
      facebook: "jeannine.serrano",
      instagram: "baldwin_wilder",
      twitter: "hester52"
    },
    guarantor: {
      full_name: "Candace Edwards",
      phone: 2348248931846,
      email: "candaceedwards@quailcom.com",
      relationship: "Colleague"
    }
  },
  {
    id: 21,
    organization: "Vitricomp",
    username: "Maynard101",
    email: "maynardedwards@vitricomp.com",
    phoneNumber: "(950) 457-3152",
    dateJoined: "2023-11-09",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 116380137,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Katie Robinson",
      bvn: 32159752152,
      gender: "Female",
      marital_status: "Married",
      children: 3,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Self-employed",
      sector_of_employment: "Retail",
      duration_of_employment: "30 years",
      monthly_income: 481553,
      loan_repayment: 2139,
      office_email: "small.clayton@isoplex.com"
    },
    social: {
      facebook: "mullins.head",
      instagram: "martina_hodge",
      twitter: "kane88"
    },
    guarantor: {
      full_name: "Berg Patton",
      phone: 2347928016619,
      email: "bergpatton@isoplex.com",
      relationship: "Colleague"
    }
  },
  {
    id: 22,
    organization: "Providco",
    username: "Marjorie763",
    email: "marjoriepatton@providco.com",
    phoneNumber: "(833) 479-2273",
    dateJoined: "2018-07-13",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 332400073,
      bank_name: "GTBank"
    },
    personalInformation: {
      fullname: "Connie Bonner",
      bvn: 67052675875,
      gender: "Male",
      marital_status: "Widowed",
      children: 4,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Unemployed",
      sector_of_employment: "Education",
      duration_of_employment: "23 years",
      monthly_income: 151475,
      loan_repayment: 3486,
      office_email: "lorna.roberts@eschoir.com"
    },
    social: {
      facebook: "lambert.owen",
      instagram: "mamie_mejia",
      twitter: "esmeralda69"
    },
    guarantor: {
      full_name: "Kerr Sosa",
      phone: 2347999514321,
      email: "kerrsosa@eschoir.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 23,
    organization: "Zilidium",
    username: "Ramona408",
    email: "ramonasosa@zilidium.com",
    phoneNumber: "(927) 584-2906",
    dateJoined: "2018-06-22",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 52323557,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Diane Barnes",
      bvn: 24555391925,
      gender: "Male",
      marital_status: "Widowed",
      children: 0,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Retired",
      sector_of_employment: "Education",
      duration_of_employment: "24 years",
      monthly_income: 166418,
      loan_repayment: 3609,
      office_email: "bertha.beard@pheast.com"
    },
    social: {
      facebook: "judy.mcknight",
      instagram: "mcclain_hines",
      twitter: "cabrera54"
    },
    guarantor: {
      full_name: "Reed Collier",
      phone: 2348362703714,
      email: "reedcollier@pheast.com",
      relationship: "Colleague"
    }
  },
  {
    id: 24,
    organization: "Digique",
    username: "Hayes501",
    email: "hayescollier@digique.com",
    phoneNumber: "(894) 570-2409",
    dateJoined: "2024-02-05",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 161653036,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Goodman Craft",
      bvn: 49358796914,
      gender: "Male",
      marital_status: "Widowed",
      children: 3,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Self-employed",
      sector_of_employment: "Education",
      duration_of_employment: "1 years",
      monthly_income: 166330,
      loan_repayment: 2277,
      office_email: "naomi.gilliam@voipa.com"
    },
    social: {
      facebook: "lora.silva",
      instagram: "celeste_wilson",
      twitter: "rosemary93"
    },
    guarantor: {
      full_name: "Margo Watts",
      phone: 2348511442824,
      email: "margowatts@voipa.com",
      relationship: "Colleague"
    }
  },
  {
    id: 25,
    organization: "Rodeology",
    username: "Martinez838",
    email: "martinezwatts@rodeology.com",
    phoneNumber: "(955) 458-2918",
    dateJoined: "2021-11-15",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 354132185,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Hurst Hopper",
      bvn: 83021980138,
      gender: "Male",
      marital_status: "Widowed",
      children: 5,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Student",
      sector_of_employment: "Finance",
      duration_of_employment: "27 years",
      monthly_income: 317099,
      loan_repayment: 2191,
      office_email: "trina.daniel@autograte.com"
    },
    social: {
      facebook: "faulkner.wallace",
      instagram: "diaz_hayes",
      twitter: "marquez27"
    },
    guarantor: {
      full_name: "Lenora Russell",
      phone: 2347787806748,
      email: "lenorarussell@autograte.com",
      relationship: "Family"
    }
  },
  {
    id: 26,
    organization: "Manufact",
    username: "Neal634",
    email: "nealrussell@manufact.com",
    phoneNumber: "(888) 499-2556",
    dateJoined: "2016-10-20",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 310971347,
      bank_name: "First Bank"
    },
    personalInformation: {
      fullname: "Maricela Ashley",
      bvn: 53377256735,
      gender: "Female",
      marital_status: "Widowed",
      children: 1,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Unemployed",
      sector_of_employment: "Healthcare",
      duration_of_employment: "21 years",
      monthly_income: 473498,
      loan_repayment: 4334,
      office_email: "dina.johns@zillan.com"
    },
    social: {
      facebook: "merle.horne",
      instagram: "sadie_ryan",
      twitter: "alice70"
    },
    guarantor: {
      full_name: "Maritza Conner",
      phone: 2347783017340,
      email: "maritzaconner@zillan.com",
      relationship: "Partner"
    }
  },
  {
    id: 27,
    organization: "Ecstasia",
    username: "Solomon578",
    email: "solomonconner@ecstasia.com",
    phoneNumber: "(872) 539-2064",
    dateJoined: "2020-12-27",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 30826948,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Gamble Bright",
      bvn: 31476351583,
      gender: "Female",
      marital_status: "Single",
      children: 4,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Self-employed",
      sector_of_employment: "Finance",
      duration_of_employment: "17 years",
      monthly_income: 234440,
      loan_repayment: 2702,
      office_email: "walton.vazquez@genmex.com"
    },
    social: {
      facebook: "reeves.rhodes",
      instagram: "joanne_fitzgerald",
      twitter: "sanchez98"
    },
    guarantor: {
      full_name: "Clare Walton",
      phone: 2347584043229,
      email: "clarewalton@genmex.com",
      relationship: "Partner"
    }
  },
  {
    id: 28,
    organization: "Geologix",
    username: "Ophelia402",
    email: "opheliawalton@geologix.com",
    phoneNumber: "(920) 473-3390",
    dateJoined: "2018-04-08",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 210483329,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Middleton Hudson",
      bvn: 96647821730,
      gender: "Male",
      marital_status: "Widowed",
      children: 4,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Retired",
      sector_of_employment: "Retail",
      duration_of_employment: "40 years",
      monthly_income: 292474,
      loan_repayment: 3327,
      office_email: "mann.sanders@extragen.com"
    },
    social: {
      facebook: "castro.boyer",
      instagram: "nadine_zamora",
      twitter: "keisha53"
    },
    guarantor: {
      full_name: "Marsha Woodard",
      phone: 2348990774690,
      email: "marshawoodard@extragen.com",
      relationship: "Colleague"
    }
  },
  {
    id: 29,
    organization: "Fuelworks",
    username: "Lane713",
    email: "lanewoodard@fuelworks.com",
    phoneNumber: "(989) 587-3708",
    dateJoined: "2014-06-28",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 129070937,
      bank_name: "First Bank"
    },
    personalInformation: {
      fullname: "Kay Nelson",
      bvn: 60397629448,
      gender: "Male",
      marital_status: "Single",
      children: 3,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Employed",
      sector_of_employment: "Education",
      duration_of_employment: "7 years",
      monthly_income: 287915,
      loan_repayment: 3477,
      office_email: "griffith.richard@envire.com"
    },
    social: {
      facebook: "brandie.brooks",
      instagram: "brianna_walker",
      twitter: "michele47"
    },
    guarantor: {
      full_name: "Mason Spencer",
      phone: 2348685679177,
      email: "masonspencer@envire.com",
      relationship: "Friend"
    }
  },
  {
    id: 30,
    organization: "Everest",
    username: "Best444",
    email: "bestspencer@everest.com",
    phoneNumber: "(845) 447-2078",
    dateJoined: "2024-04-29",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 215352359,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Kathy Compton",
      bvn: 81198425855,
      gender: "Female",
      marital_status: "Divorced",
      children: 4,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Employed",
      sector_of_employment: "Agriculture",
      duration_of_employment: "22 years",
      monthly_income: 373762,
      loan_repayment: 4975,
      office_email: "miriam.larson@ginkogene.com"
    },
    social: {
      facebook: "hutchinson.rosales",
      instagram: "sharpe_perkins",
      twitter: "baird73"
    },
    guarantor: {
      full_name: "Myrna Melton",
      phone: 2348614515902,
      email: "myrnamelton@ginkogene.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 31,
    organization: "Valreda",
    username: "Cotton423",
    email: "cottonmelton@valreda.com",
    phoneNumber: "(863) 561-3002",
    dateJoined: "2017-12-31",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 276194729,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Karen Valencia",
      bvn: 55272653521,
      gender: "Male",
      marital_status: "Married",
      children: 0,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Student",
      sector_of_employment: "Construction",
      duration_of_employment: "17 years",
      monthly_income: 306566,
      loan_repayment: 3170,
      office_email: "shepherd.carver@exozent.com"
    },
    social: {
      facebook: "molina.avery",
      instagram: "armstrong_kirk",
      twitter: "tania94"
    },
    guarantor: {
      full_name: "Randolph Lindsay",
      phone: 2347742989685,
      email: "randolphlindsay@exozent.com",
      relationship: "Partner"
    }
  },
  {
    id: 32,
    organization: "Boilicon",
    username: "Vickie473",
    email: "vickielindsay@boilicon.com",
    phoneNumber: "(956) 520-3997",
    dateJoined: "2017-04-29",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 205168771,
      bank_name: "Sterling Bank"
    },
    personalInformation: {
      fullname: "Frost Whitehead",
      bvn: 96844616655,
      gender: "Male",
      marital_status: "Divorced",
      children: 0,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Retired",
      sector_of_employment: "Agriculture",
      duration_of_employment: "23 years",
      monthly_income: 215212,
      loan_repayment: 4796,
      office_email: "lorena.rosario@isosphere.com"
    },
    social: {
      facebook: "nash.sampson",
      instagram: "meyers_walter",
      twitter: "prince69"
    },
    guarantor: {
      full_name: "Lowery Rich",
      phone: 2348229385976,
      email: "loweryrich@isosphere.com",
      relationship: "Family"
    }
  },
  {
    id: 33,
    organization: "Lotron",
    username: "Jean541",
    email: "jeanrich@lotron.com",
    phoneNumber: "(983) 531-2526",
    dateJoined: "2015-03-03",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 228899743,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Eula Chavez",
      bvn: 39445192745,
      gender: "Male",
      marital_status: "Widowed",
      children: 2,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Retired",
      sector_of_employment: "Technology",
      duration_of_employment: "37 years",
      monthly_income: 330592,
      loan_repayment: 2198,
      office_email: "newton.collins@exodoc.com"
    },
    social: {
      facebook: "hester.houston",
      instagram: "mercedes_hale",
      twitter: "greene53"
    },
    guarantor: {
      full_name: "Berry Duncan",
      phone: 2347485766915,
      email: "berryduncan@exodoc.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 34,
    organization: "Quotezart",
    username: "Valencia369",
    email: "valenciaduncan@quotezart.com",
    phoneNumber: "(862) 482-3494",
    dateJoined: "2015-07-13",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 261280807,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Stanley Vaughan",
      bvn: 69816431266,
      gender: "Male",
      marital_status: "Married",
      children: 2,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Retired",
      sector_of_employment: "Healthcare",
      duration_of_employment: "10 years",
      monthly_income: 218244,
      loan_repayment: 4719,
      office_email: "juliet.holloway@snacktion.com"
    },
    social: {
      facebook: "merritt.kaufman",
      instagram: "fern_cain",
      twitter: "vilma60"
    },
    guarantor: {
      full_name: "Kaitlin Dudley",
      phone: 2348195804754,
      email: "kaitlindudley@snacktion.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 35,
    organization: "Fortean",
    username: "Odonnell444",
    email: "odonnelldudley@fortean.com",
    phoneNumber: "(839) 402-2918",
    dateJoined: "2024-08-31",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 494863164,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Jimenez Paul",
      bvn: 60165846425,
      gender: "Male",
      marital_status: "Single",
      children: 3,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Unemployed",
      sector_of_employment: "Retail",
      duration_of_employment: "35 years",
      monthly_income: 347568,
      loan_repayment: 2501,
      office_email: "pollard.ray@pholio.com"
    },
    social: {
      facebook: "natalie.graves",
      instagram: "ebony_sharp",
      twitter: "daphne27"
    },
    guarantor: {
      full_name: "Tate Howell",
      phone: 2348461715905,
      email: "tatehowell@pholio.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 36,
    organization: "Euron",
    username: "Odom857",
    email: "odomhowell@euron.com",
    phoneNumber: "(844) 466-3778",
    dateJoined: "2017-01-17",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 473933252,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Dominique Byers",
      bvn: 74239460621,
      gender: "Female",
      marital_status: "Single",
      children: 5,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Retired",
      sector_of_employment: "Government",
      duration_of_employment: "31 years",
      monthly_income: 472255,
      loan_repayment: 2755,
      office_email: "dena.hart@bedlam.com"
    },
    social: {
      facebook: "henry.hughes",
      instagram: "franks_nieves",
      twitter: "chapman46"
    },
    guarantor: {
      full_name: "Elliott Kim",
      phone: 2347243706642,
      email: "elliottkim@bedlam.com",
      relationship: "Partner"
    }
  },
  {
    id: 37,
    organization: "Zilphur",
    username: "Foley297",
    email: "foleykim@zilphur.com",
    phoneNumber: "(929) 483-3668",
    dateJoined: "2014-09-22",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 470417748,
      bank_name: "First Bank"
    },
    personalInformation: {
      fullname: "Chen Mccullough",
      bvn: 88507550284,
      gender: "Male",
      marital_status: "Divorced",
      children: 4,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Self-employed",
      sector_of_employment: "Retail",
      duration_of_employment: "7 years",
      monthly_income: 156778,
      loan_repayment: 4487,
      office_email: "elba.estes@zialactic.com"
    },
    social: {
      facebook: "dale.austin",
      instagram: "chandra_sullivan",
      twitter: "eugenia58"
    },
    guarantor: {
      full_name: "Haley Trevino",
      phone: 2347332274991,
      email: "haleytrevino@zialactic.com",
      relationship: "Friend"
    }
  },
  {
    id: 38,
    organization: "Niquent",
    username: "Georgia336",
    email: "georgiatrevino@niquent.com",
    phoneNumber: "(945) 486-2850",
    dateJoined: "2020-12-20",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 306515167,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Ronda Burns",
      bvn: 42768646524,
      gender: "Male",
      marital_status: "Married",
      children: 5,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Self-employed",
      sector_of_employment: "Retail",
      duration_of_employment: "33 years",
      monthly_income: 449951,
      loan_repayment: 1961,
      office_email: "terry.cantrell@savvy.com"
    },
    social: {
      facebook: "randall.nash",
      instagram: "shawn_allison",
      twitter: "ladonna92"
    },
    guarantor: {
      full_name: "Cassie Kerr",
      phone: 2348880223008,
      email: "cassiekerr@savvy.com",
      relationship: "Family"
    }
  },
  {
    id: 39,
    organization: "Organica",
    username: "Deloris193",
    email: "deloriskerr@organica.com",
    phoneNumber: "(998) 562-2946",
    dateJoined: "2019-06-01",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 218168857,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Kari Sykes",
      bvn: 58643614442,
      gender: "Female",
      marital_status: "Widowed",
      children: 1,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Employed",
      sector_of_employment: "Government",
      duration_of_employment: "21 years",
      monthly_income: 216797,
      loan_repayment: 2651,
      office_email: "mandy.mcneil@jumpstack.com"
    },
    social: {
      facebook: "joy.nguyen",
      instagram: "florine_kent",
      twitter: "jeanie92"
    },
    guarantor: {
      full_name: "Johns Odonnell",
      phone: 2348726852826,
      email: "johnsodonnell@jumpstack.com",
      relationship: "Family"
    }
  },
  {
    id: 40,
    organization: "Waterbaby",
    username: "Roslyn663",
    email: "roslynodonnell@waterbaby.com",
    phoneNumber: "(915) 518-2973",
    dateJoined: "2019-02-08",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 316953507,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Josefina Baldwin",
      bvn: 88337491064,
      gender: "Male",
      marital_status: "Widowed",
      children: 2,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Employed",
      sector_of_employment: "Construction",
      duration_of_employment: "25 years",
      monthly_income: 159585,
      loan_repayment: 4862,
      office_email: "ayala.norris@netur.com"
    },
    social: {
      facebook: "holmes.matthews",
      instagram: "nancy_nicholson",
      twitter: "goldie4"
    },
    guarantor: {
      full_name: "Tami Morgan",
      phone: 2347295976503,
      email: "tamimorgan@netur.com",
      relationship: "Colleague"
    }
  },
  {
    id: 41,
    organization: "Lovepad",
    username: "Boyle947",
    email: "boylemorgan@lovepad.com",
    phoneNumber: "(807) 494-3791",
    dateJoined: "2017-08-19",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 211786171,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Minnie Willis",
      bvn: 15625773255,
      gender: "Female",
      marital_status: "Widowed",
      children: 5,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Student",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "30 years",
      monthly_income: 305134,
      loan_repayment: 4628,
      office_email: "kathleen.wise@empirica.com"
    },
    social: {
      facebook: "colon.shannon",
      instagram: "may_parks",
      twitter: "frankie69"
    },
    guarantor: {
      full_name: "Hahn Ratliff",
      phone: 2348616150801,
      email: "hahnratliff@empirica.com",
      relationship: "Colleague"
    }
  },
  {
    id: 42,
    organization: "Zipak",
    username: "Weaver363",
    email: "weaverratliff@zipak.com",
    phoneNumber: "(862) 485-3964",
    dateJoined: "2021-02-11",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 40454951,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Pearlie Mccoy",
      bvn: 87531917959,
      gender: "Female",
      marital_status: "Divorced",
      children: 5,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Employed",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "19 years",
      monthly_income: 382699,
      loan_repayment: 2600,
      office_email: "condo.livingston@stockpost.com"
    },
    social: {
      facebook: "barry.pugh",
      instagram: "zelma_waters",
      twitter: "sanders77"
    },
    guarantor: {
      full_name: "Diana Carr",
      phone: 2348258391483,
      email: "dianacarr@stockpost.com",
      relationship: "Colleague"
    }
  },
  {
    id: 43,
    organization: "Cubicide",
    username: "Alissa231",
    email: "alissacarr@cubicide.com",
    phoneNumber: "(944) 547-3283",
    dateJoined: "2019-01-04",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 24616080,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Hines Pitts",
      bvn: 30699659747,
      gender: "Female",
      marital_status: "Widowed",
      children: 3,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Student",
      sector_of_employment: "Technology",
      duration_of_employment: "38 years",
      monthly_income: 156980,
      loan_repayment: 2303,
      office_email: "laverne.bowman@quilch.com"
    },
    social: {
      facebook: "wilkerson.warren",
      instagram: "juliana_sanchez",
      twitter: "winters8"
    },
    guarantor: {
      full_name: "Joyce Mckinney",
      phone: 2348955551775,
      email: "joycemckinney@quilch.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 44,
    organization: "Kog",
    username: "Kristin249",
    email: "kristinmckinney@kog.com",
    phoneNumber: "(961) 530-3958",
    dateJoined: "2022-02-21",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 96271327,
      bank_name: "Wema Bank"
    },
    personalInformation: {
      fullname: "Robbins Horton",
      bvn: 51320139948,
      gender: "Female",
      marital_status: "Widowed",
      children: 0,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Employed",
      sector_of_employment: "Finance",
      duration_of_employment: "6 years",
      monthly_income: 121228,
      loan_repayment: 2707,
      office_email: "jackson.kane@techmania.com"
    },
    social: {
      facebook: "sheppard.morrison",
      instagram: "anastasia_ramsey",
      twitter: "chavez41"
    },
    guarantor: {
      full_name: "Karla Barlow",
      phone: 2348221275007,
      email: "karlabarlow@techmania.com",
      relationship: "Family"
    }
  },
  {
    id: 45,
    organization: "Inrt",
    username: "Marian628",
    email: "marianbarlow@inrt.com",
    phoneNumber: "(909) 421-2729",
    dateJoined: "2018-08-29",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 333584844,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Rutledge Vinson",
      bvn: 15004860758,
      gender: "Male",
      marital_status: "Married",
      children: 1,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Student",
      sector_of_employment: "Government",
      duration_of_employment: "8 years",
      monthly_income: 284509,
      loan_repayment: 2381,
      office_email: "harrison.hendrix@zaggles.com"
    },
    social: {
      facebook: "freida.powell",
      instagram: "sims_kirby",
      twitter: "chase74"
    },
    guarantor: {
      full_name: "Angelia Rojas",
      phone: 2348040689291,
      email: "angeliarojas@zaggles.com",
      relationship: "Colleague"
    }
  },
  {
    id: 46,
    organization: "Bedder",
    username: "Leah556",
    email: "leahrojas@bedder.com",
    phoneNumber: "(911) 478-2899",
    dateJoined: "2016-08-29",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 67529532,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Dolly Giles",
      bvn: 73290563315,
      gender: "Male",
      marital_status: "Divorced",
      children: 4,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Student",
      sector_of_employment: "Construction",
      duration_of_employment: "27 years",
      monthly_income: 218196,
      loan_repayment: 4872,
      office_email: "faith.coleman@neocent.com"
    },
    social: {
      facebook: "norris.pearson",
      instagram: "williams_lucas",
      twitter: "church6"
    },
    guarantor: {
      full_name: "Guerra Macdonald",
      phone: 2348290983330,
      email: "guerramacdonald@neocent.com",
      relationship: "Colleague"
    }
  },
  {
    id: 47,
    organization: "Tetratrex",
    username: "Elaine522",
    email: "elainemacdonald@tetratrex.com",
    phoneNumber: "(995) 539-2656",
    dateJoined: "2022-06-04",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 397392870,
      bank_name: "First Bank"
    },
    personalInformation: {
      fullname: "Sparks Soto",
      bvn: 50218585915,
      gender: "Female",
      marital_status: "Divorced",
      children: 0,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Retired",
      sector_of_employment: "Finance",
      duration_of_employment: "10 years",
      monthly_income: 302027,
      loan_repayment: 3780,
      office_email: "hebert.middleton@plasto.com"
    },
    social: {
      facebook: "aimee.mathews",
      instagram: "maura_elliott",
      twitter: "katy63"
    },
    guarantor: {
      full_name: "Ines Combs",
      phone: 2349058131720,
      email: "inescombs@plasto.com",
      relationship: "Friend"
    }
  },
  {
    id: 48,
    organization: "Eventex",
    username: "Cecilia156",
    email: "ceciliacombs@eventex.com",
    phoneNumber: "(906) 463-2201",
    dateJoined: "2021-02-10",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 125607908,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Santiago King",
      bvn: 52230020506,
      gender: "Male",
      marital_status: "Married",
      children: 4,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Retired",
      sector_of_employment: "Retail",
      duration_of_employment: "31 years",
      monthly_income: 85170,
      loan_repayment: 3798,
      office_email: "sofia.hooper@baluba.com"
    },
    social: {
      facebook: "ramirez.franklin",
      instagram: "dodson_dunn",
      twitter: "kidd33"
    },
    guarantor: {
      full_name: "Harrington Marks",
      phone: 2348631800604,
      email: "harringtonmarks@baluba.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 49,
    organization: "Progenex",
    username: "Robyn578",
    email: "robynmarks@progenex.com",
    phoneNumber: "(911) 411-3687",
    dateJoined: "2019-10-15",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 18638194,
      bank_name: "UBA"
    },
    personalInformation: {
      fullname: "Tyler Case",
      bvn: 45119445608,
      gender: "Male",
      marital_status: "Divorced",
      children: 4,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Unemployed",
      sector_of_employment: "Agriculture",
      duration_of_employment: "21 years",
      monthly_income: 342704,
      loan_repayment: 2361,
      office_email: "rosalyn.figueroa@furnigeer.com"
    },
    social: {
      facebook: "corrine.rodriquez",
      instagram: "justice_mosley",
      twitter: "lavonne65"
    },
    guarantor: {
      full_name: "Aileen Witt",
      phone: 2348602390943,
      email: "aileenwitt@furnigeer.com",
      relationship: "Partner"
    }
  },
  {
    id: 50,
    organization: "Zidox",
    username: "Myra661",
    email: "myrawitt@zidox.com",
    phoneNumber: "(862) 484-2874",
    dateJoined: "2024-03-05",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 427301082,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Doris Montgomery",
      bvn: 58483197087,
      gender: "Male",
      marital_status: "Married",
      children: 1,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Retired",
      sector_of_employment: "Agriculture",
      duration_of_employment: "40 years",
      monthly_income: 159997,
      loan_repayment: 4150,
      office_email: "weeks.faulkner@viocular.com"
    },
    social: {
      facebook: "bruce.madden",
      instagram: "kerri_lindsey",
      twitter: "sabrina98"
    },
    guarantor: {
      full_name: "Duffy Holman",
      phone: 2348214947839,
      email: "duffyholman@viocular.com",
      relationship: "Colleague"
    }
  },
  {
    id: 51,
    organization: "Zerology",
    username: "Wilson977",
    email: "wilsonholman@zerology.com",
    phoneNumber: "(937) 464-2451",
    dateJoined: "2020-06-09",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 478006291,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Pope Buckley",
      bvn: 30927544931,
      gender: "Male",
      marital_status: "Single",
      children: 5,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Unemployed",
      sector_of_employment: "Construction",
      duration_of_employment: "17 years",
      monthly_income: 372846,
      loan_repayment: 2831,
      office_email: "reva.valentine@geeknet.com"
    },
    social: {
      facebook: "daniels.carrillo",
      instagram: "jones_shepard",
      twitter: "summer97"
    },
    guarantor: {
      full_name: "Mcdaniel Espinoza",
      phone: 2348379732875,
      email: "mcdanielespinoza@geeknet.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 52,
    organization: "Prosely",
    username: "Kimberly370",
    email: "kimberlyespinoza@prosely.com",
    phoneNumber: "(837) 466-3274",
    dateJoined: "2014-02-26",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 135328814,
      bank_name: "UBA"
    },
    personalInformation: {
      fullname: "Lyons Massey",
      bvn: 16846741772,
      gender: "Male",
      marital_status: "Married",
      children: 0,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Self-employed",
      sector_of_employment: "Education",
      duration_of_employment: "16 years",
      monthly_income: 205220,
      loan_repayment: 4326,
      office_email: "carroll.mcintosh@vantage.com"
    },
    social: {
      facebook: "adrian.miranda",
      instagram: "lorrie_rose",
      twitter: "roach16"
    },
    guarantor: {
      full_name: "Gibson Nolan",
      phone: 2348188077841,
      email: "gibsonnolan@vantage.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 53,
    organization: "Comtour",
    username: "Giles712",
    email: "gilesnolan@comtour.com",
    phoneNumber: "(950) 585-3926",
    dateJoined: "2018-09-16",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 490019381,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Lindsey Stanton",
      bvn: 16358118172,
      gender: "Male",
      marital_status: "Divorced",
      children: 3,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Student",
      sector_of_employment: "Government",
      duration_of_employment: "23 years",
      monthly_income: 440362,
      loan_repayment: 2228,
      office_email: "estes.cardenas@namegen.com"
    },
    social: {
      facebook: "olivia.cox",
      instagram: "miranda_finch",
      twitter: "michael97"
    },
    guarantor: {
      full_name: "Noelle Richmond",
      phone: 2347388139876,
      email: "noellerichmond@namegen.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 54,
    organization: "Centice",
    username: "Clark263",
    email: "clarkrichmond@centice.com",
    phoneNumber: "(982) 524-2119",
    dateJoined: "2016-03-03",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 212071804,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Lois Good",
      bvn: 61483709340,
      gender: "Female",
      marital_status: "Divorced",
      children: 1,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Unemployed",
      sector_of_employment: "Technology",
      duration_of_employment: "6 years",
      monthly_income: 65867,
      loan_repayment: 2321,
      office_email: "della.burch@xplor.com"
    },
    social: {
      facebook: "olive.savage",
      instagram: "preston_washington",
      twitter: "tonia28"
    },
    guarantor: {
      full_name: "Leila Calhoun",
      phone: 2348836139652,
      email: "leilacalhoun@xplor.com",
      relationship: "Friend"
    }
  },
  {
    id: 55,
    organization: "Pigzart",
    username: "Michelle905",
    email: "michellecalhoun@pigzart.com",
    phoneNumber: "(866) 464-3472",
    dateJoined: "2017-05-02",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 449850149,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Petty Reese",
      bvn: 30506891160,
      gender: "Female",
      marital_status: "Divorced",
      children: 0,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Retired",
      sector_of_employment: "Agriculture",
      duration_of_employment: "4 years",
      monthly_income: 482506,
      loan_repayment: 2063,
      office_email: "jennings.jacobs@magnemo.com"
    },
    social: {
      facebook: "brady.mathis",
      instagram: "rowland_cohen",
      twitter: "jane48"
    },
    guarantor: {
      full_name: "Julianne Hoffman",
      phone: 2348538890752,
      email: "juliannehoffman@magnemo.com",
      relationship: "Family"
    }
  },
  {
    id: 56,
    organization: "Premiant",
    username: "Cox943",
    email: "coxhoffman@premiant.com",
    phoneNumber: "(831) 515-2078",
    dateJoined: "2022-06-16",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 282722682,
      bank_name: "First Bank"
    },
    personalInformation: {
      fullname: "Chelsea Hess",
      bvn: 11749641151,
      gender: "Female",
      marital_status: "Divorced",
      children: 3,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Retired",
      sector_of_employment: "Education",
      duration_of_employment: "20 years",
      monthly_income: 187719,
      loan_repayment: 4734,
      office_email: "valerie.orr@digigene.com"
    },
    social: {
      facebook: "christian.whitaker",
      instagram: "huber_chang",
      twitter: "charles12"
    },
    guarantor: {
      full_name: "Claudia Morse",
      phone: 2348219024204,
      email: "claudiamorse@digigene.com",
      relationship: "Colleague"
    }
  },
  {
    id: 57,
    organization: "Yogasm",
    username: "Vicki311",
    email: "vickimorse@yogasm.com",
    phoneNumber: "(901) 478-3781",
    dateJoined: "2014-10-28",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 205206286,
      bank_name: "Wema Bank"
    },
    personalInformation: {
      fullname: "Cara Whitley",
      bvn: 18700074483,
      gender: "Male",
      marital_status: "Widowed",
      children: 3,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Unemployed",
      sector_of_employment: "Retail",
      duration_of_employment: "15 years",
      monthly_income: 88383,
      loan_repayment: 4410,
      office_email: "dale.mcintyre@jasper.com"
    },
    social: {
      facebook: "campbell.abbott",
      instagram: "montoya_holt",
      twitter: "guzman3"
    },
    guarantor: {
      full_name: "Glass Moran",
      phone: 2347454559711,
      email: "glassmoran@jasper.com",
      relationship: "Partner"
    }
  },
  {
    id: 58,
    organization: "Lyrichord",
    username: "Cynthia650",
    email: "cynthiamoran@lyrichord.com",
    phoneNumber: "(879) 578-2872",
    dateJoined: "2017-08-27",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 14930806,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Graciela Mckay",
      bvn: 27273029482,
      gender: "Female",
      marital_status: "Single",
      children: 4,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Employed",
      sector_of_employment: "Technology",
      duration_of_employment: "2 years",
      monthly_income: 482195,
      loan_repayment: 2869,
      office_email: "brennan.anderson@insurity.com"
    },
    social: {
      facebook: "cline.harvey",
      instagram: "alisa_mendoza",
      twitter: "gail57"
    },
    guarantor: {
      full_name: "Eddie Underwood",
      phone: 2347800696893,
      email: "eddieunderwood@insurity.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 59,
    organization: "Techade",
    username: "Finch948",
    email: "finchunderwood@techade.com",
    phoneNumber: "(991) 531-3917",
    dateJoined: "2015-01-26",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 290442162,
      bank_name: "UBA"
    },
    personalInformation: {
      fullname: "Pickett Joseph",
      bvn: 68388313189,
      gender: "Female",
      marital_status: "Divorced",
      children: 2,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Self-employed",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "9 years",
      monthly_income: 496386,
      loan_repayment: 2403,
      office_email: "holman.young@gallaxia.com"
    },
    social: {
      facebook: "mayo.byrd",
      instagram: "lola_cunningham",
      twitter: "mollie45"
    },
    guarantor: {
      full_name: "Huff Ward",
      phone: 2348897248141,
      email: "huffward@gallaxia.com",
      relationship: "Friend"
    }
  },
  {
    id: 60,
    organization: "Darwinium",
    username: "Janelle272",
    email: "janelleward@darwinium.com",
    phoneNumber: "(942) 591-2696",
    dateJoined: "2017-05-27",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 327107255,
      bank_name: "First Bank"
    },
    personalInformation: {
      fullname: "Glenda Christensen",
      bvn: 90305519819,
      gender: "Female",
      marital_status: "Widowed",
      children: 5,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Retired",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "15 years",
      monthly_income: 397324,
      loan_repayment: 2944,
      office_email: "stacey.payne@norali.com"
    },
    social: {
      facebook: "carolyn.molina",
      instagram: "foster_thompson",
      twitter: "cervantes2"
    },
    guarantor: {
      full_name: "Sophie Berry",
      phone: 2349030476674,
      email: "sophieberry@norali.com",
      relationship: "Family"
    }
  },
  {
    id: 61,
    organization: "Orbaxter",
    username: "Lupe834",
    email: "lupeberry@orbaxter.com",
    phoneNumber: "(803) 563-3450",
    dateJoined: "2015-11-04",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 187462931,
      bank_name: "GTBank"
    },
    personalInformation: {
      fullname: "Mathews Everett",
      bvn: 66721677047,
      gender: "Female",
      marital_status: "Single",
      children: 0,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Unemployed",
      sector_of_employment: "Construction",
      duration_of_employment: "33 years",
      monthly_income: 295143,
      loan_repayment: 3488,
      office_email: "theresa.flores@elemantra.com"
    },
    social: {
      facebook: "tamera.blackwell",
      instagram: "winnie_monroe",
      twitter: "rush3"
    },
    guarantor: {
      full_name: "Mclean Juarez",
      phone: 2348651998480,
      email: "mcleanjuarez@elemantra.com",
      relationship: "Family"
    }
  },
  {
    id: 62,
    organization: "Futurize",
    username: "Patti595",
    email: "pattijuarez@futurize.com",
    phoneNumber: "(871) 585-3930",
    dateJoined: "2017-09-17",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 434364501,
      bank_name: "First Bank"
    },
    personalInformation: {
      fullname: "Daniel Mercado",
      bvn: 64070105795,
      gender: "Female",
      marital_status: "Single",
      children: 2,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Student",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "11 years",
      monthly_income: 328721,
      loan_repayment: 3505,
      office_email: "mills.macias@coriander.com"
    },
    social: {
      facebook: "flores.gray",
      instagram: "carr_wilkins",
      twitter: "helene23"
    },
    guarantor: {
      full_name: "Strong Jimenez",
      phone: 2347029891990,
      email: "strongjimenez@coriander.com",
      relationship: "Friend"
    }
  },
  {
    id: 63,
    organization: "Isotronic",
    username: "Young603",
    email: "youngjimenez@isotronic.com",
    phoneNumber: "(879) 471-3278",
    dateJoined: "2018-08-20",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 443107635,
      bank_name: "UBA"
    },
    personalInformation: {
      fullname: "Atkins Holland",
      bvn: 31405774027,
      gender: "Male",
      marital_status: "Divorced",
      children: 4,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Self-employed",
      sector_of_employment: "Education",
      duration_of_employment: "12 years",
      monthly_income: 421257,
      loan_repayment: 4826,
      office_email: "gonzalez.kelly@soprano.com"
    },
    social: {
      facebook: "marcie.vance",
      instagram: "audrey_sellers",
      twitter: "clements35"
    },
    guarantor: {
      full_name: "Spears Lancaster",
      phone: 2348744777364,
      email: "spearslancaster@soprano.com",
      relationship: "Family"
    }
  },
  {
    id: 64,
    organization: "Besto",
    username: "Fry233",
    email: "frylancaster@besto.com",
    phoneNumber: "(873) 530-2694",
    dateJoined: "2016-07-06",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 171818850,
      bank_name: "GTBank"
    },
    personalInformation: {
      fullname: "Hensley Lowery",
      bvn: 58228385125,
      gender: "Male",
      marital_status: "Single",
      children: 2,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Employed",
      sector_of_employment: "Government",
      duration_of_employment: "19 years",
      monthly_income: 159597,
      loan_repayment: 3383,
      office_email: "snyder.fernandez@letpro.com"
    },
    social: {
      facebook: "josie.simpson",
      instagram: "burns_miles",
      twitter: "sampson57"
    },
    guarantor: {
      full_name: "Patton Puckett",
      phone: 2347244228482,
      email: "pattonpuckett@letpro.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 65,
    organization: "Maroptic",
    username: "Bishop374",
    email: "bishoppuckett@maroptic.com",
    phoneNumber: "(917) 478-3704",
    dateJoined: "2021-07-26",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 139481295,
      bank_name: "Sterling Bank"
    },
    personalInformation: {
      fullname: "Joyner Rasmussen",
      bvn: 83927633649,
      gender: "Female",
      marital_status: "Married",
      children: 5,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Student",
      sector_of_employment: "Technology",
      duration_of_employment: "23 years",
      monthly_income: 217232,
      loan_repayment: 3346,
      office_email: "foreman.david@orbixtar.com"
    },
    social: {
      facebook: "martin.carney",
      instagram: "stella_bray",
      twitter: "alyce74"
    },
    guarantor: {
      full_name: "Craig Moreno",
      phone: 2347279833785,
      email: "craigmoreno@orbixtar.com",
      relationship: "Friend"
    }
  },
  {
    id: 66,
    organization: "Plasmosis",
    username: "Perez372",
    email: "perezmoreno@plasmosis.com",
    phoneNumber: "(940) 575-3933",
    dateJoined: "2014-07-23",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 247833865,
      bank_name: "UBA"
    },
    personalInformation: {
      fullname: "Whitney Stafford",
      bvn: 95432748779,
      gender: "Female",
      marital_status: "Married",
      children: 0,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Employed",
      sector_of_employment: "Education",
      duration_of_employment: "13 years",
      monthly_income: 209880,
      loan_repayment: 2231,
      office_email: "henson.sargent@barkarama.com"
    },
    social: {
      facebook: "janna.leach",
      instagram: "hartman_hays",
      twitter: "french53"
    },
    guarantor: {
      full_name: "Lindsay Griffin",
      phone: 2348843830146,
      email: "lindsaygriffin@barkarama.com",
      relationship: "Family"
    }
  },
  {
    id: 67,
    organization: "Zaj",
    username: "Fannie240",
    email: "fanniegriffin@zaj.com",
    phoneNumber: "(818) 545-3332",
    dateJoined: "2018-05-01",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 472503839,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Evangeline Lott",
      bvn: 56589374024,
      gender: "Male",
      marital_status: "Single",
      children: 1,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Retired",
      sector_of_employment: "Finance",
      duration_of_employment: "30 years",
      monthly_income: 417488,
      loan_repayment: 3661,
      office_email: "lily.ford@enersol.com"
    },
    social: {
      facebook: "mccullough.welch",
      instagram: "mccormick_clay",
      twitter: "combs27"
    },
    guarantor: {
      full_name: "Georgina Navarro",
      phone: 2347939793306,
      email: "georginanavarro@enersol.com",
      relationship: "Friend"
    }
  },
  {
    id: 68,
    organization: "Plasmos",
    username: "Martha620",
    email: "marthanavarro@plasmos.com",
    phoneNumber: "(887) 404-3742",
    dateJoined: "2020-12-23",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 309447874,
      bank_name: "GTBank"
    },
    personalInformation: {
      fullname: "Leonor Gonzales",
      bvn: 28640370618,
      gender: "Male",
      marital_status: "Divorced",
      children: 5,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Retired",
      sector_of_employment: "Education",
      duration_of_employment: "8 years",
      monthly_income: 238026,
      loan_repayment: 4053,
      office_email: "elvia.salinas@collaire.com"
    },
    social: {
      facebook: "avery.shaw",
      instagram: "riddle_weeks",
      twitter: "holder12"
    },
    guarantor: {
      full_name: "Dillon Simmons",
      phone: 2347983531287,
      email: "dillonsimmons@collaire.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 69,
    organization: "Cytrek",
    username: "Mcneil172",
    email: "mcneilsimmons@cytrek.com",
    phoneNumber: "(992) 478-2050",
    dateJoined: "2015-06-07",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 376432608,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Deanne Barber",
      bvn: 51811019133,
      gender: "Female",
      marital_status: "Married",
      children: 0,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Unemployed",
      sector_of_employment: "Finance",
      duration_of_employment: "8 years",
      monthly_income: 484684,
      loan_repayment: 4685,
      office_email: "antoinette.may@kneedles.com"
    },
    social: {
      facebook: "walker.lowe",
      instagram: "willa_pollard",
      twitter: "sue43"
    },
    guarantor: {
      full_name: "Ina Castro",
      phone: 2347009905917,
      email: "inacastro@kneedles.com",
      relationship: "Friend"
    }
  },
  {
    id: 70,
    organization: "Cogentry",
    username: "Rachel846",
    email: "rachelcastro@cogentry.com",
    phoneNumber: "(923) 467-2422",
    dateJoined: "2022-11-16",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 177229994,
      bank_name: "Sterling Bank"
    },
    personalInformation: {
      fullname: "Rich Beach",
      bvn: 56186244265,
      gender: "Male",
      marital_status: "Married",
      children: 3,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Unemployed",
      sector_of_employment: "Technology",
      duration_of_employment: "5 years",
      monthly_income: 216313,
      loan_repayment: 4270,
      office_email: "hewitt.coffey@assistix.com"
    },
    social: {
      facebook: "wiley.blake",
      instagram: "carol_little",
      twitter: "albert9"
    },
    guarantor: {
      full_name: "Melton Mcbride",
      phone: 2347468388684,
      email: "meltonmcbride@assistix.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 71,
    organization: "Matrixity",
    username: "Britney864",
    email: "britneymcbride@matrixity.com",
    phoneNumber: "(947) 432-2845",
    dateJoined: "2017-01-31",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 286567013,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Liza Hickman",
      bvn: 89315657463,
      gender: "Female",
      marital_status: "Single",
      children: 5,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Employed",
      sector_of_employment: "Agriculture",
      duration_of_employment: "5 years",
      monthly_income: 381227,
      loan_repayment: 4374,
      office_email: "hancock.oliver@avit.com"
    },
    social: {
      facebook: "carmen.carter",
      instagram: "lilia_morton",
      twitter: "allen70"
    },
    guarantor: {
      full_name: "Deleon White",
      phone: 2347963262880,
      email: "deleonwhite@avit.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 72,
    organization: "Accuprint",
    username: "Mcconnell702",
    email: "mcconnellwhite@accuprint.com",
    phoneNumber: "(802) 501-2196",
    dateJoined: "2023-05-21",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 323081749,
      bank_name: "First Bank"
    },
    personalInformation: {
      fullname: "Benita Dominguez",
      bvn: 69800954111,
      gender: "Female",
      marital_status: "Widowed",
      children: 4,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Retired",
      sector_of_employment: "Education",
      duration_of_employment: "17 years",
      monthly_income: 148436,
      loan_repayment: 2826,
      office_email: "casey.park@greeker.com"
    },
    social: {
      facebook: "may.herman",
      instagram: "twila_gonzalez",
      twitter: "ofelia88"
    },
    guarantor: {
      full_name: "Angelique Barton",
      phone: 2347916068783,
      email: "angeliquebarton@greeker.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 73,
    organization: "Ontality",
    username: "Elvira922",
    email: "elvirabarton@ontality.com",
    phoneNumber: "(963) 401-2813",
    dateJoined: "2017-05-02",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 411899040,
      bank_name: "Sterling Bank"
    },
    personalInformation: {
      fullname: "Roseann Bradley",
      bvn: 65033296735,
      gender: "Female",
      marital_status: "Married",
      children: 1,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Retired",
      sector_of_employment: "Technology",
      duration_of_employment: "18 years",
      monthly_income: 72147,
      loan_repayment: 2064,
      office_email: "snider.avila@kidgrease.com"
    },
    social: {
      facebook: "fuentes.mcgee",
      instagram: "keith_freeman",
      twitter: "paul63"
    },
    guarantor: {
      full_name: "Frye Vang",
      phone: 2347972232328,
      email: "fryevang@kidgrease.com",
      relationship: "Friend"
    }
  },
  {
    id: 74,
    organization: "Confrenzy",
    username: "Gale826",
    email: "galevang@confrenzy.com",
    phoneNumber: "(920) 467-3923",
    dateJoined: "2015-01-10",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 246884069,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Campos Dunlap",
      bvn: 73098558547,
      gender: "Female",
      marital_status: "Widowed",
      children: 2,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Employed",
      sector_of_employment: "Government",
      duration_of_employment: "5 years",
      monthly_income: 118080,
      loan_repayment: 3778,
      office_email: "cherry.blanchard@kenegy.com"
    },
    social: {
      facebook: "eloise.bass",
      instagram: "freeman_webster",
      twitter: "dunlap97"
    },
    guarantor: {
      full_name: "Terra Grant",
      phone: 2347452269049,
      email: "terragrant@kenegy.com",
      relationship: "Friend"
    }
  },
  {
    id: 75,
    organization: "Radiantix",
    username: "Webb190",
    email: "webbgrant@radiantix.com",
    phoneNumber: "(898) 578-2261",
    dateJoined: "2014-11-19",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 206809258,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Letha Koch",
      bvn: 83885478127,
      gender: "Male",
      marital_status: "Divorced",
      children: 0,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Retired",
      sector_of_employment: "Construction",
      duration_of_employment: "3 years",
      monthly_income: 217197,
      loan_repayment: 2546,
      office_email: "dianne.christian@chorizon.com"
    },
    social: {
      facebook: "cole.wheeler",
      instagram: "louella_walters",
      twitter: "lauri26"
    },
    guarantor: {
      full_name: "Watkins Hayden",
      phone: 2347961327447,
      email: "watkinshayden@chorizon.com",
      relationship: "Family"
    }
  },
  {
    id: 76,
    organization: "Zaggle",
    username: "Amelia688",
    email: "ameliahayden@zaggle.com",
    phoneNumber: "(984) 485-3352",
    dateJoined: "2018-03-14",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 39473920,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Selma Frank",
      bvn: 40408146321,
      gender: "Female",
      marital_status: "Single",
      children: 1,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Student",
      sector_of_employment: "Construction",
      duration_of_employment: "20 years",
      monthly_income: 257829,
      loan_repayment: 4491,
      office_email: "lila.bates@toyletry.com"
    },
    social: {
      facebook: "corine.logan",
      instagram: "key_marquez",
      twitter: "vasquez88"
    },
    guarantor: {
      full_name: "Blankenship Lewis",
      phone: 2347149093223,
      email: "blankenshiplewis@toyletry.com",
      relationship: "Partner"
    }
  },
  {
    id: 77,
    organization: "Nutralab",
    username: "Gilbert723",
    email: "gilbertlewis@nutralab.com",
    phoneNumber: "(811) 573-3943",
    dateJoined: "2015-05-23",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 184961181,
      bank_name: "GTBank"
    },
    personalInformation: {
      fullname: "Addie Arnold",
      bvn: 30172780197,
      gender: "Male",
      marital_status: "Single",
      children: 5,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Employed",
      sector_of_employment: "Healthcare",
      duration_of_employment: "25 years",
      monthly_income: 257579,
      loan_repayment: 1873,
      office_email: "jewel.mueller@otherway.com"
    },
    social: {
      facebook: "barlow.wynn",
      instagram: "jefferson_crosby",
      twitter: "lamb27"
    },
    guarantor: {
      full_name: "Enid Saunders",
      phone: 2347538389988,
      email: "enidsaunders@otherway.com",
      relationship: "Family"
    }
  },
  {
    id: 78,
    organization: "Olucore",
    username: "Marylou415",
    email: "marylousaunders@olucore.com",
    phoneNumber: "(862) 431-3723",
    dateJoined: "2019-06-05",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 176524373,
      bank_name: "Sterling Bank"
    },
    personalInformation: {
      fullname: "Milagros Malone",
      bvn: 77928662217,
      gender: "Female",
      marital_status: "Divorced",
      children: 3,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Student",
      sector_of_employment: "Finance",
      duration_of_employment: "9 years",
      monthly_income: 479924,
      loan_repayment: 2169,
      office_email: "alana.bryan@quility.com"
    },
    social: {
      facebook: "parrish.blackburn",
      instagram: "estrada_tran",
      twitter: "short5"
    },
    guarantor: {
      full_name: "Kelli Lara",
      phone: 2348079616554,
      email: "kellilara@quility.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 79,
    organization: "Powernet",
    username: "Johnston354",
    email: "johnstonlara@powernet.com",
    phoneNumber: "(999) 599-2005",
    dateJoined: "2017-09-03",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 156347950,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Glover Lester",
      bvn: 60960230212,
      gender: "Female",
      marital_status: "Divorced",
      children: 2,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Student",
      sector_of_employment: "Construction",
      duration_of_employment: "16 years",
      monthly_income: 490091,
      loan_repayment: 3640,
      office_email: "sheila.wolfe@aquamate.com"
    },
    social: {
      facebook: "kinney.velazquez",
      instagram: "louisa_cote",
      twitter: "kent15"
    },
    guarantor: {
      full_name: "Rhonda Irwin",
      phone: 2348341485520,
      email: "rhondairwin@aquamate.com",
      relationship: "Partner"
    }
  },
  {
    id: 80,
    organization: "Exposa",
    username: "Earnestine575",
    email: "earnestineirwin@exposa.com",
    phoneNumber: "(924) 558-3796",
    dateJoined: "2015-03-05",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 351756,
      bank_name: "First Bank"
    },
    personalInformation: {
      fullname: "Myrtle Schneider",
      bvn: 37699445075,
      gender: "Female",
      marital_status: "Single",
      children: 1,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Student",
      sector_of_employment: "Agriculture",
      duration_of_employment: "34 years",
      monthly_income: 53690,
      loan_repayment: 2202,
      office_email: "murray.daniels@virxo.com"
    },
    social: {
      facebook: "howard.perez",
      instagram: "dejesus_britt",
      twitter: "adeline96"
    },
    guarantor: {
      full_name: "Beverly Barr",
      phone: 2347243627644,
      email: "beverlybarr@virxo.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 81,
    organization: "Portica",
    username: "Geraldine778",
    email: "geraldinebarr@portica.com",
    phoneNumber: "(969) 567-2905",
    dateJoined: "2015-10-27",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 40537032,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Wolf Wilcox",
      bvn: 53441822017,
      gender: "Female",
      marital_status: "Married",
      children: 5,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Unemployed",
      sector_of_employment: "Healthcare",
      duration_of_employment: "11 years",
      monthly_income: 231282,
      loan_repayment: 2880,
      office_email: "harrell.bernard@viasia.com"
    },
    social: {
      facebook: "heath.summers",
      instagram: "kirby_rosa",
      twitter: "boone15"
    },
    guarantor: {
      full_name: "Ellis Chambers",
      phone: 2348896671555,
      email: "ellischambers@viasia.com",
      relationship: "Partner"
    }
  },
  {
    id: 82,
    organization: "Enaut",
    username: "Opal500",
    email: "opalchambers@enaut.com",
    phoneNumber: "(851) 567-3859",
    dateJoined: "2023-06-05",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 423059515,
      bank_name: "Wema Bank"
    },
    personalInformation: {
      fullname: "Ashley Condo",
      bvn: 51925553102,
      gender: "Male",
      marital_status: "Divorced",
      children: 1,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Student",
      sector_of_employment: "Government",
      duration_of_employment: "7 years",
      monthly_income: 133163,
      loan_repayment: 4245,
      office_email: "woods.conway@talkola.com"
    },
    social: {
      facebook: "alicia.schultz",
      instagram: "burch_kramer",
      twitter: "melissa53"
    },
    guarantor: {
      full_name: "Kirsten Briggs",
      phone: 2348282336967,
      email: "kirstenbriggs@talkola.com",
      relationship: "Partner"
    }
  },
  {
    id: 83,
    organization: "Orboid",
    username: "Blevins269",
    email: "blevinsbriggs@orboid.com",
    phoneNumber: "(881) 513-3718",
    dateJoined: "2023-10-14",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 86861641,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Riley Rivera",
      bvn: 29355053836,
      gender: "Male",
      marital_status: "Widowed",
      children: 1,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Retired",
      sector_of_employment: "Education",
      duration_of_employment: "34 years",
      monthly_income: 178065,
      loan_repayment: 4203,
      office_email: "copeland.mcclain@oulu.com"
    },
    social: {
      facebook: "morales.jacobson",
      instagram: "imelda_obrien",
      twitter: "christine78"
    },
    guarantor: {
      full_name: "Kennedy Cruz",
      phone: 2348387200218,
      email: "kennedycruz@oulu.com",
      relationship: "Colleague"
    }
  },
  {
    id: 84,
    organization: "Rooforia",
    username: "Kasey619",
    email: "kaseycruz@rooforia.com",
    phoneNumber: "(813) 518-2170",
    dateJoined: "2015-01-15",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 9516867,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Gay Blevins",
      bvn: 98659700041,
      gender: "Female",
      marital_status: "Single",
      children: 1,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Retired",
      sector_of_employment: "Healthcare",
      duration_of_employment: "38 years",
      monthly_income: 463048,
      loan_repayment: 2919,
      office_email: "whitehead.chandler@tropoli.com"
    },
    social: {
      facebook: "elva.allen",
      instagram: "kristy_boone",
      twitter: "delores59"
    },
    guarantor: {
      full_name: "Harper Evans",
      phone: 2348480764343,
      email: "harperevans@tropoli.com",
      relationship: "Family"
    }
  },
  {
    id: 85,
    organization: "Ultrimax",
    username: "Katherine572",
    email: "katherineevans@ultrimax.com",
    phoneNumber: "(840) 596-2803",
    dateJoined: "2017-11-02",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 371461950,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Rosalind Steele",
      bvn: 88751609212,
      gender: "Female",
      marital_status: "Married",
      children: 4,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Student",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "11 years",
      monthly_income: 295462,
      loan_repayment: 3552,
      office_email: "maldonado.joyner@biospan.com"
    },
    social: {
      facebook: "mcclure.wells",
      instagram: "amie_downs",
      twitter: "malinda46"
    },
    guarantor: {
      full_name: "Lara Woods",
      phone: 2348460945927,
      email: "larawoods@biospan.com",
      relationship: "Colleague"
    }
  },
  {
    id: 86,
    organization: "Entogrok",
    username: "Livingston959",
    email: "livingstonwoods@entogrok.com",
    phoneNumber: "(954) 547-2984",
    dateJoined: "2021-12-01",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 453264634,
      bank_name: "GTBank"
    },
    personalInformation: {
      fullname: "Hazel Page",
      bvn: 81470619413,
      gender: "Female",
      marital_status: "Divorced",
      children: 5,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Self-employed",
      sector_of_employment: "Government",
      duration_of_employment: "22 years",
      monthly_income: 163523,
      loan_repayment: 3589,
      office_email: "browning.fleming@zentime.com"
    },
    social: {
      facebook: "silvia.gentry",
      instagram: "schmidt_wagner",
      twitter: "effie55"
    },
    guarantor: {
      full_name: "King Hinton",
      phone: 2347131030270,
      email: "kinghinton@zentime.com",
      relationship: "Family"
    }
  },
  {
    id: 87,
    organization: "Apextri",
    username: "Jamie738",
    email: "jamiehinton@apextri.com",
    phoneNumber: "(823) 458-3169",
    dateJoined: "2023-02-03",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 445833069,
      bank_name: "First Bank"
    },
    personalInformation: {
      fullname: "Vincent Mcgowan",
      bvn: 21413407885,
      gender: "Male",
      marital_status: "Married",
      children: 3,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Student",
      sector_of_employment: "Agriculture",
      duration_of_employment: "14 years",
      monthly_income: 225763,
      loan_repayment: 3368,
      office_email: "yang.hatfield@architax.com"
    },
    social: {
      facebook: "adela.mann",
      instagram: "marta_davis",
      twitter: "cheri70"
    },
    guarantor: {
      full_name: "Shelley Miller",
      phone: 2348397638266,
      email: "shelleymiller@architax.com",
      relationship: "Family"
    }
  },
  {
    id: 88,
    organization: "Olympix",
    username: "Rogers195",
    email: "rogersmiller@olympix.com",
    phoneNumber: "(938) 555-3200",
    dateJoined: "2015-10-03",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 155595402,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Lucy Chaney",
      bvn: 88527552394,
      gender: "Male",
      marital_status: "Widowed",
      children: 1,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Retired",
      sector_of_employment: "Education",
      duration_of_employment: "2 years",
      monthly_income: 271844,
      loan_repayment: 3218,
      office_email: "cora.guzman@lunchpod.com"
    },
    social: {
      facebook: "osborne.stout",
      instagram: "emma_ross",
      twitter: "byrd16"
    },
    guarantor: {
      full_name: "Goodwin Ayala",
      phone: 2347048976919,
      email: "goodwinayala@lunchpod.com",
      relationship: "Colleague"
    }
  },
  {
    id: 89,
    organization: "Aclima",
    username: "Jodi299",
    email: "jodiayala@aclima.com",
    phoneNumber: "(848) 405-2573",
    dateJoined: "2017-02-03",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 89797254,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Cecile Mccormick",
      bvn: 33714770883,
      gender: "Female",
      marital_status: "Married",
      children: 3,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Unemployed",
      sector_of_employment: "Retail",
      duration_of_employment: "33 years",
      monthly_income: 428998,
      loan_repayment: 4806,
      office_email: "trevino.higgins@fibrodyne.com"
    },
    social: {
      facebook: "pat.ballard",
      instagram: "hickman_ball",
      twitter: "franco74"
    },
    guarantor: {
      full_name: "Kelley Villarreal",
      phone: 2347162859101,
      email: "kelleyvillarreal@fibrodyne.com",
      relationship: "Family"
    }
  },
  {
    id: 90,
    organization: "Proflex",
    username: "Millicent454",
    email: "millicentvillarreal@proflex.com",
    phoneNumber: "(927) 565-2860",
    dateJoined: "2015-06-18",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 311760288,
      bank_name: "First Bank"
    },
    personalInformation: {
      fullname: "Leann Walls",
      bvn: 42471631458,
      gender: "Male",
      marital_status: "Married",
      children: 4,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Employed",
      sector_of_employment: "Construction",
      duration_of_employment: "19 years",
      monthly_income: 365974,
      loan_repayment: 4900,
      office_email: "moore.prince@wazzu.com"
    },
    social: {
      facebook: "alexandra.graham",
      instagram: "newman_scott",
      twitter: "margery24"
    },
    guarantor: {
      full_name: "Schultz Rush",
      phone: 2348449260271,
      email: "schultzrush@wazzu.com",
      relationship: "Partner"
    }
  },
  {
    id: 91,
    organization: "Nexgene",
    username: "Arnold285",
    email: "arnoldrush@nexgene.com",
    phoneNumber: "(845) 423-3777",
    dateJoined: "2022-06-10",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 183787524,
      bank_name: "Sterling Bank"
    },
    personalInformation: {
      fullname: "Montgomery Calderon",
      bvn: 33815905451,
      gender: "Male",
      marital_status: "Married",
      children: 1,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Employed",
      sector_of_employment: "Agriculture",
      duration_of_employment: "33 years",
      monthly_income: 205979,
      loan_repayment: 2066,
      office_email: "buck.garza@printspan.com"
    },
    social: {
      facebook: "knapp.mullins",
      instagram: "luella_humphrey",
      twitter: "fleming52"
    },
    guarantor: {
      full_name: "Kayla Huber",
      phone: 2348316606330,
      email: "kaylahuber@printspan.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 92,
    organization: "Tingles",
    username: "Todd192",
    email: "toddhuber@tingles.com",
    phoneNumber: "(956) 577-3342",
    dateJoined: "2022-08-30",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 161617590,
      bank_name: "First Bank"
    },
    personalInformation: {
      fullname: "Angelina Meyers",
      bvn: 73320759148,
      gender: "Female",
      marital_status: "Married",
      children: 2,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Self-employed",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "37 years",
      monthly_income: 193171,
      loan_repayment: 3267,
      office_email: "randi.alvarado@luxuria.com"
    },
    social: {
      facebook: "carver.morris",
      instagram: "alvarez_patrick",
      twitter: "cohen48"
    },
    guarantor: {
      full_name: "Rosetta Dale",
      phone: 2347193687973,
      email: "rosettadale@luxuria.com",
      relationship: "Family"
    }
  },
  {
    id: 93,
    organization: "Isologica",
    username: "Howe693",
    email: "howedale@isologica.com",
    phoneNumber: "(948) 417-2094",
    dateJoined: "2014-07-11",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 376565264,
      bank_name: "GTBank"
    },
    personalInformation: {
      fullname: "Gillespie Stevens",
      bvn: 93565908442,
      gender: "Male",
      marital_status: "Widowed",
      children: 1,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Student",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "38 years",
      monthly_income: 150955,
      loan_repayment: 2607,
      office_email: "mckenzie.talley@maineland.com"
    },
    social: {
      facebook: "haney.tanner",
      instagram: "briana_cooke",
      twitter: "mcmahon97"
    },
    guarantor: {
      full_name: "James Foreman",
      phone: 2348157319465,
      email: "jamesforeman@maineland.com",
      relationship: "Family"
    }
  },
  {
    id: 94,
    organization: "Decratex",
    username: "Edwina112",
    email: "edwinaforeman@decratex.com",
    phoneNumber: "(904) 511-3010",
    dateJoined: "2020-11-29",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 349355268,
      bank_name: "First Bank"
    },
    personalInformation: {
      fullname: "Gay Sparks",
      bvn: 88710067640,
      gender: "Female",
      marital_status: "Married",
      children: 2,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Self-employed",
      sector_of_employment: "Finance",
      duration_of_employment: "29 years",
      monthly_income: 62139,
      loan_repayment: 4569,
      office_email: "ingrid.hahn@isopop.com"
    },
    social: {
      facebook: "valenzuela.raymond",
      instagram: "nettie_mcdonald",
      twitter: "ila9"
    },
    guarantor: {
      full_name: "Lydia Peters",
      phone: 2348487892062,
      email: "lydiapeters@isopop.com",
      relationship: "Colleague"
    }
  },
  {
    id: 95,
    organization: "Daido",
    username: "Lori868",
    email: "loripeters@daido.com",
    phoneNumber: "(828) 570-3016",
    dateJoined: "2016-05-02",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 250801276,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Jo Barry",
      bvn: 20436764465,
      gender: "Female",
      marital_status: "Widowed",
      children: 2,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Retired",
      sector_of_employment: "Agriculture",
      duration_of_employment: "35 years",
      monthly_income: 209057,
      loan_repayment: 3240,
      office_email: "ochoa.harper@nspire.com"
    },
    social: {
      facebook: "grimes.morrow",
      instagram: "henderson_pena",
      twitter: "sharron22"
    },
    guarantor: {
      full_name: "Blanchard Fuller",
      phone: 2348358637675,
      email: "blanchardfuller@nspire.com",
      relationship: "Partner"
    }
  },
  {
    id: 96,
    organization: "Yurture",
    username: "Durham530",
    email: "durhamfuller@yurture.com",
    phoneNumber: "(831) 523-2565",
    dateJoined: "2018-08-16",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 106920632,
      bank_name: "First Bank"
    },
    personalInformation: {
      fullname: "Velazquez Adams",
      bvn: 11496134889,
      gender: "Female",
      marital_status: "Widowed",
      children: 5,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Retired",
      sector_of_employment: "Retail",
      duration_of_employment: "30 years",
      monthly_income: 111162,
      loan_repayment: 2265,
      office_email: "therese.sherman@orbiflex.com"
    },
    social: {
      facebook: "irwin.herring",
      instagram: "brigitte_french",
      twitter: "rodriguez25"
    },
    guarantor: {
      full_name: "Palmer Ortiz",
      phone: 2348405467930,
      email: "palmerortiz@orbiflex.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 97,
    organization: "Snips",
    username: "Singleton464",
    email: "singletonortiz@snips.com",
    phoneNumber: "(958) 474-2904",
    dateJoined: "2021-07-10",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 77314860,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Horton Morin",
      bvn: 71267221779,
      gender: "Female",
      marital_status: "Divorced",
      children: 3,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Employed",
      sector_of_employment: "Agriculture",
      duration_of_employment: "39 years",
      monthly_income: 321715,
      loan_repayment: 2956,
      office_email: "gayle.hancock@remotion.com"
    },
    social: {
      facebook: "audra.fry",
      instagram: "brittney_mckee",
      twitter: "barbra11"
    },
    guarantor: {
      full_name: "Mavis Alvarez",
      phone: 2348716915907,
      email: "mavisalvarez@remotion.com",
      relationship: "Partner"
    }
  },
  {
    id: 98,
    organization: "Zoid",
    username: "Bernadine394",
    email: "bernadinealvarez@zoid.com",
    phoneNumber: "(991) 461-3391",
    dateJoined: "2016-10-06",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 481123858,
      bank_name: "Wema Bank"
    },
    personalInformation: {
      fullname: "Bettye Mckenzie",
      bvn: 72741594169,
      gender: "Female",
      marital_status: "Single",
      children: 2,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Student",
      sector_of_employment: "Education",
      duration_of_employment: "34 years",
      monthly_income: 305847,
      loan_repayment: 2330,
      office_email: "florence.rowe@songbird.com"
    },
    social: {
      facebook: "barker.gould",
      instagram: "stephens_england",
      twitter: "jenkins63"
    },
    guarantor: {
      full_name: "Curtis Bird",
      phone: 2348275682282,
      email: "curtisbird@songbird.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 99,
    organization: "Bleendot",
    username: "Pruitt882",
    email: "pruittbird@bleendot.com",
    phoneNumber: "(822) 417-2503",
    dateJoined: "2021-09-17",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 310268571,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Marla Holmes",
      bvn: 71190243802,
      gender: "Female",
      marital_status: "Divorced",
      children: 5,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Student",
      sector_of_employment: "Education",
      duration_of_employment: "27 years",
      monthly_income: 117675,
      loan_repayment: 1975,
      office_email: "leanne.bolton@immunics.com"
    },
    social: {
      facebook: "karin.lloyd",
      instagram: "rosario_heath",
      twitter: "blake92"
    },
    guarantor: {
      full_name: "Coleen Riggs",
      phone: 2348153900247,
      email: "coleenriggs@immunics.com",
      relationship: "Family"
    }
  },
  {
    id: 100,
    organization: "Zillacon",
    username: "Bradford953",
    email: "bradfordriggs@zillacon.com",
    phoneNumber: "(889) 595-2886",
    dateJoined: "2021-11-15",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 67046455,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Le Tate",
      bvn: 81770404872,
      gender: "Male",
      marital_status: "Widowed",
      children: 0,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Student",
      sector_of_employment: "Government",
      duration_of_employment: "3 years",
      monthly_income: 456422,
      loan_repayment: 2590,
      office_email: "lena.peterson@eternis.com"
    },
    social: {
      facebook: "dorothy.knight",
      instagram: "veronica_zimmerman",
      twitter: "sallie43"
    },
    guarantor: {
      full_name: "Hubbard Vaughn",
      phone: 2347109413839,
      email: "hubbardvaughn@eternis.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 101,
    organization: "Obones",
    username: "Hansen246",
    email: "hansenvaughn@obones.com",
    phoneNumber: "(818) 457-2689",
    dateJoined: "2021-08-01",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 44209482,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Spence Beck",
      bvn: 55327491573,
      gender: "Female",
      marital_status: "Married",
      children: 5,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Unemployed",
      sector_of_employment: "Construction",
      duration_of_employment: "17 years",
      monthly_income: 461075,
      loan_repayment: 3496,
      office_email: "dollie.ramos@incubus.com"
    },
    social: {
      facebook: "young.farley",
      instagram: "darcy_valdez",
      twitter: "tracie2"
    },
    guarantor: {
      full_name: "Hughes Berger",
      phone: 2347960924329,
      email: "hughesberger@incubus.com",
      relationship: "Family"
    }
  },
  {
    id: 102,
    organization: "Comtent",
    username: "Garner451",
    email: "garnerberger@comtent.com",
    phoneNumber: "(967) 514-2179",
    dateJoined: "2019-08-04",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 140075393,
      bank_name: "Sterling Bank"
    },
    personalInformation: {
      fullname: "Cortez Baxter",
      bvn: 67376805227,
      gender: "Female",
      marital_status: "Married",
      children: 5,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Unemployed",
      sector_of_employment: "Construction",
      duration_of_employment: "29 years",
      monthly_income: 327427,
      loan_repayment: 3627,
      office_email: "chan.wood@polarium.com"
    },
    social: {
      facebook: "cantrell.frye",
      instagram: "ross_harris",
      twitter: "taylor17"
    },
    guarantor: {
      full_name: "Tiffany Odom",
      phone: 2348806434866,
      email: "tiffanyodom@polarium.com",
      relationship: "Family"
    }
  },
  {
    id: 103,
    organization: "Gynko",
    username: "Alexander708",
    email: "alexanderodom@gynko.com",
    phoneNumber: "(877) 582-3911",
    dateJoined: "2020-06-24",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 191105779,
      bank_name: "Sterling Bank"
    },
    personalInformation: {
      fullname: "Walter Shelton",
      bvn: 21627506944,
      gender: "Male",
      marital_status: "Divorced",
      children: 1,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Employed",
      sector_of_employment: "Finance",
      duration_of_employment: "12 years",
      monthly_income: 123362,
      loan_repayment: 4786,
      office_email: "dillard.mason@fishland.com"
    },
    social: {
      facebook: "hodges.hood",
      instagram: "rachelle_barron",
      twitter: "matthews84"
    },
    guarantor: {
      full_name: "Munoz Duran",
      phone: 2347385539639,
      email: "munozduran@fishland.com",
      relationship: "Friend"
    }
  },
  {
    id: 104,
    organization: "Acusage",
    username: "Tammie470",
    email: "tammieduran@acusage.com",
    phoneNumber: "(823) 538-2746",
    dateJoined: "2024-05-19",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 103029903,
      bank_name: "Sterling Bank"
    },
    personalInformation: {
      fullname: "Conway Mitchell",
      bvn: 30862214623,
      gender: "Male",
      marital_status: "Widowed",
      children: 0,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Unemployed",
      sector_of_employment: "Agriculture",
      duration_of_employment: "2 years",
      monthly_income: 318688,
      loan_repayment: 3526,
      office_email: "wynn.hensley@inear.com"
    },
    social: {
      facebook: "wanda.henson",
      instagram: "fields_campbell",
      twitter: "hopkins24"
    },
    guarantor: {
      full_name: "Dora Rice",
      phone: 2348586068953,
      email: "dorarice@inear.com",
      relationship: "Partner"
    }
  },
  {
    id: 105,
    organization: "Aquasure",
    username: "Catalina610",
    email: "catalinarice@aquasure.com",
    phoneNumber: "(974) 462-2139",
    dateJoined: "2015-11-21",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 25483201,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Salinas Petersen",
      bvn: 46858643601,
      gender: "Female",
      marital_status: "Widowed",
      children: 3,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Employed",
      sector_of_employment: "Technology",
      duration_of_employment: "39 years",
      monthly_income: 129987,
      loan_repayment: 3990,
      office_email: "cummings.shields@viagrand.com"
    },
    social: {
      facebook: "barnes.hampton",
      instagram: "tina_hardy",
      twitter: "olsen7"
    },
    guarantor: {
      full_name: "Suzette Delacruz",
      phone: 2348387397323,
      email: "suzettedelacruz@viagrand.com",
      relationship: "Partner"
    }
  },
  {
    id: 106,
    organization: "Telequiet",
    username: "Lloyd606",
    email: "lloyddelacruz@telequiet.com",
    phoneNumber: "(861) 413-3395",
    dateJoined: "2017-05-10",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 240137625,
      bank_name: "GTBank"
    },
    personalInformation: {
      fullname: "Ilene Whitfield",
      bvn: 97081465178,
      gender: "Female",
      marital_status: "Widowed",
      children: 2,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Student",
      sector_of_employment: "Healthcare",
      duration_of_employment: "22 years",
      monthly_income: 274783,
      loan_repayment: 4243,
      office_email: "eliza.hyde@eclipto.com"
    },
    social: {
      facebook: "rebekah.randolph",
      instagram: "miles_baker",
      twitter: "cote26"
    },
    guarantor: {
      full_name: "Reyes Brewer",
      phone: 2347852262320,
      email: "reyesbrewer@eclipto.com",
      relationship: "Family"
    }
  },
  {
    id: 107,
    organization: "Nixelt",
    username: "Nanette272",
    email: "nanettebrewer@nixelt.com",
    phoneNumber: "(888) 472-2966",
    dateJoined: "2019-06-05",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 226772477,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Tyson Roth",
      bvn: 70842750144,
      gender: "Male",
      marital_status: "Widowed",
      children: 4,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Retired",
      sector_of_employment: "Construction",
      duration_of_employment: "12 years",
      monthly_income: 116832,
      loan_repayment: 3343,
      office_email: "luisa.fox@bicol.com"
    },
    social: {
      facebook: "colette.mcleod",
      instagram: "murphy_cooley",
      twitter: "shelton70"
    },
    guarantor: {
      full_name: "Maribel Lawrence",
      phone: 2347195264537,
      email: "maribellawrence@bicol.com",
      relationship: "Partner"
    }
  },
  {
    id: 108,
    organization: "Artiq",
    username: "Amy843",
    email: "amylawrence@artiq.com",
    phoneNumber: "(896) 573-3308",
    dateJoined: "2014-05-07",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 207282375,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Hurley Jarvis",
      bvn: 70696574582,
      gender: "Male",
      marital_status: "Divorced",
      children: 4,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Student",
      sector_of_employment: "Technology",
      duration_of_employment: "5 years",
      monthly_income: 416920,
      loan_repayment: 1976,
      office_email: "valdez.cannon@zillidium.com"
    },
    social: {
      facebook: "vera.moss",
      instagram: "roth_terrell",
      twitter: "celia42"
    },
    guarantor: {
      full_name: "Summers Dennis",
      phone: 2347908614391,
      email: "summersdennis@zillidium.com",
      relationship: "Colleague"
    }
  },
  {
    id: 109,
    organization: "Netplax",
    username: "Harriet837",
    email: "harrietdennis@netplax.com",
    phoneNumber: "(899) 477-3759",
    dateJoined: "2022-04-26",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 407793375,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Hill Cline",
      bvn: 43335403772,
      gender: "Male",
      marital_status: "Divorced",
      children: 5,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Self-employed",
      sector_of_employment: "Education",
      duration_of_employment: "13 years",
      monthly_income: 205916,
      loan_repayment: 3369,
      office_email: "mcmillan.cervantes@photobin.com"
    },
    social: {
      facebook: "muriel.santiago",
      instagram: "gomez_rodgers",
      twitter: "lauren14"
    },
    guarantor: {
      full_name: "Shelly Palmer",
      phone: 2347385771728,
      email: "shellypalmer@photobin.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 110,
    organization: "Prismatic",
    username: "Mona156",
    email: "monapalmer@prismatic.com",
    phoneNumber: "(813) 593-2400",
    dateJoined: "2015-04-30",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 293300247,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Mercado Oneil",
      bvn: 38536773971,
      gender: "Male",
      marital_status: "Married",
      children: 5,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Employed",
      sector_of_employment: "Construction",
      duration_of_employment: "29 years",
      monthly_income: 458745,
      loan_repayment: 4145,
      office_email: "perkins.banks@speedbolt.com"
    },
    social: {
      facebook: "chang.hester",
      instagram: "chrystal_reyes",
      twitter: "dixie92"
    },
    guarantor: {
      full_name: "Beverley Butler",
      phone: 2348763301693,
      email: "beverleybutler@speedbolt.com",
      relationship: "Partner"
    }
  },
  {
    id: 111,
    organization: "Xiix",
    username: "Michael602",
    email: "michaelbutler@xiix.com",
    phoneNumber: "(819) 569-3296",
    dateJoined: "2016-08-16",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 159473199,
      bank_name: "Wema Bank"
    },
    personalInformation: {
      fullname: "Hale Garcia",
      bvn: 33719375886,
      gender: "Female",
      marital_status: "Divorced",
      children: 1,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Employed",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "27 years",
      monthly_income: 150672,
      loan_repayment: 2227,
      office_email: "bonita.hogan@bleeko.com"
    },
    social: {
      facebook: "bryant.camacho",
      instagram: "ferguson_stark",
      twitter: "sloan97"
    },
    guarantor: {
      full_name: "Tara Ramirez",
      phone: 2348232219450,
      email: "tararamirez@bleeko.com",
      relationship: "Friend"
    }
  },
  {
    id: 112,
    organization: "Orbin",
    username: "Mcpherson297",
    email: "mcphersonramirez@orbin.com",
    phoneNumber: "(899) 511-3888",
    dateJoined: "2023-03-14",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 251261972,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Gray Whitney",
      bvn: 26014937090,
      gender: "Male",
      marital_status: "Married",
      children: 1,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Student",
      sector_of_employment: "Agriculture",
      duration_of_employment: "21 years",
      monthly_income: 150559,
      loan_repayment: 3844,
      office_email: "kelly.buchanan@zolar.com"
    },
    social: {
      facebook: "lula.burton",
      instagram: "carney_harmon",
      twitter: "petersen26"
    },
    guarantor: {
      full_name: "Johanna Fitzpatrick",
      phone: 2347356825175,
      email: "johannafitzpatrick@zolar.com",
      relationship: "Friend"
    }
  },
  {
    id: 113,
    organization: "Exoteric",
    username: "Alisha296",
    email: "alishafitzpatrick@exoteric.com",
    phoneNumber: "(954) 557-2713",
    dateJoined: "2017-12-12",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 78879736,
      bank_name: "Wema Bank"
    },
    personalInformation: {
      fullname: "Ester Fischer",
      bvn: 86044114635,
      gender: "Female",
      marital_status: "Divorced",
      children: 1,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Self-employed",
      sector_of_employment: "Healthcare",
      duration_of_employment: "7 years",
      monthly_income: 438390,
      loan_repayment: 2135,
      office_email: "shelia.cherry@danja.com"
    },
    social: {
      facebook: "page.luna",
      instagram: "margret_crawford",
      twitter: "marietta55"
    },
    guarantor: {
      full_name: "Alba Hurley",
      phone: 2347461367130,
      email: "albahurley@danja.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 114,
    organization: "Quonata",
    username: "Brandi406",
    email: "brandihurley@quonata.com",
    phoneNumber: "(988) 431-3214",
    dateJoined: "2019-01-11",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 14703722,
      bank_name: "UBA"
    },
    personalInformation: {
      fullname: "Sharp Frazier",
      bvn: 68286830972,
      gender: "Male",
      marital_status: "Married",
      children: 1,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Unemployed",
      sector_of_employment: "Finance",
      duration_of_employment: "33 years",
      monthly_income: 141934,
      loan_repayment: 3546,
      office_email: "minerva.owens@ginkle.com"
    },
    social: {
      facebook: "gabrielle.robles",
      instagram: "maria_acosta",
      twitter: "carrie23"
    },
    guarantor: {
      full_name: "Lewis Davenport",
      phone: 2347567153322,
      email: "lewisdavenport@ginkle.com",
      relationship: "Family"
    }
  },
  {
    id: 115,
    organization: "Naxdis",
    username: "Pugh657",
    email: "pughdavenport@naxdis.com",
    phoneNumber: "(990) 595-2718",
    dateJoined: "2024-05-17",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 378888048,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Bentley Hawkins",
      bvn: 12261153011,
      gender: "Male",
      marital_status: "Widowed",
      children: 0,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Unemployed",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "24 years",
      monthly_income: 282956,
      loan_repayment: 2776,
      office_email: "debbie.mcconnell@jetsilk.com"
    },
    social: {
      facebook: "velez.harrell",
      instagram: "baker_gordon",
      twitter: "lea8"
    },
    guarantor: {
      full_name: "Roman Knox",
      phone: 2348696918629,
      email: "romanknox@jetsilk.com",
      relationship: "Partner"
    }
  },
  {
    id: 116,
    organization: "Bristo",
    username: "Helena938",
    email: "helenaknox@bristo.com",
    phoneNumber: "(845) 416-3789",
    dateJoined: "2021-05-19",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 68084030,
      bank_name: "Sterling Bank"
    },
    personalInformation: {
      fullname: "Hendricks Fields",
      bvn: 21229960987,
      gender: "Male",
      marital_status: "Widowed",
      children: 1,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Employed",
      sector_of_employment: "Agriculture",
      duration_of_employment: "7 years",
      monthly_income: 336829,
      loan_repayment: 3984,
      office_email: "hendrix.sharpe@makingway.com"
    },
    social: {
      facebook: "duncan.anthony",
      instagram: "barnett_bridges",
      twitter: "cooper20"
    },
    guarantor: {
      full_name: "Sharlene Phelps",
      phone: 2348722383572,
      email: "sharlenephelps@makingway.com",
      relationship: "Partner"
    }
  },
  {
    id: 117,
    organization: "Fanfare",
    username: "Cathryn842",
    email: "cathrynphelps@fanfare.com",
    phoneNumber: "(834) 416-3510",
    dateJoined: "2016-12-31",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 198600151,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Macias Chan",
      bvn: 86355929424,
      gender: "Female",
      marital_status: "Married",
      children: 1,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Employed",
      sector_of_employment: "Government",
      duration_of_employment: "28 years",
      monthly_income: 281943,
      loan_repayment: 2910,
      office_email: "weiss.shaffer@bunga.com"
    },
    social: {
      facebook: "james.pennington",
      instagram: "sweeney_strong",
      twitter: "wilma37"
    },
    guarantor: {
      full_name: "Geneva Perry",
      phone: 2347405426946,
      email: "genevaperry@bunga.com",
      relationship: "Friend"
    }
  },
  {
    id: 118,
    organization: "Junipoor",
    username: "Sondra438",
    email: "sondraperry@junipoor.com",
    phoneNumber: "(983) 483-3459",
    dateJoined: "2024-08-04",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 144727213,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Rebecca Parsons",
      bvn: 73023964459,
      gender: "Female",
      marital_status: "Single",
      children: 4,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Employed",
      sector_of_employment: "Construction",
      duration_of_employment: "9 years",
      monthly_income: 309767,
      loan_repayment: 3537,
      office_email: "klein.woodward@exospeed.com"
    },
    social: {
      facebook: "osborn.porter",
      instagram: "lawson_pruitt",
      twitter: "bettie69"
    },
    guarantor: {
      full_name: "Peck Yang",
      phone: 2347835853450,
      email: "peckyang@exospeed.com",
      relationship: "Friend"
    }
  },
  {
    id: 119,
    organization: "Hatology",
    username: "Deann598",
    email: "deannyang@hatology.com",
    phoneNumber: "(875) 443-3715",
    dateJoined: "2019-05-20",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 173820406,
      bank_name: "Wema Bank"
    },
    personalInformation: {
      fullname: "George Stein",
      bvn: 34649331902,
      gender: "Male",
      marital_status: "Single",
      children: 4,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Employed",
      sector_of_employment: "Agriculture",
      duration_of_employment: "26 years",
      monthly_income: 352058,
      loan_repayment: 4482,
      office_email: "nola.cotton@liquicom.com"
    },
    social: {
      facebook: "pamela.castillo",
      instagram: "washington_conley",
      twitter: "townsend8"
    },
    guarantor: {
      full_name: "Mayer Bishop",
      phone: 2348314896029,
      email: "mayerbishop@liquicom.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 120,
    organization: "Xeronk",
    username: "Frederick872",
    email: "frederickbishop@xeronk.com",
    phoneNumber: "(893) 565-2939",
    dateJoined: "2019-06-08",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 444047851,
      bank_name: "GTBank"
    },
    personalInformation: {
      fullname: "Courtney Walsh",
      bvn: 18420949001,
      gender: "Male",
      marital_status: "Widowed",
      children: 5,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Employed",
      sector_of_employment: "Healthcare",
      duration_of_employment: "34 years",
      monthly_income: 354046,
      loan_repayment: 2431,
      office_email: "farrell.bailey@illumity.com"
    },
    social: {
      facebook: "corina.salas",
      instagram: "pam_bond",
      twitter: "kathie65"
    },
    guarantor: {
      full_name: "Farley Flowers",
      phone: 2347102171870,
      email: "farleyflowers@illumity.com",
      relationship: "Partner"
    }
  },
  {
    id: 121,
    organization: "Eclipsent",
    username: "Angelita402",
    email: "angelitaflowers@eclipsent.com",
    phoneNumber: "(883) 559-3718",
    dateJoined: "2014-09-28",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 325043160,
      bank_name: "UBA"
    },
    personalInformation: {
      fullname: "Contreras Neal",
      bvn: 62782551551,
      gender: "Male",
      marital_status: "Widowed",
      children: 3,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Retired",
      sector_of_employment: "Technology",
      duration_of_employment: "27 years",
      monthly_income: 283316,
      loan_repayment: 3331,
      office_email: "angeline.lambert@accidency.com"
    },
    social: {
      facebook: "greer.schwartz",
      instagram: "nelson_osborn",
      twitter: "hammond16"
    },
    guarantor: {
      full_name: "Laurie Dotson",
      phone: 2348995774123,
      email: "lauriedotson@accidency.com",
      relationship: "Colleague"
    }
  },
  {
    id: 122,
    organization: "Kineticut",
    username: "Herminia492",
    email: "herminiadotson@kineticut.com",
    phoneNumber: "(876) 430-3980",
    dateJoined: "2023-01-31",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 59458873,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Boyd Singleton",
      bvn: 34799981353,
      gender: "Male",
      marital_status: "Married",
      children: 3,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Unemployed",
      sector_of_employment: "Finance",
      duration_of_employment: "35 years",
      monthly_income: 416388,
      loan_repayment: 2569,
      office_email: "leon.robbins@menbrain.com"
    },
    social: {
      facebook: "ora.morales",
      instagram: "fox_blair",
      twitter: "barron20"
    },
    guarantor: {
      full_name: "Laura Weiss",
      phone: 2348234119143,
      email: "lauraweiss@menbrain.com",
      relationship: "Partner"
    }
  },
  {
    id: 123,
    organization: "Frolix",
    username: "Emerson325",
    email: "emersonweiss@frolix.com",
    phoneNumber: "(877) 598-3676",
    dateJoined: "2019-10-25",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 236994385,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Mooney Cantu",
      bvn: 54000289154,
      gender: "Female",
      marital_status: "Married",
      children: 2,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Unemployed",
      sector_of_employment: "Construction",
      duration_of_employment: "37 years",
      monthly_income: 382558,
      loan_repayment: 3042,
      office_email: "pansy.guy@nitracyr.com"
    },
    social: {
      facebook: "kendra.moody",
      instagram: "garcia_russo",
      twitter: "cruz28"
    },
    guarantor: {
      full_name: "Drake Oneal",
      phone: 2348020738309,
      email: "drakeoneal@nitracyr.com",
      relationship: "Colleague"
    }
  },
  {
    id: 124,
    organization: "Emtrak",
    username: "Carter626",
    email: "carteroneal@emtrak.com",
    phoneNumber: "(857) 436-3732",
    dateJoined: "2018-04-21",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 216526391,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Erika Brennan",
      bvn: 53702978030,
      gender: "Female",
      marital_status: "Divorced",
      children: 3,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Self-employed",
      sector_of_employment: "Finance",
      duration_of_employment: "14 years",
      monthly_income: 288768,
      loan_repayment: 3654,
      office_email: "paulette.campos@balooba.com"
    },
    social: {
      facebook: "flora.johnson",
      instagram: "english_wright",
      twitter: "norma70"
    },
    guarantor: {
      full_name: "Salazar Burks",
      phone: 2348151277261,
      email: "salazarburks@balooba.com",
      relationship: "Friend"
    }
  },
  {
    id: 125,
    organization: "Tasmania",
    username: "Harding528",
    email: "hardingburks@tasmania.com",
    phoneNumber: "(835) 434-2818",
    dateJoined: "2015-06-12",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 284908540,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Paula Mcmahon",
      bvn: 59210283316,
      gender: "Female",
      marital_status: "Divorced",
      children: 1,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Unemployed",
      sector_of_employment: "Education",
      duration_of_employment: "33 years",
      monthly_income: 154608,
      loan_repayment: 3633,
      office_email: "mcintosh.hodges@accupharm.com"
    },
    social: {
      facebook: "rhoda.sheppard",
      instagram: "madge_alexander",
      twitter: "gina91"
    },
    guarantor: {
      full_name: "Navarro Atkins",
      phone: 2348224396434,
      email: "navarroatkins@accupharm.com",
      relationship: "Family"
    }
  },
  {
    id: 126,
    organization: "Opticon",
    username: "Reyna688",
    email: "reynaatkins@opticon.com",
    phoneNumber: "(904) 543-2827",
    dateJoined: "2015-05-19",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 123655116,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Rachael Farrell",
      bvn: 77620953846,
      gender: "Female",
      marital_status: "Divorced",
      children: 4,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Retired",
      sector_of_employment: "Finance",
      duration_of_employment: "28 years",
      monthly_income: 125208,
      loan_repayment: 2405,
      office_email: "latasha.hamilton@kongene.com"
    },
    social: {
      facebook: "kim.glover",
      instagram: "lilly_maddox",
      twitter: "mattie15"
    },
    guarantor: {
      full_name: "Lacey Lyons",
      phone: 2347574614574,
      email: "laceylyons@kongene.com",
      relationship: "Partner"
    }
  },
  {
    id: 127,
    organization: "Konnect",
    username: "Jan408",
    email: "janlyons@konnect.com",
    phoneNumber: "(870) 544-3365",
    dateJoined: "2018-09-17",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 80289920,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Burks Sims",
      bvn: 25140183121,
      gender: "Male",
      marital_status: "Widowed",
      children: 3,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Employed",
      sector_of_employment: "Construction",
      duration_of_employment: "2 years",
      monthly_income: 303477,
      loan_repayment: 4751,
      office_email: "bullock.francis@netagy.com"
    },
    social: {
      facebook: "hodge.trujillo",
      instagram: "carolina_gaines",
      twitter: "grace49"
    },
    guarantor: {
      full_name: "Charlene Frederick",
      phone: 2348461124286,
      email: "charlenefrederick@netagy.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 128,
    organization: "Dancity",
    username: "Elizabeth762",
    email: "elizabethfrederick@dancity.com",
    phoneNumber: "(838) 549-3346",
    dateJoined: "2021-06-18",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 321192083,
      bank_name: "UBA"
    },
    personalInformation: {
      fullname: "Russo Alford",
      bvn: 93155114982,
      gender: "Female",
      marital_status: "Married",
      children: 3,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Self-employed",
      sector_of_employment: "Construction",
      duration_of_employment: "27 years",
      monthly_income: 337565,
      loan_repayment: 3260,
      office_email: "jacquelyn.beasley@zytrek.com"
    },
    social: {
      facebook: "stuart.acevedo",
      instagram: "marci_eaton",
      twitter: "tommie22"
    },
    guarantor: {
      full_name: "Vinson Mendez",
      phone: 2347264749678,
      email: "vinsonmendez@zytrek.com",
      relationship: "Partner"
    }
  },
  {
    id: 129,
    organization: "Geekmosis",
    username: "Reese415",
    email: "reesemendez@geekmosis.com",
    phoneNumber: "(869) 443-2236",
    dateJoined: "2018-07-31",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 404576549,
      bank_name: "Sterling Bank"
    },
    personalInformation: {
      fullname: "Marlene Solis",
      bvn: 49875303685,
      gender: "Female",
      marital_status: "Married",
      children: 3,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Retired",
      sector_of_employment: "Government",
      duration_of_employment: "3 years",
      monthly_income: 412970,
      loan_repayment: 4183,
      office_email: "soto.glenn@ultrasure.com"
    },
    social: {
      facebook: "moody.lynn",
      instagram: "serena_gallegos",
      twitter: "nicole82"
    },
    guarantor: {
      full_name: "Nicholson Sawyer",
      phone: 2347484396458,
      email: "nicholsonsawyer@ultrasure.com",
      relationship: "Partner"
    }
  },
  {
    id: 130,
    organization: "Strezzo",
    username: "Becker541",
    email: "beckersawyer@strezzo.com",
    phoneNumber: "(932) 589-2102",
    dateJoined: "2017-09-13",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 177968177,
      bank_name: "UBA"
    },
    personalInformation: {
      fullname: "Joyce Burt",
      bvn: 20037196868,
      gender: "Male",
      marital_status: "Single",
      children: 1,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Self-employed",
      sector_of_employment: "Construction",
      duration_of_employment: "34 years",
      monthly_income: 419893,
      loan_repayment: 2061,
      office_email: "barber.bryant@brainquil.com"
    },
    social: {
      facebook: "hicks.melendez",
      instagram: "everett_hendricks",
      twitter: "kline48"
    },
    guarantor: {
      full_name: "Maureen Duffy",
      phone: 2347047454712,
      email: "maureenduffy@brainquil.com",
      relationship: "Family"
    }
  },
  {
    id: 131,
    organization: "Paprikut",
    username: "Marva956",
    email: "marvaduffy@paprikut.com",
    phoneNumber: "(810) 487-2724",
    dateJoined: "2022-01-19",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 50190967,
      bank_name: "GTBank"
    },
    personalInformation: {
      fullname: "Garza Glass",
      bvn: 13239331125,
      gender: "Male",
      marital_status: "Widowed",
      children: 0,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Student",
      sector_of_employment: "Retail",
      duration_of_employment: "12 years",
      monthly_income: 158667,
      loan_repayment: 3882,
      office_email: "ruby.henry@schoolio.com"
    },
    social: {
      facebook: "beasley.potts",
      instagram: "cristina_poole",
      twitter: "lessie87"
    },
    guarantor: {
      full_name: "Tucker Ochoa",
      phone: 2347652962812,
      email: "tuckerochoa@schoolio.com",
      relationship: "Family"
    }
  },
  {
    id: 132,
    organization: "Phormula",
    username: "Houston696",
    email: "houstonochoa@phormula.com",
    phoneNumber: "(833) 497-3934",
    dateJoined: "2015-03-19",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 1544153,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Rhodes Cabrera",
      bvn: 34854475876,
      gender: "Female",
      marital_status: "Married",
      children: 0,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Retired",
      sector_of_employment: "Healthcare",
      duration_of_employment: "5 years",
      monthly_income: 309544,
      loan_repayment: 4215,
      office_email: "dyer.reid@zanymax.com"
    },
    social: {
      facebook: "mcknight.larsen",
      instagram: "rivers_green",
      twitter: "rowe85"
    },
    guarantor: {
      full_name: "Benton Pope",
      phone: 2347664302448,
      email: "bentonpope@zanymax.com",
      relationship: "Friend"
    }
  },
  {
    id: 133,
    organization: "Pyramia",
    username: "Diann567",
    email: "diannpope@pyramia.com",
    phoneNumber: "(845) 492-2403",
    dateJoined: "2019-08-24",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 326430666,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Torres Le",
      bvn: 78870194993,
      gender: "Male",
      marital_status: "Widowed",
      children: 4,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Student",
      sector_of_employment: "Construction",
      duration_of_employment: "22 years",
      monthly_income: 302785,
      loan_repayment: 3126,
      office_email: "betsy.foley@pyramis.com"
    },
    social: {
      facebook: "kara.hubbard",
      instagram: "marisa_mclaughlin",
      twitter: "manuela88"
    },
    guarantor: {
      full_name: "Frazier Fisher",
      phone: 2348162464860,
      email: "frazierfisher@pyramis.com",
      relationship: "Partner"
    }
  },
  {
    id: 134,
    organization: "Icology",
    username: "Lynette760",
    email: "lynettefisher@icology.com",
    phoneNumber: "(992) 530-2827",
    dateJoined: "2014-09-18",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 278684904,
      bank_name: "UBA"
    },
    personalInformation: {
      fullname: "Herman Finley",
      bvn: 34223153518,
      gender: "Female",
      marital_status: "Married",
      children: 1,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Self-employed",
      sector_of_employment: "Finance",
      duration_of_employment: "24 years",
      monthly_income: 300380,
      loan_repayment: 4741,
      office_email: "wiggins.clarke@ontagene.com"
    },
    social: {
      facebook: "lillie.huffman",
      instagram: "morse_vega",
      twitter: "alfreda67"
    },
    guarantor: {
      full_name: "Tabitha Church",
      phone: 2348208660527,
      email: "tabithachurch@ontagene.com",
      relationship: "Friend"
    }
  },
  {
    id: 135,
    organization: "Reversus",
    username: "Dennis298",
    email: "dennischurch@reversus.com",
    phoneNumber: "(871) 516-2495",
    dateJoined: "2018-06-24",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 7730298,
      bank_name: "Wema Bank"
    },
    personalInformation: {
      fullname: "Millie Wolf",
      bvn: 11279465172,
      gender: "Female",
      marital_status: "Divorced",
      children: 1,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Self-employed",
      sector_of_employment: "Construction",
      duration_of_employment: "12 years",
      monthly_income: 212503,
      loan_repayment: 3175,
      office_email: "concetta.dorsey@exoplode.com"
    },
    social: {
      facebook: "bobbi.barrett",
      instagram: "horne_diaz",
      twitter: "hope5"
    },
    guarantor: {
      full_name: "Lillian Mack",
      phone: 2348997405089,
      email: "lillianmack@exoplode.com",
      relationship: "Partner"
    }
  },
  {
    id: 136,
    organization: "Xerex",
    username: "Peterson126",
    email: "petersonmack@xerex.com",
    phoneNumber: "(931) 413-2931",
    dateJoined: "2022-04-07",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 245454344,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Billie Donaldson",
      bvn: 68669955895,
      gender: "Female",
      marital_status: "Widowed",
      children: 1,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Student",
      sector_of_employment: "Agriculture",
      duration_of_employment: "10 years",
      monthly_income: 300458,
      loan_repayment: 4096,
      office_email: "morgan.sandoval@enormo.com"
    },
    social: {
      facebook: "hallie.benson",
      instagram: "hopper_erickson",
      twitter: "holly28"
    },
    guarantor: {
      full_name: "Latonya Cross",
      phone: 2347338990764,
      email: "latonyacross@enormo.com",
      relationship: "Friend"
    }
  },
  {
    id: 137,
    organization: "Sunclipse",
    username: "Edwards823",
    email: "edwardscross@sunclipse.com",
    phoneNumber: "(913) 427-2053",
    dateJoined: "2019-01-23",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 305434115,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Melendez Hammond",
      bvn: 87682764081,
      gender: "Female",
      marital_status: "Married",
      children: 5,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Student",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "31 years",
      monthly_income: 129028,
      loan_repayment: 3679,
      office_email: "estelle.dillard@namebox.com"
    },
    social: {
      facebook: "watson.romero",
      instagram: "oneil_rodriguez",
      twitter: "crosby40"
    },
    guarantor: {
      full_name: "Workman Mcclure",
      phone: 2348483880477,
      email: "workmanmcclure@namebox.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 138,
    organization: "Petigems",
    username: "Holt900",
    email: "holtmcclure@petigems.com",
    phoneNumber: "(892) 565-2880",
    dateJoined: "2021-01-01",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 224229984,
      bank_name: "Sterling Bank"
    },
    personalInformation: {
      fullname: "Haynes Goff",
      bvn: 33136126486,
      gender: "Male",
      marital_status: "Married",
      children: 0,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Unemployed",
      sector_of_employment: "Construction",
      duration_of_employment: "35 years",
      monthly_income: 235727,
      loan_repayment: 4292,
      office_email: "dickson.greer@earthmark.com"
    },
    social: {
      facebook: "larson.keith",
      instagram: "case_bauer",
      twitter: "richard68"
    },
    guarantor: {
      full_name: "Bridges Delaney",
      phone: 2347684902367,
      email: "bridgesdelaney@earthmark.com",
      relationship: "Partner"
    }
  },
  {
    id: 139,
    organization: "Manglo",
    username: "Salas641",
    email: "salasdelaney@manglo.com",
    phoneNumber: "(923) 496-2519",
    dateJoined: "2016-10-13",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 308807272,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Rojas Mccall",
      bvn: 54625154466,
      gender: "Male",
      marital_status: "Married",
      children: 4,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Employed",
      sector_of_employment: "Construction",
      duration_of_employment: "32 years",
      monthly_income: 63609,
      loan_repayment: 2976,
      office_email: "nadia.mooney@metroz.com"
    },
    social: {
      facebook: "fernandez.rogers",
      instagram: "marcy_mcguire",
      twitter: "inez72"
    },
    guarantor: {
      full_name: "Flowers Gamble",
      phone: 2347811019696,
      email: "flowersgamble@metroz.com",
      relationship: "Family"
    }
  },
  {
    id: 140,
    organization: "Zillar",
    username: "Lorraine856",
    email: "lorrainegamble@zillar.com",
    phoneNumber: "(824) 506-3540",
    dateJoined: "2016-05-06",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 232658708,
      bank_name: "UBA"
    },
    personalInformation: {
      fullname: "Roy Jefferson",
      bvn: 62764167607,
      gender: "Male",
      marital_status: "Married",
      children: 3,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Retired",
      sector_of_employment: "Finance",
      duration_of_employment: "21 years",
      monthly_income: 113735,
      loan_repayment: 2039,
      office_email: "mercer.burgess@magmina.com"
    },
    social: {
      facebook: "meghan.olsen",
      instagram: "deirdre_maynard",
      twitter: "terri52"
    },
    guarantor: {
      full_name: "Robertson Snider",
      phone: 2348186037410,
      email: "robertsonsnider@magmina.com",
      relationship: "Partner"
    }
  },
  {
    id: 141,
    organization: "Fiberox",
    username: "Wagner562",
    email: "wagnersnider@fiberox.com",
    phoneNumber: "(932) 585-3013",
    dateJoined: "2023-12-10",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 241778230,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Bradshaw Carpenter",
      bvn: 30244118653,
      gender: "Female",
      marital_status: "Widowed",
      children: 0,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Student",
      sector_of_employment: "Finance",
      duration_of_employment: "32 years",
      monthly_income: 349129,
      loan_repayment: 2546,
      office_email: "ware.dillon@valpreal.com"
    },
    social: {
      facebook: "lee.casey",
      instagram: "padilla_rutledge",
      twitter: "steele41"
    },
    guarantor: {
      full_name: "Selena Burris",
      phone: 2348186424397,
      email: "selenaburris@valpreal.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 142,
    organization: "Rocklogic",
    username: "Hyde907",
    email: "hydeburris@rocklogic.com",
    phoneNumber: "(949) 534-3261",
    dateJoined: "2018-06-22",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 251764811,
      bank_name: "Sterling Bank"
    },
    personalInformation: {
      fullname: "Howell Nielsen",
      bvn: 28956806730,
      gender: "Female",
      marital_status: "Single",
      children: 0,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Self-employed",
      sector_of_employment: "Government",
      duration_of_employment: "16 years",
      monthly_income: 327005,
      loan_repayment: 1854,
      office_email: "freda.griffith@vinch.com"
    },
    social: {
      facebook: "joni.keller",
      instagram: "julia_leblanc",
      twitter: "paige79"
    },
    guarantor: {
      full_name: "Thompson Bean",
      phone: 2348304014137,
      email: "thompsonbean@vinch.com",
      relationship: "Partner"
    }
  },
  {
    id: 143,
    organization: "Hinway",
    username: "Pace176",
    email: "pacebean@hinway.com",
    phoneNumber: "(878) 582-3874",
    dateJoined: "2019-12-14",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 381431780,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Collier Quinn",
      bvn: 67264810582,
      gender: "Male",
      marital_status: "Widowed",
      children: 1,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Employed",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "30 years",
      monthly_income: 88619,
      loan_repayment: 4431,
      office_email: "joseph.rowland@ebidco.com"
    },
    social: {
      facebook: "jayne.cortez",
      instagram: "vaughn_parker",
      twitter: "cook5"
    },
    guarantor: {
      full_name: "Angel Watson",
      phone: 2349074585717,
      email: "angelwatson@ebidco.com",
      relationship: "Colleague"
    }
  },
  {
    id: 144,
    organization: "Pushcart",
    username: "Sally231",
    email: "sallywatson@pushcart.com",
    phoneNumber: "(958) 414-3320",
    dateJoined: "2024-02-05",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 488463955,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Wheeler Montoya",
      bvn: 60704771299,
      gender: "Female",
      marital_status: "Divorced",
      children: 5,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Unemployed",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "21 years",
      monthly_income: 169954,
      loan_repayment: 2364,
      office_email: "stanton.noel@exotechno.com"
    },
    social: {
      facebook: "cecelia.merrill",
      instagram: "barton_jordan",
      twitter: "eva5"
    },
    guarantor: {
      full_name: "Bradley Hull",
      phone: 2347646594311,
      email: "bradleyhull@exotechno.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 145,
    organization: "Deminimum",
    username: "Jana513",
    email: "janahull@deminimum.com",
    phoneNumber: "(891) 514-2048",
    dateJoined: "2019-09-13",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 428298440,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Dionne Stephenson",
      bvn: 98673521590,
      gender: "Male",
      marital_status: "Divorced",
      children: 3,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Employed",
      sector_of_employment: "Technology",
      duration_of_employment: "25 years",
      monthly_income: 433542,
      loan_repayment: 4038,
      office_email: "denise.thornton@tropolis.com"
    },
    social: {
      facebook: "fanny.contreras",
      instagram: "elma_meadows",
      twitter: "megan33"
    },
    guarantor: {
      full_name: "Compton Mccray",
      phone: 2347268244538,
      email: "comptonmccray@tropolis.com",
      relationship: "Partner"
    }
  },
  {
    id: 146,
    organization: "Zerbina",
    username: "Gallegos216",
    email: "gallegosmccray@zerbina.com",
    phoneNumber: "(857) 551-2431",
    dateJoined: "2017-03-16",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 91864880,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Marshall Waller",
      bvn: 45073448655,
      gender: "Female",
      marital_status: "Divorced",
      children: 1,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Student",
      sector_of_employment: "Construction",
      duration_of_employment: "28 years",
      monthly_income: 351090,
      loan_repayment: 2453,
      office_email: "strickland.dejesus@sybixtex.com"
    },
    social: {
      facebook: "parsons.franks",
      instagram: "beard_mayo",
      twitter: "velma21"
    },
    guarantor: {
      full_name: "Wyatt Gilmore",
      phone: 2348185128790,
      email: "wyattgilmore@sybixtex.com",
      relationship: "Colleague"
    }
  },
  {
    id: 147,
    organization: "Dentrex",
    username: "Becky437",
    email: "beckygilmore@dentrex.com",
    phoneNumber: "(841) 401-2307",
    dateJoined: "2022-05-15",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 65883437,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Vivian Roman",
      bvn: 21460979071,
      gender: "Male",
      marital_status: "Divorced",
      children: 2,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Self-employed",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "27 years",
      monthly_income: 300631,
      loan_repayment: 4027,
      office_email: "johnson.lynch@newcube.com"
    },
    social: {
      facebook: "nikki.pierce",
      instagram: "ortega_lawson",
      twitter: "gardner28"
    },
    guarantor: {
      full_name: "Lott Mayer",
      phone: 2349034896536,
      email: "lottmayer@newcube.com",
      relationship: "Partner"
    }
  },
  {
    id: 148,
    organization: "Gaptec",
    username: "Gabriela625",
    email: "gabrielamayer@gaptec.com",
    phoneNumber: "(853) 539-2117",
    dateJoined: "2019-03-26",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 93614933,
      bank_name: "Sterling Bank"
    },
    personalInformation: {
      fullname: "Reilly Meyer",
      bvn: 23581529508,
      gender: "Female",
      marital_status: "Married",
      children: 1,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Unemployed",
      sector_of_employment: "Retail",
      duration_of_employment: "35 years",
      monthly_income: 228135,
      loan_repayment: 1996,
      office_email: "lester.watkins@permadyne.com"
    },
    social: {
      facebook: "head.hebert",
      instagram: "gutierrez_flynn",
      twitter: "neva19"
    },
    guarantor: {
      full_name: "Danielle Solomon",
      phone: 2348168132458,
      email: "daniellesolomon@permadyne.com",
      relationship: "Partner"
    }
  },
  {
    id: 149,
    organization: "Momentia",
    username: "Sykes241",
    email: "sykessolomon@momentia.com",
    phoneNumber: "(922) 404-3953",
    dateJoined: "2023-06-09",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 330598366,
      bank_name: "UBA"
    },
    personalInformation: {
      fullname: "Joann Valenzuela",
      bvn: 18513900742,
      gender: "Female",
      marital_status: "Divorced",
      children: 1,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Unemployed",
      sector_of_employment: "Construction",
      duration_of_employment: "19 years",
      monthly_income: 400394,
      loan_repayment: 3615,
      office_email: "hogan.horn@kyagoro.com"
    },
    social: {
      facebook: "bridgett.cochran",
      instagram: "norman_mclean",
      twitter: "helen63"
    },
    guarantor: {
      full_name: "Sylvia Fletcher",
      phone: 2348989046331,
      email: "sylviafletcher@kyagoro.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 150,
    organization: "Idego",
    username: "Ray293",
    email: "rayfletcher@idego.com",
    phoneNumber: "(905) 402-2997",
    dateJoined: "2022-08-15",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 201676288,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Stokes Mays",
      bvn: 28224458067,
      gender: "Male",
      marital_status: "Widowed",
      children: 1,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Retired",
      sector_of_employment: "Healthcare",
      duration_of_employment: "28 years",
      monthly_income: 121022,
      loan_repayment: 3723,
      office_email: "herring.wooten@franscene.com"
    },
    social: {
      facebook: "candy.merritt",
      instagram: "latisha_fuentes",
      twitter: "cobb4"
    },
    guarantor: {
      full_name: "Lawanda Short",
      phone: 2347139326978,
      email: "lawandashort@franscene.com",
      relationship: "Partner"
    }
  },
  {
    id: 151,
    organization: "Tetak",
    username: "Frances599",
    email: "francesshort@tetak.com",
    phoneNumber: "(947) 409-3951",
    dateJoined: "2019-09-19",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 470614885,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Mcfarland Crane",
      bvn: 28717712754,
      gender: "Male",
      marital_status: "Divorced",
      children: 2,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Self-employed",
      sector_of_employment: "Finance",
      duration_of_employment: "15 years",
      monthly_income: 136294,
      loan_repayment: 2125,
      office_email: "calhoun.marsh@velos.com"
    },
    social: {
      facebook: "carson.goodwin",
      instagram: "levine_hurst",
      twitter: "kimberley91"
    },
    guarantor: {
      full_name: "Cooke Guerrero",
      phone: 2348317540063,
      email: "cookeguerrero@velos.com",
      relationship: "Partner"
    }
  },
  {
    id: 152,
    organization: "Nipaz",
    username: "Aida933",
    email: "aidaguerrero@nipaz.com",
    phoneNumber: "(985) 489-3089",
    dateJoined: "2021-09-08",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 61365076,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Mcgee Padilla",
      bvn: 80445934033,
      gender: "Male",
      marital_status: "Widowed",
      children: 4,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Self-employed",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "9 years",
      monthly_income: 351634,
      loan_repayment: 3261,
      office_email: "cherry.michael@zomboid.com"
    },
    social: {
      facebook: "lucinda.ingram",
      instagram: "latoya_rivas",
      twitter: "corinne76"
    },
    guarantor: {
      full_name: "Adrienne Hutchinson",
      phone: 2349069016596,
      email: "adriennehutchinson@zomboid.com",
      relationship: "Family"
    }
  },
  {
    id: 153,
    organization: "Primordia",
    username: "Sybil923",
    email: "sybilhutchinson@primordia.com",
    phoneNumber: "(926) 415-2022",
    dateJoined: "2024-01-04",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 174195865,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Fisher Reed",
      bvn: 18744314639,
      gender: "Female",
      marital_status: "Widowed",
      children: 0,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Student",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "22 years",
      monthly_income: 452798,
      loan_repayment: 2264,
      office_email: "bender.douglas@mitroc.com"
    },
    social: {
      facebook: "craft.knapp",
      instagram: "tanner_buckner",
      twitter: "sheena32"
    },
    guarantor: {
      full_name: "Love Hill",
      phone: 2348061394493,
      email: "lovehill@mitroc.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 154,
    organization: "Exostream",
    username: "Marcia596",
    email: "marciahill@exostream.com",
    phoneNumber: "(850) 583-2109",
    dateJoined: "2022-12-16",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 232804092,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Shanna Garrison",
      bvn: 31061366277,
      gender: "Female",
      marital_status: "Divorced",
      children: 1,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Unemployed",
      sector_of_employment: "Healthcare",
      duration_of_employment: "39 years",
      monthly_income: 476253,
      loan_repayment: 4634,
      office_email: "robin.gardner@futuris.com"
    },
    social: {
      facebook: "ellen.gallagher",
      instagram: "bush_holder",
      twitter: "teri83"
    },
    guarantor: {
      full_name: "June Emerson",
      phone: 2348429686707,
      email: "juneemerson@futuris.com",
      relationship: "Family"
    }
  },
  {
    id: 155,
    organization: "Crustatia",
    username: "Alford822",
    email: "alfordemerson@crustatia.com",
    phoneNumber: "(914) 423-3235",
    dateJoined: "2020-10-21",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 434142334,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Bolton Martinez",
      bvn: 78520282083,
      gender: "Female",
      marital_status: "Divorced",
      children: 4,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Employed",
      sector_of_employment: "Healthcare",
      duration_of_employment: "9 years",
      monthly_income: 333684,
      loan_repayment: 4287,
      office_email: "ann.carlson@satiance.com"
    },
    social: {
      facebook: "lilian.lane",
      instagram: "stewart_stewart",
      twitter: "mari6"
    },
    guarantor: {
      full_name: "Estela Curry",
      phone: 2348988109401,
      email: "estelacurry@satiance.com",
      relationship: "Colleague"
    }
  },
  {
    id: 156,
    organization: "Eargo",
    username: "Josefa560",
    email: "josefacurry@eargo.com",
    phoneNumber: "(910) 413-3426",
    dateJoined: "2022-05-22",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 143287862,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Colleen Schmidt",
      bvn: 35860030457,
      gender: "Female",
      marital_status: "Single",
      children: 5,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Self-employed",
      sector_of_employment: "Healthcare",
      duration_of_employment: "37 years",
      monthly_income: 162069,
      loan_repayment: 4734,
      office_email: "nona.west@exiand.com"
    },
    social: {
      facebook: "kemp.potter",
      instagram: "manning_pate",
      twitter: "castaneda81"
    },
    guarantor: {
      full_name: "Mccray Munoz",
      phone: 2347808259763,
      email: "mccraymunoz@exiand.com",
      relationship: "Colleague"
    }
  },
  {
    id: 157,
    organization: "Xleen",
    username: "Marcella919",
    email: "marcellamunoz@xleen.com",
    phoneNumber: "(897) 476-3131",
    dateJoined: "2017-06-18",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 306756401,
      bank_name: "Sterling Bank"
    },
    personalInformation: {
      fullname: "Fitzpatrick Terry",
      bvn: 90917306187,
      gender: "Female",
      marital_status: "Divorced",
      children: 4,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Unemployed",
      sector_of_employment: "Technology",
      duration_of_employment: "27 years",
      monthly_income: 489609,
      loan_repayment: 1933,
      office_email: "hays.gillespie@martgo.com"
    },
    social: {
      facebook: "stevenson.dyer",
      instagram: "lynnette_bradshaw",
      twitter: "blanche99"
    },
    guarantor: {
      full_name: "Agnes Robertson",
      phone: 2347681432134,
      email: "agnesrobertson@martgo.com",
      relationship: "Family"
    }
  },
  {
    id: 158,
    organization: "Krog",
    username: "Iva151",
    email: "ivarobertson@krog.com",
    phoneNumber: "(835) 552-2496",
    dateJoined: "2021-05-26",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 452763778,
      bank_name: "First Bank"
    },
    personalInformation: {
      fullname: "Sargent Cash",
      bvn: 18400987086,
      gender: "Female",
      marital_status: "Divorced",
      children: 1,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Employed",
      sector_of_employment: "Finance",
      duration_of_employment: "19 years",
      monthly_income: 89695,
      loan_repayment: 4706,
      office_email: "cleo.jackson@endipine.com"
    },
    social: {
      facebook: "polly.castaneda",
      instagram: "russell_golden",
      twitter: "skinner17"
    },
    guarantor: {
      full_name: "Roxie Mullen",
      phone: 2347074698911,
      email: "roxiemullen@endipine.com",
      relationship: "Partner"
    }
  },
  {
    id: 159,
    organization: "Glukgluk",
    username: "Solis842",
    email: "solismullen@glukgluk.com",
    phoneNumber: "(805) 464-2160",
    dateJoined: "2014-01-15",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 340757284,
      bank_name: "GTBank"
    },
    personalInformation: {
      fullname: "Harmon Hopkins",
      bvn: 59816560884,
      gender: "Female",
      marital_status: "Married",
      children: 4,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Self-employed",
      sector_of_employment: "Government",
      duration_of_employment: "30 years",
      monthly_income: 149768,
      loan_repayment: 2991,
      office_email: "cherie.armstrong@flexigen.com"
    },
    social: {
      facebook: "melisa.donovan",
      instagram: "lynda_lopez",
      twitter: "juana43"
    },
    guarantor: {
      full_name: "Nita Hansen",
      phone: 2347522962755,
      email: "nitahansen@flexigen.com",
      relationship: "Partner"
    }
  },
  {
    id: 160,
    organization: "Lumbrex",
    username: "Jenifer784",
    email: "jeniferhansen@lumbrex.com",
    phoneNumber: "(893) 485-2082",
    dateJoined: "2019-04-26",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 251206074,
      bank_name: "UBA"
    },
    personalInformation: {
      fullname: "Lacy Andrews",
      bvn: 76455279084,
      gender: "Male",
      marital_status: "Divorced",
      children: 3,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Retired",
      sector_of_employment: "Construction",
      duration_of_employment: "26 years",
      monthly_income: 411394,
      loan_repayment: 2752,
      office_email: "sheri.tucker@aeora.com"
    },
    social: {
      facebook: "olga.pace",
      instagram: "benjamin_shepherd",
      twitter: "guadalupe82"
    },
    guarantor: {
      full_name: "Reid Drake",
      phone: 2348114417352,
      email: "reiddrake@aeora.com",
      relationship: "Family"
    }
  },
  {
    id: 161,
    organization: "Multiflex",
    username: "Jerri260",
    email: "jerridrake@multiflex.com",
    phoneNumber: "(903) 561-3465",
    dateJoined: "2022-05-12",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 357206272,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Fletcher Turner",
      bvn: 54038471062,
      gender: "Female",
      marital_status: "Widowed",
      children: 5,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Unemployed",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "29 years",
      monthly_income: 309955,
      loan_repayment: 3284,
      office_email: "arline.conrad@ronelon.com"
    },
    social: {
      facebook: "oneal.lang",
      instagram: "lakeisha_brock",
      twitter: "conley6"
    },
    guarantor: {
      full_name: "Hinton Vincent",
      phone: 2348200181940,
      email: "hintonvincent@ronelon.com",
      relationship: "Partner"
    }
  },
  {
    id: 162,
    organization: "Bizmatic",
    username: "Jeri837",
    email: "jerivincent@bizmatic.com",
    phoneNumber: "(936) 490-2414",
    dateJoined: "2017-01-25",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 359240558,
      bank_name: "UBA"
    },
    personalInformation: {
      fullname: "Christian Gates",
      bvn: 30571806760,
      gender: "Female",
      marital_status: "Divorced",
      children: 4,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Student",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "4 years",
      monthly_income: 262867,
      loan_repayment: 3560,
      office_email: "figueroa.curtis@zenolux.com"
    },
    social: {
      facebook: "tamara.hobbs",
      instagram: "callahan_bradford",
      twitter: "casey68"
    },
    guarantor: {
      full_name: "Guthrie Wall",
      phone: 2348666399609,
      email: "guthriewall@zenolux.com",
      relationship: "Colleague"
    }
  },
  {
    id: 163,
    organization: "Eyewax",
    username: "Maxine600",
    email: "maxinewall@eyewax.com",
    phoneNumber: "(872) 529-2893",
    dateJoined: "2018-08-13",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 329016865,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Velasquez Santos",
      bvn: 88241540157,
      gender: "Female",
      marital_status: "Single",
      children: 1,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Student",
      sector_of_employment: "Technology",
      duration_of_employment: "3 years",
      monthly_income: 439518,
      loan_repayment: 2830,
      office_email: "cantu.wilkinson@telpod.com"
    },
    social: {
      facebook: "schwartz.wilkerson",
      instagram: "hoover_townsend",
      twitter: "rollins19"
    },
    guarantor: {
      full_name: "Imogene Mccarthy",
      phone: 2348077674230,
      email: "imogenemccarthy@telpod.com",
      relationship: "Family"
    }
  },
  {
    id: 164,
    organization: "Cosmosis",
    username: "Zamora580",
    email: "zamoramccarthy@cosmosis.com",
    phoneNumber: "(868) 463-3776",
    dateJoined: "2015-03-08",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 116891,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Catherine Bartlett",
      bvn: 53868662633,
      gender: "Male",
      marital_status: "Widowed",
      children: 2,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Retired",
      sector_of_employment: "Healthcare",
      duration_of_employment: "17 years",
      monthly_income: 218984,
      loan_repayment: 4102,
      office_email: "gordon.mcpherson@comvene.com"
    },
    social: {
      facebook: "shannon.bush",
      instagram: "carey_mccarty",
      twitter: "scott18"
    },
    guarantor: {
      full_name: "Reynolds Tyson",
      phone: 2348792391934,
      email: "reynoldstyson@comvene.com",
      relationship: "Partner"
    }
  },
  {
    id: 165,
    organization: "Datagene",
    username: "Nellie229",
    email: "nellietyson@datagene.com",
    phoneNumber: "(825) 593-3466",
    dateJoined: "2016-03-15",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 214415251,
      bank_name: "UBA"
    },
    personalInformation: {
      fullname: "Leach Long",
      bvn: 98495681546,
      gender: "Female",
      marital_status: "Widowed",
      children: 1,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Unemployed",
      sector_of_employment: "Technology",
      duration_of_employment: "27 years",
      monthly_income: 266044,
      loan_repayment: 3109,
      office_email: "penelope.chapman@digifad.com"
    },
    social: {
      facebook: "savage.bentley",
      instagram: "barrera_bennett",
      twitter: "shannon71"
    },
    guarantor: {
      full_name: "Mabel Branch",
      phone: 2348879661672,
      email: "mabelbranch@digifad.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 166,
    organization: "Oceanica",
    username: "Jolene149",
    email: "jolenebranch@oceanica.com",
    phoneNumber: "(924) 450-2440",
    dateJoined: "2019-09-12",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 156489468,
      bank_name: "UBA"
    },
    personalInformation: {
      fullname: "Mendoza Vargas",
      bvn: 84179444990,
      gender: "Male",
      marital_status: "Single",
      children: 0,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Retired",
      sector_of_employment: "Technology",
      duration_of_employment: "11 years",
      monthly_income: 104276,
      loan_repayment: 2497,
      office_email: "irene.black@daycore.com"
    },
    social: {
      facebook: "simone.burke",
      instagram: "bates_barrera",
      twitter: "meadows72"
    },
    guarantor: {
      full_name: "Clarissa York",
      phone: 2347029322668,
      email: "clarissayork@daycore.com",
      relationship: "Partner"
    }
  },
  {
    id: 167,
    organization: "Jimbies",
    username: "Rasmussen319",
    email: "rasmussenyork@jimbies.com",
    phoneNumber: "(810) 482-2574",
    dateJoined: "2020-04-22",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 215486879,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Mitchell Grimes",
      bvn: 19909706673,
      gender: "Female",
      marital_status: "Widowed",
      children: 4,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Unemployed",
      sector_of_employment: "Government",
      duration_of_employment: "34 years",
      monthly_income: 57831,
      loan_repayment: 4468,
      office_email: "rosario.cummings@geeky.com"
    },
    social: {
      facebook: "holden.booth",
      instagram: "arlene_barker",
      twitter: "cassandra80"
    },
    guarantor: {
      full_name: "Darla Browning",
      phone: 2347198470401,
      email: "darlabrowning@geeky.com",
      relationship: "Colleague"
    }
  },
  {
    id: 168,
    organization: "Viagreat",
    username: "Norton308",
    email: "nortonbrowning@viagreat.com",
    phoneNumber: "(945) 534-2267",
    dateJoined: "2016-01-14",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 78649886,
      bank_name: "Wema Bank"
    },
    personalInformation: {
      fullname: "Jeannette Jones",
      bvn: 36430441596,
      gender: "Male",
      marital_status: "Married",
      children: 5,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Retired",
      sector_of_employment: "Agriculture",
      duration_of_employment: "10 years",
      monthly_income: 233193,
      loan_repayment: 3651,
      office_email: "pauline.ruiz@enomen.com"
    },
    social: {
      facebook: "tamika.clemons",
      instagram: "mara_haley",
      twitter: "nixon4"
    },
    guarantor: {
      full_name: "Dixon Henderson",
      phone: 2348310821565,
      email: "dixonhenderson@enomen.com",
      relationship: "Family"
    }
  },
  {
    id: 169,
    organization: "Moreganic",
    username: "Lynn755",
    email: "lynnhenderson@moreganic.com",
    phoneNumber: "(971) 515-2482",
    dateJoined: "2020-09-06",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 43365248,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Ball Herrera",
      bvn: 86197684189,
      gender: "Female",
      marital_status: "Married",
      children: 3,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Unemployed",
      sector_of_employment: "Healthcare",
      duration_of_employment: "12 years",
      monthly_income: 219681,
      loan_repayment: 2125,
      office_email: "sonya.buck@proxsoft.com"
    },
    social: {
      facebook: "coleman.craig",
      instagram: "yesenia_hanson",
      twitter: "consuelo25"
    },
    guarantor: {
      full_name: "Molly Albert",
      phone: 2348355529313,
      email: "mollyalbert@proxsoft.com",
      relationship: "Partner"
    }
  },
  {
    id: 170,
    organization: "Atomica",
    username: "Kristen473",
    email: "kristenalbert@atomica.com",
    phoneNumber: "(815) 415-3208",
    dateJoined: "2019-09-28",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 354324476,
      bank_name: "First Bank"
    },
    personalInformation: {
      fullname: "Yvette Strickland",
      bvn: 81917057814,
      gender: "Female",
      marital_status: "Divorced",
      children: 2,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Employed",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "38 years",
      monthly_income: 379282,
      loan_repayment: 2130,
      office_email: "bird.barnett@zosis.com"
    },
    social: {
      facebook: "simon.brown",
      instagram: "cardenas_murray",
      twitter: "lina58"
    },
    guarantor: {
      full_name: "Jocelyn Parrish",
      phone: 2347782439023,
      email: "jocelynparrish@zosis.com",
      relationship: "Family"
    }
  },
  {
    id: 171,
    organization: "Prowaste",
    username: "Nell126",
    email: "nellparrish@prowaste.com",
    phoneNumber: "(973) 534-3476",
    dateJoined: "2014-08-28",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 353663156,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Blackburn Battle",
      bvn: 53617091904,
      gender: "Male",
      marital_status: "Married",
      children: 2,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Self-employed",
      sector_of_employment: "Finance",
      duration_of_employment: "1 years",
      monthly_income: 375641,
      loan_repayment: 3030,
      office_email: "dorthy.frost@realmo.com"
    },
    social: {
      facebook: "robert.rollins",
      instagram: "dorothea_patterson",
      twitter: "irma26"
    },
    guarantor: {
      full_name: "Faye Roberson",
      phone: 2348454908540,
      email: "fayeroberson@realmo.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 172,
    organization: "Cipromox",
    username: "Ramos863",
    email: "ramosroberson@cipromox.com",
    phoneNumber: "(896) 454-3171",
    dateJoined: "2022-07-15",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 235855502,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Sullivan Maldonado",
      bvn: 10277079290,
      gender: "Female",
      marital_status: "Divorced",
      children: 3,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Student",
      sector_of_employment: "Healthcare",
      duration_of_employment: "30 years",
      monthly_income: 402830,
      loan_repayment: 3723,
      office_email: "merrill.gregory@ecolight.com"
    },
    social: {
      facebook: "slater.pacheco",
      instagram: "coffey_norton",
      twitter: "hooper21"
    },
    guarantor: {
      full_name: "Maryellen Lamb",
      phone: 2347637229820,
      email: "maryellenlamb@ecolight.com",
      relationship: "Family"
    }
  },
  {
    id: 173,
    organization: "Comcur",
    username: "Anna413",
    email: "annalamb@comcur.com",
    phoneNumber: "(988) 415-3424",
    dateJoined: "2022-11-08",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 496153428,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Bowers Mercer",
      bvn: 60565159662,
      gender: "Male",
      marital_status: "Single",
      children: 3,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Employed",
      sector_of_employment: "Agriculture",
      duration_of_employment: "33 years",
      monthly_income: 100796,
      loan_repayment: 3859,
      office_email: "beach.schroeder@xth.com"
    },
    social: {
      facebook: "brown.guthrie",
      instagram: "santos_levy",
      twitter: "knowles38"
    },
    guarantor: {
      full_name: "Dorsey Boyd",
      phone: 2348677080281,
      email: "dorseyboyd@xth.com",
      relationship: "Colleague"
    }
  },
  {
    id: 174,
    organization: "Aquoavo",
    username: "Huffman781",
    email: "huffmanboyd@aquoavo.com",
    phoneNumber: "(907) 416-2251",
    dateJoined: "2018-05-02",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 488299752,
      bank_name: "GTBank"
    },
    personalInformation: {
      fullname: "Rose Sanford",
      bvn: 73757426910,
      gender: "Male",
      marital_status: "Married",
      children: 3,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Unemployed",
      sector_of_employment: "Retail",
      duration_of_employment: "14 years",
      monthly_income: 490849,
      loan_repayment: 4191,
      office_email: "georgette.harrison@geekola.com"
    },
    social: {
      facebook: "anita.kidd",
      instagram: "burke_nunez",
      twitter: "orr10"
    },
    guarantor: {
      full_name: "Elsa Olson",
      phone: 2347284657072,
      email: "elsaolson@geekola.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 175,
    organization: "Billmed",
    username: "Buchanan848",
    email: "buchananolson@billmed.com",
    phoneNumber: "(840) 448-2942",
    dateJoined: "2023-03-17",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 487259578,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Augusta Tyler",
      bvn: 11794637667,
      gender: "Female",
      marital_status: "Divorced",
      children: 3,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Student",
      sector_of_employment: "Retail",
      duration_of_employment: "30 years",
      monthly_income: 463921,
      loan_repayment: 2545,
      office_email: "lucas.spence@medicroix.com"
    },
    social: {
      facebook: "good.rivers",
      instagram: "landry_wiley",
      twitter: "espinoza23"
    },
    guarantor: {
      full_name: "Candice Manning",
      phone: 2347776815333,
      email: "candicemanning@medicroix.com",
      relationship: "Partner"
    }
  },
  {
    id: 176,
    organization: "Ecrater",
    username: "Noemi872",
    email: "noemimanning@ecrater.com",
    phoneNumber: "(899) 569-2250",
    dateJoined: "2014-08-27",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 162371491,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Dickerson Doyle",
      bvn: 38368965552,
      gender: "Female",
      marital_status: "Widowed",
      children: 4,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Unemployed",
      sector_of_employment: "Healthcare",
      duration_of_employment: "25 years",
      monthly_income: 79443,
      loan_repayment: 4369,
      office_email: "gregory.jensen@protodyne.com"
    },
    social: {
      facebook: "underwood.aguirre",
      instagram: "dolores_richardson",
      twitter: "lara58"
    },
    guarantor: {
      full_name: "Lolita Velez",
      phone: 2348703769479,
      email: "lolitavelez@protodyne.com",
      relationship: "Friend"
    }
  },
  {
    id: 177,
    organization: "Neurocell",
    username: "Brandy669",
    email: "brandyvelez@neurocell.com",
    phoneNumber: "(949) 541-3741",
    dateJoined: "2023-12-13",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 148612253,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Boyer Deleon",
      bvn: 69234860476,
      gender: "Male",
      marital_status: "Widowed",
      children: 0,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Student",
      sector_of_employment: "Finance",
      duration_of_employment: "15 years",
      monthly_income: 317244,
      loan_repayment: 4841,
      office_email: "larsen.mcfarland@sequitur.com"
    },
    social: {
      facebook: "mendez.dean",
      instagram: "chambers_fulton",
      twitter: "evans42"
    },
    guarantor: {
      full_name: "Davis Gilbert",
      phone: 2348313863881,
      email: "davisgilbert@sequitur.com",
      relationship: "Friend"
    }
  },
  {
    id: 178,
    organization: "Coash",
    username: "Harris744",
    email: "harrisgilbert@coash.com",
    phoneNumber: "(988) 544-3963",
    dateJoined: "2019-08-17",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 300970090,
      bank_name: "UBA"
    },
    personalInformation: {
      fullname: "Patrice Aguilar",
      bvn: 44485271829,
      gender: "Female",
      marital_status: "Single",
      children: 1,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Employed",
      sector_of_employment: "Retail",
      duration_of_employment: "27 years",
      monthly_income: 334395,
      loan_repayment: 3878,
      office_email: "suarez.harrington@ecratic.com"
    },
    social: {
      facebook: "kenya.suarez",
      instagram: "medina_spears",
      twitter: "woodward9"
    },
    guarantor: {
      full_name: "Oconnor Nixon",
      phone: 2348601621376,
      email: "oconnornixon@ecratic.com",
      relationship: "Friend"
    }
  },
  {
    id: 179,
    organization: "Duflex",
    username: "Fuller426",
    email: "fullernixon@duflex.com",
    phoneNumber: "(920) 540-3550",
    dateJoined: "2020-08-10",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 477927366,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Sheryl Bowers",
      bvn: 57243536147,
      gender: "Male",
      marital_status: "Divorced",
      children: 0,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Unemployed",
      sector_of_employment: "Government",
      duration_of_employment: "7 years",
      monthly_income: 136020,
      loan_repayment: 2453,
      office_email: "gross.baird@daisu.com"
    },
    social: {
      facebook: "beulah.cook",
      instagram: "bray_duke",
      twitter: "caldwell54"
    },
    guarantor: {
      full_name: "Edna Howe",
      phone: 2348483566506,
      email: "ednahowe@daisu.com",
      relationship: "Friend"
    }
  },
  {
    id: 180,
    organization: "Quarx",
    username: "Morrison516",
    email: "morrisonhowe@quarx.com",
    phoneNumber: "(989) 516-3519",
    dateJoined: "2018-09-14",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 395451156,
      bank_name: "Sterling Bank"
    },
    personalInformation: {
      fullname: "Wilder Bender",
      bvn: 57284809294,
      gender: "Male",
      marital_status: "Widowed",
      children: 5,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Student",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "36 years",
      monthly_income: 475797,
      loan_repayment: 3723,
      office_email: "waters.charles@ziggles.com"
    },
    social: {
      facebook: "katelyn.english",
      instagram: "ashley_carey",
      twitter: "marissa72"
    },
    guarantor: {
      full_name: "Ortiz Dawson",
      phone: 2347123945676,
      email: "ortizdawson@ziggles.com",
      relationship: "Family"
    }
  },
  {
    id: 181,
    organization: "Accusage",
    username: "Donovan767",
    email: "donovandawson@accusage.com",
    phoneNumber: "(909) 527-2981",
    dateJoined: "2018-03-15",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 152830109,
      bank_name: "Sterling Bank"
    },
    personalInformation: {
      fullname: "Horn Benjamin",
      bvn: 18325954386,
      gender: "Male",
      marital_status: "Divorced",
      children: 1,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Unemployed",
      sector_of_employment: "Government",
      duration_of_employment: "30 years",
      monthly_income: 309710,
      loan_repayment: 4038,
      office_email: "susanne.travis@liquidoc.com"
    },
    social: {
      facebook: "chris.ellison",
      instagram: "moran_rocha",
      twitter: "tisha42"
    },
    guarantor: {
      full_name: "Lisa Delgado",
      phone: 2347966470502,
      email: "lisadelgado@liquidoc.com",
      relationship: "Family"
    }
  },
  {
    id: 182,
    organization: "Lexicondo",
    username: "Alma844",
    email: "almadelgado@lexicondo.com",
    phoneNumber: "(888) 596-2835",
    dateJoined: "2022-12-13",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 297022278,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Elisabeth Maxwell",
      bvn: 44150441729,
      gender: "Male",
      marital_status: "Single",
      children: 5,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Retired",
      sector_of_employment: "Education",
      duration_of_employment: "22 years",
      monthly_income: 321777,
      loan_repayment: 3503,
      office_email: "burris.ferguson@mangelica.com"
    },
    social: {
      facebook: "mae.moses",
      instagram: "bowman_day",
      twitter: "owen15"
    },
    guarantor: {
      full_name: "Monroe Oneill",
      phone: 2347893802618,
      email: "monroeoneill@mangelica.com",
      relationship: "Friend"
    }
  },
  {
    id: 183,
    organization: "Geekwagon",
    username: "Deanna888",
    email: "deannaoneill@geekwagon.com",
    phoneNumber: "(845) 488-2626",
    dateJoined: "2023-03-09",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 176985826,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Christie Mcdowell",
      bvn: 62201016377,
      gender: "Male",
      marital_status: "Divorced",
      children: 1,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Student",
      sector_of_employment: "Construction",
      duration_of_employment: "11 years",
      monthly_income: 235432,
      loan_repayment: 3573,
      office_email: "jacobs.gay@apex.com"
    },
    social: {
      facebook: "burton.ware",
      instagram: "melanie_myers",
      twitter: "wolfe24"
    },
    guarantor: {
      full_name: "Ruthie Hicks",
      phone: 2347655005392,
      email: "ruthiehicks@apex.com",
      relationship: "Colleague"
    }
  },
  {
    id: 184,
    organization: "Solgan",
    username: "Noreen451",
    email: "noreenhicks@solgan.com",
    phoneNumber: "(990) 572-3741",
    dateJoined: "2020-11-03",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 69781547,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Alyson Warner",
      bvn: 29256587958,
      gender: "Female",
      marital_status: "Single",
      children: 0,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Retired",
      sector_of_employment: "Retail",
      duration_of_employment: "26 years",
      monthly_income: 91238,
      loan_repayment: 4851,
      office_email: "meredith.sweeney@emoltra.com"
    },
    social: {
      facebook: "sonja.riley",
      instagram: "cooley_phillips",
      twitter: "tasha42"
    },
    guarantor: {
      full_name: "Meagan Skinner",
      phone: 2347463147940,
      email: "meaganskinner@emoltra.com",
      relationship: "Family"
    }
  },
  {
    id: 185,
    organization: "Opticom",
    username: "Valarie254",
    email: "valarieskinner@opticom.com",
    phoneNumber: "(813) 409-3227",
    dateJoined: "2017-08-04",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 422976663,
      bank_name: "Sterling Bank"
    },
    personalInformation: {
      fullname: "Mitzi Snyder",
      bvn: 17490422228,
      gender: "Female",
      marital_status: "Widowed",
      children: 0,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Retired",
      sector_of_employment: "Construction",
      duration_of_employment: "17 years",
      monthly_income: 51687,
      loan_repayment: 2246,
      office_email: "atkinson.joyce@cuizine.com"
    },
    social: {
      facebook: "banks.tillman",
      instagram: "victoria_petty",
      twitter: "aguirre89"
    },
    guarantor: {
      full_name: "Lancaster Booker",
      phone: 2348025107504,
      email: "lancasterbooker@cuizine.com",
      relationship: "Family"
    }
  },
  {
    id: 186,
    organization: "Koogle",
    username: "Dawn243",
    email: "dawnbooker@koogle.com",
    phoneNumber: "(942) 583-3932",
    dateJoined: "2023-12-28",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 127812272,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Quinn Holcomb",
      bvn: 38941787798,
      gender: "Female",
      marital_status: "Widowed",
      children: 4,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Unemployed",
      sector_of_employment: "Retail",
      duration_of_employment: "20 years",
      monthly_income: 57099,
      loan_repayment: 4803,
      office_email: "dudley.gibbs@dogtown.com"
    },
    social: {
      facebook: "pittman.goodman",
      instagram: "pearson_johnston",
      twitter: "rena65"
    },
    guarantor: {
      full_name: "Jacqueline Gibson",
      phone: 2347030596238,
      email: "jacquelinegibson@dogtown.com",
      relationship: "Colleague"
    }
  },
  {
    id: 187,
    organization: "Tersanki",
    username: "Long464",
    email: "longgibson@tersanki.com",
    phoneNumber: "(920) 581-3864",
    dateJoined: "2016-03-15",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 18304958,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Francesca Moon",
      bvn: 98758495324,
      gender: "Female",
      marital_status: "Widowed",
      children: 3,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Self-employed",
      sector_of_employment: "Technology",
      duration_of_employment: "23 years",
      monthly_income: 285749,
      loan_repayment: 4385,
      office_email: "mcdonald.dixon@cedward.com"
    },
    social: {
      facebook: "maryanne.estrada",
      instagram: "olson_alston",
      twitter: "mayra15"
    },
    guarantor: {
      full_name: "Eleanor Sears",
      phone: 2347963263641,
      email: "eleanorsears@cedward.com",
      relationship: "Colleague"
    }
  },
  {
    id: 188,
    organization: "Idetica",
    username: "Guy538",
    email: "guysears@idetica.com",
    phoneNumber: "(916) 538-3143",
    dateJoined: "2021-01-27",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 426455742,
      bank_name: "UBA"
    },
    personalInformation: {
      fullname: "Jerry Haney",
      bvn: 83481536308,
      gender: "Female",
      marital_status: "Divorced",
      children: 4,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Retired",
      sector_of_employment: "Education",
      duration_of_employment: "26 years",
      monthly_income: 495737,
      loan_repayment: 2641,
      office_email: "silva.james@cujo.com"
    },
    social: {
      facebook: "yates.hernandez",
      instagram: "kirkland_newman",
      twitter: "brittany21"
    },
    guarantor: {
      full_name: "Jessica Cobb",
      phone: 2347164255585,
      email: "jessicacobb@cujo.com",
      relationship: "Partner"
    }
  },
  {
    id: 189,
    organization: "Blanet",
    username: "Vaughan975",
    email: "vaughancobb@blanet.com",
    phoneNumber: "(969) 592-3212",
    dateJoined: "2023-09-04",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 144696385,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Mack William",
      bvn: 32608642234,
      gender: "Female",
      marital_status: "Single",
      children: 4,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Unemployed",
      sector_of_employment: "Technology",
      duration_of_employment: "35 years",
      monthly_income: 102986,
      loan_repayment: 4137,
      office_email: "mejia.bell@quizmo.com"
    },
    social: {
      facebook: "sasha.kemp",
      instagram: "whitaker_huff",
      twitter: "ana68"
    },
    guarantor: {
      full_name: "Winifred Wiggins",
      phone: 2348124630068,
      email: "winifredwiggins@quizmo.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 190,
    organization: "Zolarex",
    username: "Abbott972",
    email: "abbottwiggins@zolarex.com",
    phoneNumber: "(895) 466-2982",
    dateJoined: "2015-11-13",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 214473856,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Adams Pratt",
      bvn: 62242132118,
      gender: "Male",
      marital_status: "Married",
      children: 4,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Unemployed",
      sector_of_employment: "Construction",
      duration_of_employment: "13 years",
      monthly_income: 449160,
      loan_repayment: 4712,
      office_email: "kaye.martin@sonique.com"
    },
    social: {
      facebook: "lang.cole",
      instagram: "sheree_reeves",
      twitter: "rosales38"
    },
    guarantor: {
      full_name: "Stark Preston",
      phone: 2348148881475,
      email: "starkpreston@sonique.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 191,
    organization: "Jamnation",
    username: "Wilda122",
    email: "wildapreston@jamnation.com",
    phoneNumber: "(990) 587-3732",
    dateJoined: "2018-04-15",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 436312082,
      bank_name: "Sterling Bank"
    },
    personalInformation: {
      fullname: "Antonia Pittman",
      bvn: 51936571660,
      gender: "Male",
      marital_status: "Divorced",
      children: 2,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Self-employed",
      sector_of_employment: "Government",
      duration_of_employment: "31 years",
      monthly_income: 191385,
      loan_repayment: 3646,
      office_email: "hart.rios@biflex.com"
    },
    social: {
      facebook: "puckett.jennings",
      instagram: "erna_hunter",
      twitter: "raymond43"
    },
    guarantor: {
      full_name: "Essie Slater",
      phone: 2347098168395,
      email: "essieslater@biflex.com",
      relationship: "Friend"
    }
  },
  {
    id: 192,
    organization: "Hydrocom",
    username: "Alberta629",
    email: "albertaslater@hydrocom.com",
    phoneNumber: "(882) 415-3605",
    dateJoined: "2018-12-27",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 499708213,
      bank_name: "GTBank"
    },
    personalInformation: {
      fullname: "Matilda Small",
      bvn: 48023459823,
      gender: "Male",
      marital_status: "Single",
      children: 0,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Unemployed",
      sector_of_employment: "Construction",
      duration_of_employment: "28 years",
      monthly_income: 454087,
      loan_repayment: 3134,
      office_email: "claudine.winters@xinware.com"
    },
    social: {
      facebook: "barbara.garrett",
      instagram: "bennett_copeland",
      twitter: "casandra38"
    },
    guarantor: {
      full_name: "Hunter Sloan",
      phone: 2347239485238,
      email: "huntersloan@xinware.com",
      relationship: "Colleague"
    }
  },
  {
    id: 193,
    organization: "Zenthall",
    username: "Barrett404",
    email: "barrettsloan@zenthall.com",
    phoneNumber: "(962) 517-2012",
    dateJoined: "2023-01-23",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 63885753,
      bank_name: "Wema Bank"
    },
    personalInformation: {
      fullname: "Rios Foster",
      bvn: 39331182956,
      gender: "Female",
      marital_status: "Widowed",
      children: 0,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Employed",
      sector_of_employment: "Finance",
      duration_of_employment: "11 years",
      monthly_income: 422799,
      loan_repayment: 1809,
      office_email: "phoebe.salazar@canopoly.com"
    },
    social: {
      facebook: "wooten.howard",
      instagram: "adriana_gutierrez",
      twitter: "mcdowell4"
    },
    guarantor: {
      full_name: "Rice Roy",
      phone: 2347815235062,
      email: "riceroy@canopoly.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 194,
    organization: "Signity",
    username: "Rhea428",
    email: "rhearoy@signity.com",
    phoneNumber: "(836) 462-2140",
    dateJoined: "2020-02-17",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 107046183,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Brooke Ortega",
      bvn: 66582545862,
      gender: "Male",
      marital_status: "Married",
      children: 0,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Student",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "13 years",
      monthly_income: 190448,
      loan_repayment: 2853,
      office_email: "lynne.chase@roughies.com"
    },
    social: {
      facebook: "hollie.holden",
      instagram: "autumn_daugherty",
      twitter: "loretta47"
    },
    guarantor: {
      full_name: "Amalia Stephens",
      phone: 2349070815552,
      email: "amaliastephens@roughies.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 195,
    organization: "Zogak",
    username: "Patel906",
    email: "patelstephens@zogak.com",
    phoneNumber: "(937) 449-3058",
    dateJoined: "2018-11-16",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 378063567,
      bank_name: "UBA"
    },
    personalInformation: {
      fullname: "Bernard Dalton",
      bvn: 40166674572,
      gender: "Male",
      marital_status: "Divorced",
      children: 3,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Self-employed",
      sector_of_employment: "Construction",
      duration_of_employment: "10 years",
      monthly_income: 319661,
      loan_repayment: 2685,
      office_email: "ethel.dodson@snorus.com"
    },
    social: {
      facebook: "gladys.gomez",
      instagram: "marisol_harding",
      twitter: "jeanne72"
    },
    guarantor: {
      full_name: "Stacie Clements",
      phone: 2347801942325,
      email: "stacieclements@snorus.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 196,
    organization: "Neteria",
    username: "Massey914",
    email: "masseyclements@neteria.com",
    phoneNumber: "(929) 563-3495",
    dateJoined: "2015-07-17",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 107921784,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Mcguire Hunt",
      bvn: 12876993661,
      gender: "Male",
      marital_status: "Single",
      children: 2,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Unemployed",
      sector_of_employment: "Retail",
      duration_of_employment: "24 years",
      monthly_income: 131195,
      loan_repayment: 4656,
      office_email: "ida.ayers@urbanshee.com"
    },
    social: {
      facebook: "celina.moore",
      instagram: "nieves_torres",
      twitter: "jody79"
    },
    guarantor: {
      full_name: "Jennifer Weber",
      phone: 2348625724661,
      email: "jenniferweber@urbanshee.com",
      relationship: "Colleague"
    }
  },
  {
    id: 197,
    organization: "Thredz",
    username: "Warren472",
    email: "warrenweber@thredz.com",
    phoneNumber: "(869) 454-2833",
    dateJoined: "2014-11-30",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 256787366,
      bank_name: "First Bank"
    },
    personalInformation: {
      fullname: "Ada Kinney",
      bvn: 85845110528,
      gender: "Male",
      marital_status: "Widowed",
      children: 4,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Retired",
      sector_of_employment: "Government",
      duration_of_employment: "20 years",
      monthly_income: 317548,
      loan_repayment: 3023,
      office_email: "miranda.stuart@norsul.com"
    },
    social: {
      facebook: "adele.norman",
      instagram: "margaret_williamson",
      twitter: "kaufman4"
    },
    guarantor: {
      full_name: "Melody Peck",
      phone: 2348092930788,
      email: "melodypeck@norsul.com",
      relationship: "Friend"
    }
  },
  {
    id: 198,
    organization: "Qualitern",
    username: "Gilda275",
    email: "gildapeck@qualitern.com",
    phoneNumber: "(807) 423-3709",
    dateJoined: "2023-02-16",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 258345221,
      bank_name: "Sterling Bank"
    },
    personalInformation: {
      fullname: "Lenore Dickson",
      bvn: 62820378999,
      gender: "Male",
      marital_status: "Married",
      children: 3,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Employed",
      sector_of_employment: "Construction",
      duration_of_employment: "2 years",
      monthly_income: 177900,
      loan_repayment: 3385,
      office_email: "jami.boyle@zensure.com"
    },
    social: {
      facebook: "ivy.floyd",
      instagram: "hardy_swanson",
      twitter: "annabelle78"
    },
    guarantor: {
      full_name: "Jennie Mcdaniel",
      phone: 2349099737415,
      email: "jenniemcdaniel@zensure.com",
      relationship: "Colleague"
    }
  },
  {
    id: 199,
    organization: "Comfirm",
    username: "Kristine507",
    email: "kristinemcdaniel@comfirm.com",
    phoneNumber: "(847) 462-3002",
    dateJoined: "2016-06-16",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 159483894,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Tracey Atkinson",
      bvn: 27917992204,
      gender: "Female",
      marital_status: "Single",
      children: 1,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Retired",
      sector_of_employment: "Healthcare",
      duration_of_employment: "39 years",
      monthly_income: 447224,
      loan_repayment: 3629,
      office_email: "cain.blankenship@aquasseur.com"
    },
    social: {
      facebook: "reba.thomas",
      instagram: "booth_snow",
      twitter: "kristie59"
    },
    guarantor: {
      full_name: "Barr Cleveland",
      phone: 2348759372244,
      email: "barrcleveland@aquasseur.com",
      relationship: "Colleague"
    }
  },
  {
    id: 200,
    organization: "Knowlysis",
    username: "Loraine582",
    email: "lorainecleveland@knowlysis.com",
    phoneNumber: "(819) 570-2426",
    dateJoined: "2017-08-06",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 298062661,
      bank_name: "UBA"
    },
    personalInformation: {
      fullname: "Maddox Reilly",
      bvn: 99643107197,
      gender: "Female",
      marital_status: "Single",
      children: 2,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Student",
      sector_of_employment: "Education",
      duration_of_employment: "15 years",
      monthly_income: 181163,
      loan_repayment: 2635,
      office_email: "acevedo.murphy@qaboos.com"
    },
    social: {
      facebook: "mccarty.guerra",
      instagram: "hall_vasquez",
      twitter: "roxanne30"
    },
    guarantor: {
      full_name: "Harvey Pickett",
      phone: 2348119048412,
      email: "harveypickett@qaboos.com",
      relationship: "Family"
    }
  },
  {
    id: 201,
    organization: "Anixang",
    username: "Lelia936",
    email: "leliapickett@anixang.com",
    phoneNumber: "(967) 510-3668",
    dateJoined: "2021-08-29",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 37537700,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Morrow Velasquez",
      bvn: 59623978237,
      gender: "Male",
      marital_status: "Divorced",
      children: 5,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Employed",
      sector_of_employment: "Agriculture",
      duration_of_employment: "22 years",
      monthly_income: 202733,
      loan_repayment: 1838,
      office_email: "gates.noble@vidto.com"
    },
    social: {
      facebook: "staci.george",
      instagram: "cleveland_cooper",
      twitter: "edith6"
    },
    guarantor: {
      full_name: "Alyssa Caldwell",
      phone: 2347011149928,
      email: "alyssacaldwell@vidto.com",
      relationship: "Colleague"
    }
  },
  {
    id: 202,
    organization: "Centregy",
    username: "Tammy199",
    email: "tammycaldwell@centregy.com",
    phoneNumber: "(864) 540-2152",
    dateJoined: "2023-01-15",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 352832666,
      bank_name: "GTBank"
    },
    personalInformation: {
      fullname: "Sandra Sutton",
      bvn: 60266268707,
      gender: "Female",
      marital_status: "Married",
      children: 5,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Student",
      sector_of_employment: "Retail",
      duration_of_employment: "22 years",
      monthly_income: 445013,
      loan_repayment: 3768,
      office_email: "ford.becker@scenty.com"
    },
    social: {
      facebook: "morgan.hoover",
      instagram: "hardin_carroll",
      twitter: "franklin25"
    },
    guarantor: {
      full_name: "Nichole Cameron",
      phone: 2348255235777,
      email: "nicholecameron@scenty.com",
      relationship: "Family"
    }
  },
  {
    id: 203,
    organization: "Rubadub",
    username: "Karina774",
    email: "karinacameron@rubadub.com",
    phoneNumber: "(856) 597-2665",
    dateJoined: "2015-05-18",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 254729066,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Kramer Love",
      bvn: 56186770911,
      gender: "Female",
      marital_status: "Married",
      children: 3,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Student",
      sector_of_employment: "Education",
      duration_of_employment: "1 years",
      monthly_income: 367964,
      loan_repayment: 3410,
      office_email: "carlson.ewing@acrodance.com"
    },
    social: {
      facebook: "payne.bullock",
      instagram: "stone_landry",
      twitter: "yvonne25"
    },
    guarantor: {
      full_name: "Marks Key",
      phone: 2347669248311,
      email: "markskey@acrodance.com",
      relationship: "Family"
    }
  },
  {
    id: 204,
    organization: "Poochies",
    username: "Lela347",
    email: "lelakey@poochies.com",
    phoneNumber: "(933) 537-2962",
    dateJoined: "2020-12-31",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 212525825,
      bank_name: "GTBank"
    },
    personalInformation: {
      fullname: "Sara Sweet",
      bvn: 51928791896,
      gender: "Female",
      marital_status: "Married",
      children: 5,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Employed",
      sector_of_employment: "Retail",
      duration_of_employment: "39 years",
      monthly_income: 234187,
      loan_repayment: 2620,
      office_email: "williamson.randall@capscreen.com"
    },
    social: {
      facebook: "lindsay.decker",
      instagram: "blackwell_sexton",
      twitter: "turner41"
    },
    guarantor: {
      full_name: "Villarreal Richards",
      phone: 2347894804433,
      email: "villarrealrichards@capscreen.com",
      relationship: "Family"
    }
  },
  {
    id: 205,
    organization: "Egypto",
    username: "Stafford273",
    email: "staffordrichards@egypto.com",
    phoneNumber: "(804) 428-2451",
    dateJoined: "2023-06-01",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 282828856,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Juanita Ferrell",
      bvn: 81216823836,
      gender: "Male",
      marital_status: "Divorced",
      children: 2,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Student",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "29 years",
      monthly_income: 130479,
      loan_repayment: 2697,
      office_email: "bass.simon@pawnagra.com"
    },
    social: {
      facebook: "deidre.haynes",
      instagram: "leona_reynolds",
      twitter: "hillary81"
    },
    guarantor: {
      full_name: "Dalton Stanley",
      phone: 2347326189224,
      email: "daltonstanley@pawnagra.com",
      relationship: "Colleague"
    }
  },
  {
    id: 206,
    organization: "Accruex",
    username: "Beryl270",
    email: "berylstanley@accruex.com",
    phoneNumber: "(814) 416-3778",
    dateJoined: "2017-08-15",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 255108707,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Powers Kirkland",
      bvn: 63864491725,
      gender: "Female",
      marital_status: "Married",
      children: 5,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Student",
      sector_of_employment: "Retail",
      duration_of_employment: "3 years",
      monthly_income: 279798,
      loan_repayment: 4741,
      office_email: "parks.leon@digitalus.com"
    },
    social: {
      facebook: "zimmerman.kennedy",
      instagram: "lawrence_gross",
      twitter: "guerrero87"
    },
    guarantor: {
      full_name: "Luz Stone",
      phone: 2348360528760,
      email: "luzstone@digitalus.com",
      relationship: "Friend"
    }
  },
  {
    id: 207,
    organization: "Zilla",
    username: "Viola817",
    email: "violastone@zilla.com",
    phoneNumber: "(990) 572-2891",
    dateJoined: "2014-03-15",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 341847314,
      bank_name: "First Bank"
    },
    personalInformation: {
      fullname: "Holloway Bruce",
      bvn: 58297640661,
      gender: "Male",
      marital_status: "Widowed",
      children: 1,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Retired",
      sector_of_employment: "Finance",
      duration_of_employment: "39 years",
      monthly_income: 438563,
      loan_repayment: 4655,
      office_email: "duke.best@zillacom.com"
    },
    social: {
      facebook: "leticia.dickerson",
      instagram: "lynn_workman",
      twitter: "evangelina53"
    },
    guarantor: {
      full_name: "Moses Benton",
      phone: 2347657206337,
      email: "mosesbenton@zillacom.com",
      relationship: "Colleague"
    }
  },
  {
    id: 208,
    organization: "Perkle",
    username: "Ryan568",
    email: "ryanbenton@perkle.com",
    phoneNumber: "(842) 540-3879",
    dateJoined: "2024-03-30",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 311706070,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Alison Stokes",
      bvn: 38116499019,
      gender: "Male",
      marital_status: "Single",
      children: 3,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Retired",
      sector_of_employment: "Construction",
      duration_of_employment: "24 years",
      monthly_income: 118485,
      loan_repayment: 3503,
      office_email: "rosa.adkins@melbacor.com"
    },
    social: {
      facebook: "betty.smith",
      instagram: "castillo_berg",
      twitter: "verna44"
    },
    guarantor: {
      full_name: "Dean Webb",
      phone: 2348454671406,
      email: "deanwebb@melbacor.com",
      relationship: "Colleague"
    }
  },
  {
    id: 209,
    organization: "Helixo",
    username: "Christina401",
    email: "christinawebb@helixo.com",
    phoneNumber: "(893) 568-3990",
    dateJoined: "2023-01-12",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 113145803,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Magdalena Mcmillan",
      bvn: 42203009530,
      gender: "Male",
      marital_status: "Widowed",
      children: 1,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Employed",
      sector_of_employment: "Construction",
      duration_of_employment: "36 years",
      monthly_income: 122076,
      loan_repayment: 3568,
      office_email: "willie.hewitt@ronbert.com"
    },
    social: {
      facebook: "hobbs.todd",
      instagram: "dee_yates",
      twitter: "frank29"
    },
    guarantor: {
      full_name: "Angie Newton",
      phone: 2349074024993,
      email: "angienewton@ronbert.com",
      relationship: "Family"
    }
  },
  {
    id: 210,
    organization: "Myopium",
    username: "Peggy231",
    email: "peggynewton@myopium.com",
    phoneNumber: "(917) 549-3305",
    dateJoined: "2016-01-13",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 111811869,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Gertrude Hall",
      bvn: 21520407302,
      gender: "Male",
      marital_status: "Divorced",
      children: 5,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Self-employed",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "39 years",
      monthly_income: 386033,
      loan_repayment: 3858,
      office_email: "nelda.weaver@quintity.com"
    },
    social: {
      facebook: "emily.garner",
      instagram: "walls_kelley",
      twitter: "john56"
    },
    guarantor: {
      full_name: "Calderon Mcfadden",
      phone: 2348002524620,
      email: "calderonmcfadden@quintity.com",
      relationship: "Colleague"
    }
  },
  {
    id: 211,
    organization: "Velity",
    username: "Fulton595",
    email: "fultonmcfadden@velity.com",
    phoneNumber: "(917) 407-2157",
    dateJoined: "2014-04-18",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 384169761,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Pitts Mills",
      bvn: 61319750393,
      gender: "Female",
      marital_status: "Divorced",
      children: 4,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Unemployed",
      sector_of_employment: "Construction",
      duration_of_employment: "32 years",
      monthly_income: 334063,
      loan_repayment: 4728,
      office_email: "owens.franco@sultraxin.com"
    },
    social: {
      facebook: "flossie.williams",
      instagram: "janie_ellis",
      twitter: "iris62"
    },
    guarantor: {
      full_name: "Bowen Riddle",
      phone: 2347733540572,
      email: "bowenriddle@sultraxin.com",
      relationship: "Family"
    }
  },
  {
    id: 212,
    organization: "Enervate",
    username: "Miller610",
    email: "millerriddle@enervate.com",
    phoneNumber: "(937) 525-3670",
    dateJoined: "2019-06-20",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 345562964,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Bridgette Brady",
      bvn: 93978607018,
      gender: "Female",
      marital_status: "Widowed",
      children: 5,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Employed",
      sector_of_employment: "Construction",
      duration_of_employment: "21 years",
      monthly_income: 366447,
      loan_repayment: 2467,
      office_email: "cunningham.wyatt@zolavo.com"
    },
    social: {
      facebook: "warner.carson",
      instagram: "mullen_jenkins",
      twitter: "sawyer1"
    },
    guarantor: {
      full_name: "Hull Taylor",
      phone: 2347757229692,
      email: "hulltaylor@zolavo.com",
      relationship: "Friend"
    }
  },
  {
    id: 213,
    organization: "Exoswitch",
    username: "Chandler865",
    email: "chandlertaylor@exoswitch.com",
    phoneNumber: "(965) 457-3694",
    dateJoined: "2018-09-12",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 335040882,
      bank_name: "First Bank"
    },
    personalInformation: {
      fullname: "Whitney Burnett",
      bvn: 86965457493,
      gender: "Male",
      marital_status: "Single",
      children: 0,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Employed",
      sector_of_employment: "Finance",
      duration_of_employment: "2 years",
      monthly_income: 472953,
      loan_repayment: 3629,
      office_email: "louise.knowles@singavera.com"
    },
    social: {
      facebook: "karyn.oconnor",
      instagram: "crystal_hardin",
      twitter: "carole25"
    },
    guarantor: {
      full_name: "Swanson Santana",
      phone: 2347334143065,
      email: "swansonsantana@singavera.com",
      relationship: "Colleague"
    }
  },
  {
    id: 214,
    organization: "Pearlesex",
    username: "Fischer927",
    email: "fischersantana@pearlesex.com",
    phoneNumber: "(800) 531-2015",
    dateJoined: "2014-09-27",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 322032556,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Donaldson Forbes",
      bvn: 67312336969,
      gender: "Male",
      marital_status: "Widowed",
      children: 2,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Employed",
      sector_of_employment: "Government",
      duration_of_employment: "14 years",
      monthly_income: 108780,
      loan_repayment: 4526,
      office_email: "marie.levine@essensia.com"
    },
    social: {
      facebook: "cathleen.callahan",
      instagram: "lynch_hartman",
      twitter: "lesley83"
    },
    guarantor: {
      full_name: "Amber Lee",
      phone: 2349057613119,
      email: "amberlee@essensia.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 215,
    organization: "Dancerity",
    username: "Janis961",
    email: "janislee@dancerity.com",
    phoneNumber: "(882) 530-2243",
    dateJoined: "2023-10-21",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 372916657,
      bank_name: "Sterling Bank"
    },
    personalInformation: {
      fullname: "Cochran Powers",
      bvn: 10998769044,
      gender: "Female",
      marital_status: "Widowed",
      children: 1,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Retired",
      sector_of_employment: "Government",
      duration_of_employment: "1 years",
      monthly_income: 294434,
      loan_repayment: 4062,
      office_email: "chaney.patel@noralex.com"
    },
    social: {
      facebook: "andrews.nichols",
      instagram: "wallace_osborne",
      twitter: "aisha20"
    },
    guarantor: {
      full_name: "Poole Wade",
      phone: 2347707611855,
      email: "poolewade@noralex.com",
      relationship: "Colleague"
    }
  },
  {
    id: 216,
    organization: "Kegular",
    username: "Delaney708",
    email: "delaneywade@kegular.com",
    phoneNumber: "(803) 489-2973",
    dateJoined: "2023-04-16",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 61690445,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Shields Farmer",
      bvn: 46129466889,
      gender: "Female",
      marital_status: "Divorced",
      children: 5,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Unemployed",
      sector_of_employment: "Government",
      duration_of_employment: "37 years",
      monthly_income: 102630,
      loan_repayment: 3862,
      office_email: "tammi.price@ohmnet.com"
    },
    social: {
      facebook: "shepard.clark",
      instagram: "ballard_colon",
      twitter: "moreno42"
    },
    guarantor: {
      full_name: "Byers Klein",
      phone: 2348390051444,
      email: "byersklein@ohmnet.com",
      relationship: "Partner"
    }
  },
  {
    id: 217,
    organization: "Qnekt",
    username: "Genevieve460",
    email: "genevieveklein@qnekt.com",
    phoneNumber: "(818) 546-3999",
    dateJoined: "2019-06-08",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 53108269,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Potts Kline",
      bvn: 69980956271,
      gender: "Female",
      marital_status: "Married",
      children: 4,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Unemployed",
      sector_of_employment: "Construction",
      duration_of_employment: "29 years",
      monthly_income: 58758,
      loan_repayment: 2195,
      office_email: "pratt.greene@papricut.com"
    },
    social: {
      facebook: "esther.justice",
      instagram: "kathryn_chen",
      twitter: "leonard35"
    },
    guarantor: {
      full_name: "Patrica Langley",
      phone: 2347915309907,
      email: "patricalangley@papricut.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 218,
    organization: "Firewax",
    username: "Noble926",
    email: "noblelangley@firewax.com",
    phoneNumber: "(948) 570-3990",
    dateJoined: "2017-03-11",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 281563195,
      bank_name: "GTBank"
    },
    personalInformation: {
      fullname: "Esperanza Stevenson",
      bvn: 24620972892,
      gender: "Male",
      marital_status: "Widowed",
      children: 2,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Unemployed",
      sector_of_employment: "Education",
      duration_of_employment: "7 years",
      monthly_income: 402319,
      loan_repayment: 2565,
      office_email: "kim.bowen@kiosk.com"
    },
    social: {
      facebook: "katina.marshall",
      instagram: "etta_roach",
      twitter: "lopez21"
    },
    guarantor: {
      full_name: "Berger Fowler",
      phone: 2347777922932,
      email: "bergerfowler@kiosk.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 219,
    organization: "Zillanet",
    username: "Clarke163",
    email: "clarkefowler@zillanet.com",
    phoneNumber: "(815) 516-3302",
    dateJoined: "2020-08-24",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 133908107,
      bank_name: "UBA"
    },
    personalInformation: {
      fullname: "Herrera Wong",
      bvn: 89815260215,
      gender: "Male",
      marital_status: "Single",
      children: 1,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Student",
      sector_of_employment: "Construction",
      duration_of_employment: "16 years",
      monthly_income: 362961,
      loan_repayment: 1811,
      office_email: "rita.leonard@calcu.com"
    },
    social: {
      facebook: "humphrey.davidson",
      instagram: "bond_gill",
      twitter: "jasmine14"
    },
    guarantor: {
      full_name: "Chasity Medina",
      phone: 2348350668919,
      email: "chasitymedina@calcu.com",
      relationship: "Partner"
    }
  },
  {
    id: 220,
    organization: "Syntac",
    username: "Rocha743",
    email: "rochamedina@syntac.com",
    phoneNumber: "(929) 569-2276",
    dateJoined: "2024-07-31",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 338603906,
      bank_name: "First Bank"
    },
    personalInformation: {
      fullname: "Rosalinda Galloway",
      bvn: 73028120964,
      gender: "Male",
      marital_status: "Widowed",
      children: 0,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Retired",
      sector_of_employment: "Technology",
      duration_of_employment: "32 years",
      monthly_income: 338609,
      loan_repayment: 3527,
      office_email: "curry.serrano@mixers.com"
    },
    social: {
      facebook: "tricia.wilder",
      instagram: "goff_edwards",
      twitter: "roberson5"
    },
    guarantor: {
      full_name: "Mcbride Robinson",
      phone: 2348034735533,
      email: "mcbriderobinson@mixers.com",
      relationship: "Colleague"
    }
  },
  {
    id: 221,
    organization: "Twiist",
    username: "Fay403",
    email: "fayrobinson@twiist.com",
    phoneNumber: "(857) 503-3987",
    dateJoined: "2018-01-17",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 95470903,
      bank_name: "Sterling Bank"
    },
    personalInformation: {
      fullname: "Susanna Clayton",
      bvn: 17222446518,
      gender: "Female",
      marital_status: "Divorced",
      children: 5,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Self-employed",
      sector_of_employment: "Technology",
      duration_of_employment: "27 years",
      monthly_income: 420252,
      loan_repayment: 3546,
      office_email: "waller.head@interodeo.com"
    },
    social: {
      facebook: "pierce.hodge",
      instagram: "ava_patton",
      twitter: "charmaine23"
    },
    guarantor: {
      full_name: "England Bonner",
      phone: 2347598791714,
      email: "englandbonner@interodeo.com",
      relationship: "Partner"
    }
  },
  {
    id: 222,
    organization: "Telepark",
    username: "Cornelia847",
    email: "corneliabonner@telepark.com",
    phoneNumber: "(805) 573-3486",
    dateJoined: "2017-05-05",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 7794641,
      bank_name: "Wema Bank"
    },
    personalInformation: {
      fullname: "Davenport Roberts",
      bvn: 37598218524,
      gender: "Female",
      marital_status: "Married",
      children: 4,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Employed",
      sector_of_employment: "Government",
      duration_of_employment: "40 years",
      monthly_income: 129442,
      loan_repayment: 3192,
      office_email: "terrie.owen@uxmox.com"
    },
    social: {
      facebook: "lizzie.mejia",
      instagram: "luann_sosa",
      twitter: "powell58"
    },
    guarantor: {
      full_name: "Stein Barnes",
      phone: 2347698234466,
      email: "steinbarnes@uxmox.com",
      relationship: "Family"
    }
  },
  {
    id: 223,
    organization: "Isologia",
    username: "Santana985",
    email: "santanabarnes@isologia.com",
    phoneNumber: "(853) 440-2983",
    dateJoined: "2015-08-18",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 267294097,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Aurora Beard",
      bvn: 20308080844,
      gender: "Male",
      marital_status: "Married",
      children: 2,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Unemployed",
      sector_of_employment: "Technology",
      duration_of_employment: "34 years",
      monthly_income: 456130,
      loan_repayment: 3513,
      office_email: "ingram.mcknight@skybold.com"
    },
    social: {
      facebook: "acosta.hines",
      instagram: "richmond_collier",
      twitter: "melinda54"
    },
    guarantor: {
      full_name: "Misty Craft",
      phone: 2347557458917,
      email: "mistycraft@skybold.com",
      relationship: "Friend"
    }
  },
  {
    id: 224,
    organization: "Conferia",
    username: "Ursula159",
    email: "ursulacraft@conferia.com",
    phoneNumber: "(849) 412-3112",
    dateJoined: "2020-05-05",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 286971551,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Avila Gilliam",
      bvn: 77011460901,
      gender: "Female",
      marital_status: "Divorced",
      children: 1,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Self-employed",
      sector_of_employment: "Construction",
      duration_of_employment: "19 years",
      monthly_income: 368744,
      loan_repayment: 2199,
      office_email: "delacruz.silva@spacewax.com"
    },
    social: {
      facebook: "macdonald.wilson",
      instagram: "kris_watts",
      twitter: "britt54"
    },
    guarantor: {
      full_name: "Mccarthy Hopper",
      phone: 2347492456437,
      email: "mccarthyhopper@spacewax.com",
      relationship: "Friend"
    }
  },
  {
    id: 225,
    organization: "Gogol",
    username: "Briggs660",
    email: "briggshopper@gogol.com",
    phoneNumber: "(902) 457-3895",
    dateJoined: "2016-01-02",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 231174967,
      bank_name: "Sterling Bank"
    },
    personalInformation: {
      fullname: "Alston Daniel",
      bvn: 32732408816,
      gender: "Male",
      marital_status: "Married",
      children: 4,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Unemployed",
      sector_of_employment: "Education",
      duration_of_employment: "39 years",
      monthly_income: 159658,
      loan_repayment: 2689,
      office_email: "moss.wallace@ziore.com"
    },
    social: {
      facebook: "lee.hayes",
      instagram: "baxter_russell",
      twitter: "jannie59"
    },
    guarantor: {
      full_name: "Suzanne Ashley",
      phone: 2348483927495,
      email: "suzanneashley@ziore.com",
      relationship: "Friend"
    }
  },
  {
    id: 226,
    organization: "Gracker",
    username: "Virginia594",
    email: "virginiaashley@gracker.com",
    phoneNumber: "(852) 423-3836",
    dateJoined: "2019-01-18",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 451758005,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Penny Johns",
      bvn: 43915407879,
      gender: "Female",
      marital_status: "Married",
      children: 3,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Retired",
      sector_of_employment: "Education",
      duration_of_employment: "1 years",
      monthly_income: 245965,
      loan_repayment: 3184,
      office_email: "juliette.horne@cofine.com"
    },
    social: {
      facebook: "romero.ryan",
      instagram: "gloria_conner",
      twitter: "white94"
    },
    guarantor: {
      full_name: "Webster Bright",
      phone: 2348180638884,
      email: "websterbright@cofine.com",
      relationship: "Family"
    }
  },
  {
    id: 227,
    organization: "Pathways",
    username: "Malone900",
    email: "malonebright@pathways.com",
    phoneNumber: "(831) 579-3639",
    dateJoined: "2022-04-02",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 450761411,
      bank_name: "Wema Bank"
    },
    personalInformation: {
      fullname: "Potter Vazquez",
      bvn: 57679052141,
      gender: "Female",
      marital_status: "Married",
      children: 4,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Student",
      sector_of_employment: "Finance",
      duration_of_employment: "37 years",
      monthly_income: 136035,
      loan_repayment: 3592,
      office_email: "sandy.rhodes@gronk.com"
    },
    social: {
      facebook: "elena.fitzgerald",
      instagram: "riggs_walton",
      twitter: "valentine77"
    },
    guarantor: {
      full_name: "Jodie Hudson",
      phone: 2348487736751,
      email: "jodiehudson@gronk.com",
      relationship: "Colleague"
    }
  },
  {
    id: 228,
    organization: "Equitax",
    username: "Price665",
    email: "pricehudson@equitax.com",
    phoneNumber: "(836) 552-2205",
    dateJoined: "2019-03-19",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 113732296,
      bank_name: "GTBank"
    },
    personalInformation: {
      fullname: "Rivera Sanders",
      bvn: 11967763962,
      gender: "Female",
      marital_status: "Married",
      children: 2,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Employed",
      sector_of_employment: "Technology",
      duration_of_employment: "9 years",
      monthly_income: 98819,
      loan_repayment: 4909,
      office_email: "gill.boyer@voratak.com"
    },
    social: {
      facebook: "cash.zamora",
      instagram: "carmela_woodard",
      twitter: "maxwell2"
    },
    guarantor: {
      full_name: "Nguyen Nelson",
      phone: 2348724771736,
      email: "nguyennelson@voratak.com",
      relationship: "Family"
    }
  },
  {
    id: 229,
    organization: "Infotrips",
    username: "Sosa252",
    email: "sosanelson@infotrips.com",
    phoneNumber: "(829) 419-2037",
    dateJoined: "2022-06-07",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 273856002,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Janette Richard",
      bvn: 99803050136,
      gender: "Female",
      marital_status: "Single",
      children: 1,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Self-employed",
      sector_of_employment: "Agriculture",
      duration_of_employment: "18 years",
      monthly_income: 479770,
      loan_repayment: 2103,
      office_email: "mckee.brooks@senmei.com"
    },
    social: {
      facebook: "sherry.walker",
      instagram: "lottie_spencer",
      twitter: "rae65"
    },
    guarantor: {
      full_name: "Phelps Compton",
      phone: 2347444900963,
      email: "phelpscompton@senmei.com",
      relationship: "Colleague"
    }
  },
  {
    id: 230,
    organization: "Delphide",
    username: "Duran541",
    email: "durancompton@delphide.com",
    phoneNumber: "(833) 583-3288",
    dateJoined: "2020-06-06",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 78361187,
      bank_name: "Wema Bank"
    },
    personalInformation: {
      fullname: "Beatrice Larson",
      bvn: 48747005954,
      gender: "Male",
      marital_status: "Divorced",
      children: 1,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Self-employed",
      sector_of_employment: "Construction",
      duration_of_employment: "34 years",
      monthly_income: 128598,
      loan_repayment: 4791,
      office_email: "hatfield.rosales@dognosis.com"
    },
    social: {
      facebook: "alexandria.perkins",
      instagram: "douglas_melton",
      twitter: "kellie8"
    },
    guarantor: {
      full_name: "Wade Valencia",
      phone: 2347043121721,
      email: "wadevalencia@dognosis.com",
      relationship: "Colleague"
    }
  },
  {
    id: 231,
    organization: "Zork",
    username: "Hernandez333",
    email: "hernandezvalencia@zork.com",
    phoneNumber: "(940) 484-2518",
    dateJoined: "2020-03-08",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 357357270,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Shana Carver",
      bvn: 89683211429,
      gender: "Male",
      marital_status: "Married",
      children: 1,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Unemployed",
      sector_of_employment: "Retail",
      duration_of_employment: "37 years",
      monthly_income: 181516,
      loan_repayment: 1892,
      office_email: "patrick.avery@magneato.com"
    },
    social: {
      facebook: "bell.kirk",
      instagram: "monica_lindsay",
      twitter: "anthony46"
    },
    guarantor: {
      full_name: "Carissa Whitehead",
      phone: 2347448669544,
      email: "carissawhitehead@magneato.com",
      relationship: "Partner"
    }
  },
  {
    id: 232,
    organization: "Flumbo",
    username: "Sarah550",
    email: "sarahwhitehead@flumbo.com",
    phoneNumber: "(859) 577-2227",
    dateJoined: "2023-08-21",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 369778428,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Ruiz Rosario",
      bvn: 40181580369,
      gender: "Female",
      marital_status: "Divorced",
      children: 2,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Employed",
      sector_of_employment: "Government",
      duration_of_employment: "36 years",
      monthly_income: 267533,
      loan_repayment: 4633,
      office_email: "gilliam.sampson@caxt.com"
    },
    social: {
      facebook: "levy.walter",
      instagram: "mckay_rich",
      twitter: "linda17"
    },
    guarantor: {
      full_name: "Clarice Chavez",
      phone: 2348706332070,
      email: "claricechavez@caxt.com",
      relationship: "Family"
    }
  },
  {
    id: 233,
    organization: "Steelfab",
    username: "Kelley772",
    email: "kelleychavez@steelfab.com",
    phoneNumber: "(896) 558-2343",
    dateJoined: "2017-02-11",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 87915632,
      bank_name: "Sterling Bank"
    },
    personalInformation: {
      fullname: "Griffin Collins",
      bvn: 74497158900,
      gender: "Female",
      marital_status: "Married",
      children: 3,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Unemployed",
      sector_of_employment: "Agriculture",
      duration_of_employment: "6 years",
      monthly_income: 426292,
      loan_repayment: 4965,
      office_email: "april.houston@qiao.com"
    },
    social: {
      facebook: "vance.hale",
      instagram: "watts_duncan",
      twitter: "butler88"
    },
    guarantor: {
      full_name: "Ewing Vaughan",
      phone: 2347347275481,
      email: "ewingvaughan@qiao.com",
      relationship: "Partner"
    }
  },
  {
    id: 234,
    organization: "Kengen",
    username: "Alta983",
    email: "altavaughan@kengen.com",
    phoneNumber: "(987) 450-2728",
    dateJoined: "2016-03-15",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 61743222,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Forbes Holloway",
      bvn: 93541227581,
      gender: "Female",
      marital_status: "Divorced",
      children: 2,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Self-employed",
      sector_of_employment: "Retail",
      duration_of_employment: "11 years",
      monthly_income: 264152,
      loan_repayment: 3016,
      office_email: "ginger.kaufman@klugger.com"
    },
    social: {
      facebook: "monique.cain",
      instagram: "juarez_dudley",
      twitter: "bauer27"
    },
    guarantor: {
      full_name: "Elisa Paul",
      phone: 2347089505893,
      email: "elisapaul@klugger.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 235,
    organization: "Visalia",
    username: "Hayden262",
    email: "haydenpaul@visalia.com",
    phoneNumber: "(852) 477-2079",
    dateJoined: "2024-11-01",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 21283394,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Mueller Ray",
      bvn: 71064450980,
      gender: "Male",
      marital_status: "Widowed",
      children: 1,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Employed",
      sector_of_employment: "Agriculture",
      duration_of_employment: "30 years",
      monthly_income: 264017,
      loan_repayment: 3978,
      office_email: "jacobson.graves@quizka.com"
    },
    social: {
      facebook: "sharon.sharp",
      instagram: "erma_howell",
      twitter: "brock58"
    },
    guarantor: {
      full_name: "Floyd Byers",
      phone: 2348010459177,
      email: "floydbyers@quizka.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 236,
    organization: "Ersum",
    username: "Myers576",
    email: "myersbyers@ersum.com",
    phoneNumber: "(939) 426-2302",
    dateJoined: "2019-01-28",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 69806990,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Tran Hart",
      bvn: 56391653139,
      gender: "Female",
      marital_status: "Single",
      children: 0,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Self-employed",
      sector_of_employment: "Finance",
      duration_of_employment: "28 years",
      monthly_income: 398026,
      loan_repayment: 3663,
      office_email: "marsh.hughes@ludak.com"
    },
    social: {
      facebook: "garrison.nieves",
      instagram: "hawkins_kim",
      twitter: "helga1"
    },
    guarantor: {
      full_name: "Nielsen Mccullough",
      phone: 2347967426931,
      email: "nielsenmccullough@ludak.com",
      relationship: "Family"
    }
  },
  {
    id: 237,
    organization: "Intrawear",
    username: "Brenda285",
    email: "brendamccullough@intrawear.com",
    phoneNumber: "(975) 546-2432",
    dateJoined: "2017-06-22",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 434818979,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Jeanette Estes",
      bvn: 49455742225,
      gender: "Male",
      marital_status: "Single",
      children: 4,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Student",
      sector_of_employment: "Government",
      duration_of_employment: "39 years",
      monthly_income: 359305,
      loan_repayment: 4067,
      office_email: "obrien.austin@endicil.com"
    },
    social: {
      facebook: "tameka.sullivan",
      instagram: "simmons_trevino",
      twitter: "harriett45"
    },
    guarantor: {
      full_name: "Ola Burns",
      phone: 2347634616785,
      email: "olaburns@endicil.com",
      relationship: "Family"
    }
  },
  {
    id: 238,
    organization: "Zillatide",
    username: "Vanessa490",
    email: "vanessaburns@zillatide.com",
    phoneNumber: "(806) 466-2759",
    dateJoined: "2023-01-03",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 284957974,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Beatriz Cantrell",
      bvn: 96637620192,
      gender: "Female",
      marital_status: "Widowed",
      children: 3,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Employed",
      sector_of_employment: "Retail",
      duration_of_employment: "15 years",
      monthly_income: 71613,
      loan_repayment: 4082,
      office_email: "blair.nash@medalert.com"
    },
    social: {
      facebook: "petra.allison",
      instagram: "francine_kerr",
      twitter: "shaffer20"
    },
    guarantor: {
      full_name: "Gallagher Sykes",
      phone: 2348048143198,
      email: "gallaghersykes@medalert.com",
      relationship: "Family"
    }
  },
  {
    id: 239,
    organization: "Vertide",
    username: "Earline920",
    email: "earlinesykes@vertide.com",
    phoneNumber: "(974) 425-2686",
    dateJoined: "2017-05-22",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 488392193,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Margarita Mcneil",
      bvn: 69562084523,
      gender: "Male",
      marital_status: "Married",
      children: 3,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Employed",
      sector_of_employment: "Healthcare",
      duration_of_employment: "24 years",
      monthly_income: 246871,
      loan_repayment: 2135,
      office_email: "galloway.nguyen@wrapture.com"
    },
    social: {
      facebook: "wilkins.kent",
      instagram: "phillips_odonnell",
      twitter: "yolanda26"
    },
    guarantor: {
      full_name: "Heather Baldwin",
      phone: 2349012587420,
      email: "heatherbaldwin@wrapture.com",
      relationship: "Partner"
    }
  },
  {
    id: 240,
    organization: "Animalia",
    username: "Carmella990",
    email: "carmellabaldwin@animalia.com",
    phoneNumber: "(883) 504-2984",
    dateJoined: "2021-06-12",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 66144947,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Rosemarie Norris",
      bvn: 92681506392,
      gender: "Male",
      marital_status: "Single",
      children: 1,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Unemployed",
      sector_of_employment: "Construction",
      duration_of_employment: "26 years",
      monthly_income: 208471,
      loan_repayment: 2990,
      office_email: "araceli.matthews@opportech.com"
    },
    social: {
      facebook: "shirley.nicholson",
      instagram: "janell_morgan",
      twitter: "maryann8"
    },
    guarantor: {
      full_name: "Greta Willis",
      phone: 2347661905520,
      email: "gretawillis@opportech.com",
      relationship: "Family"
    }
  },
  {
    id: 241,
    organization: "Comveyer",
    username: "Charity301",
    email: "charitywillis@comveyer.com",
    phoneNumber: "(863) 483-3409",
    dateJoined: "2017-08-12",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 273944033,
      bank_name: "Wema Bank"
    },
    personalInformation: {
      fullname: "William Wise",
      bvn: 71574108526,
      gender: "Female",
      marital_status: "Widowed",
      children: 0,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Self-employed",
      sector_of_employment: "Education",
      duration_of_employment: "40 years",
      monthly_income: 232354,
      loan_repayment: 3476,
      office_email: "valeria.shannon@strozen.com"
    },
    social: {
      facebook: "burnett.parks",
      instagram: "kathrine_ratliff",
      twitter: "kate60"
    },
    guarantor: {
      full_name: "Rodriquez Mccoy",
      phone: 2347595394805,
      email: "rodriquezmccoy@strozen.com",
      relationship: "Colleague"
    }
  },
  {
    id: 242,
    organization: "Pyramax",
    username: "Wilcox401",
    email: "wilcoxmccoy@pyramax.com",
    phoneNumber: "(808) 427-3747",
    dateJoined: "2017-05-08",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 117640651,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Lakisha Livingston",
      bvn: 83234834934,
      gender: "Male",
      marital_status: "Widowed",
      children: 3,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Employed",
      sector_of_employment: "Education",
      duration_of_employment: "24 years",
      monthly_income: 330779,
      loan_repayment: 2458,
      office_email: "johnnie.pugh@comtrak.com"
    },
    social: {
      facebook: "mcgowan.waters",
      instagram: "madelyn_carr",
      twitter: "cameron56"
    },
    guarantor: {
      full_name: "Toni Pitts",
      phone: 2347816397070,
      email: "tonipitts@comtrak.com",
      relationship: "Partner"
    }
  },
  {
    id: 243,
    organization: "Endipin",
    username: "Tillman126",
    email: "tillmanpitts@endipin.com",
    phoneNumber: "(817) 461-3052",
    dateJoined: "2021-09-18",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 233683528,
      bank_name: "Sterling Bank"
    },
    personalInformation: {
      fullname: "Nunez Bowman",
      bvn: 64172788762,
      gender: "Male",
      marital_status: "Divorced",
      children: 5,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Employed",
      sector_of_employment: "Retail",
      duration_of_employment: "6 years",
      monthly_income: 133171,
      loan_repayment: 2874,
      office_email: "grant.warren@polarax.com"
    },
    social: {
      facebook: "pate.sanchez",
      instagram: "doreen_mckinney",
      twitter: "aguilar32"
    },
    guarantor: {
      full_name: "Teresa Horton",
      phone: 2348553119035,
      email: "teresahorton@polarax.com",
      relationship: "Friend"
    }
  },
  {
    id: 244,
    organization: "Limozen",
    username: "Garrett297",
    email: "garretthorton@limozen.com",
    phoneNumber: "(961) 403-2791",
    dateJoined: "2016-02-24",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 184487263,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Witt Kane",
      bvn: 73617896237,
      gender: "Male",
      marital_status: "Single",
      children: 4,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Employed",
      sector_of_employment: "Healthcare",
      duration_of_employment: "21 years",
      monthly_income: 449065,
      loan_repayment: 4411,
      office_email: "savannah.morrison@honotron.com"
    },
    social: {
      facebook: "abby.ramsey",
      instagram: "beth_barlow",
      twitter: "vicky26"
    },
    guarantor: {
      full_name: "Mays Vinson",
      phone: 2347642553574,
      email: "maysvinson@honotron.com",
      relationship: "Family"
    }
  },
  {
    id: 245,
    organization: "Parcoe",
    username: "Belinda231",
    email: "belindavinson@parcoe.com",
    phoneNumber: "(807) 511-2429",
    dateJoined: "2020-06-02",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 290081554,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Raquel Hendrix",
      bvn: 44139197442,
      gender: "Female",
      marital_status: "Widowed",
      children: 0,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Self-employed",
      sector_of_employment: "Agriculture",
      duration_of_employment: "35 years",
      monthly_income: 461733,
      loan_repayment: 4723,
      office_email: "robles.powell@zoinage.com"
    },
    social: {
      facebook: "isabelle.kirby",
      instagram: "clara_rojas",
      twitter: "farmer48"
    },
    guarantor: {
      full_name: "Marilyn Giles",
      phone: 2348489876433,
      email: "marilyngiles@zoinage.com",
      relationship: "Friend"
    }
  },
  {
    id: 246,
    organization: "Assurity",
    username: "Katheryn877",
    email: "katheryngiles@assurity.com",
    phoneNumber: "(822) 545-2833",
    dateJoined: "2020-03-30",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 449564703,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Gena Coleman",
      bvn: 10922401684,
      gender: "Male",
      marital_status: "Single",
      children: 3,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Retired",
      sector_of_employment: "Education",
      duration_of_employment: "21 years",
      monthly_income: 154152,
      loan_repayment: 4812,
      office_email: "allyson.pearson@musanpoly.com"
    },
    social: {
      facebook: "crane.lucas",
      instagram: "sherman_macdonald",
      twitter: "avis52"
    },
    guarantor: {
      full_name: "Adkins Soto",
      phone: 2347936093049,
      email: "adkinssoto@musanpoly.com",
      relationship: "Family"
    }
  },
  {
    id: 247,
    organization: "Visualix",
    username: "Dona100",
    email: "donasoto@visualix.com",
    phoneNumber: "(926) 495-2647",
    dateJoined: "2021-07-18",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 493527587,
      bank_name: "First Bank"
    },
    personalInformation: {
      fullname: "Fowler Middleton",
      bvn: 83821859527,
      gender: "Male",
      marital_status: "Single",
      children: 1,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Retired",
      sector_of_employment: "Agriculture",
      duration_of_employment: "40 years",
      monthly_income: 360166,
      loan_repayment: 4987,
      office_email: "ruth.mathews@accel.com"
    },
    social: {
      facebook: "camille.elliott",
      instagram: "emilia_combs",
      twitter: "nolan22"
    },
    guarantor: {
      full_name: "Schroeder King",
      phone: 2348682420940,
      email: "schroederking@accel.com",
      relationship: "Family"
    }
  },
  {
    id: 248,
    organization: "Roboid",
    username: "Rosella544",
    email: "rosellaking@roboid.com",
    phoneNumber: "(921) 492-3026",
    dateJoined: "2020-07-26",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 324931962,
      bank_name: "Sterling Bank"
    },
    personalInformation: {
      fullname: "Felicia Hooper",
      bvn: 47816784090,
      gender: "Female",
      marital_status: "Widowed",
      children: 3,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Employed",
      sector_of_employment: "Technology",
      duration_of_employment: "5 years",
      monthly_income: 57500,
      loan_repayment: 2795,
      office_email: "amanda.franklin@rodemco.com"
    },
    social: {
      facebook: "socorro.dunn",
      instagram: "mcleod_marks",
      twitter: "jordan63"
    },
    guarantor: {
      full_name: "Nannie Case",
      phone: 2347454065970,
      email: "nanniecase@rodemco.com",
      relationship: "Family"
    }
  },
  {
    id: 249,
    organization: "Vurbo",
    username: "Park961",
    email: "parkcase@vurbo.com",
    phoneNumber: "(877) 599-2221",
    dateJoined: "2020-08-03",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 256557007,
      bank_name: "GTBank"
    },
    personalInformation: {
      fullname: "Carla Figueroa",
      bvn: 90780302601,
      gender: "Female",
      marital_status: "Single",
      children: 1,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Self-employed",
      sector_of_employment: "Construction",
      duration_of_employment: "5 years",
      monthly_income: 313780,
      loan_repayment: 4354,
      office_email: "glenn.rodriquez@oatfarm.com"
    },
    social: {
      facebook: "mariana.mosley",
      instagram: "cheryl_witt",
      twitter: "krystal4"
    },
    guarantor: {
      full_name: "Peters Montgomery",
      phone: 2347201028816,
      email: "petersmontgomery@oatfarm.com",
      relationship: "Family"
    }
  },
  {
    id: 250,
    organization: "Mobildata",
    username: "Hamilton775",
    email: "hamiltonmontgomery@mobildata.com",
    phoneNumber: "(939) 598-3092",
    dateJoined: "2021-12-13",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 349664250,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Jensen Faulkner",
      bvn: 43559296580,
      gender: "Male",
      marital_status: "Married",
      children: 4,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Unemployed",
      sector_of_employment: "Government",
      duration_of_employment: "4 years",
      monthly_income: 224840,
      loan_repayment: 3283,
      office_email: "daugherty.madden@zillactic.com"
    },
    social: {
      facebook: "david.lindsey",
      instagram: "charlotte_holman",
      twitter: "joan27"
    },
    guarantor: {
      full_name: "Ratliff Buckley",
      phone: 2347300625183,
      email: "ratliffbuckley@zillactic.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 251,
    organization: "Zappix",
    username: "Bean974",
    email: "beanbuckley@zappix.com",
    phoneNumber: "(972) 586-2128",
    dateJoined: "2017-02-13",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 412528624,
      bank_name: "First Bank"
    },
    personalInformation: {
      fullname: "Lindsey Valentine",
      bvn: 33333646351,
      gender: "Female",
      marital_status: "Widowed",
      children: 5,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Unemployed",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "10 years",
      monthly_income: 217189,
      loan_repayment: 3647,
      office_email: "golden.carrillo@kinetica.com"
    },
    social: {
      facebook: "tessa.shepard",
      instagram: "vazquez_espinoza",
      twitter: "hoffman64"
    },
    guarantor: {
      full_name: "Moon Massey",
      phone: 2347073080457,
      email: "moonmassey@kinetica.com",
      relationship: "Family"
    }
  },
  {
    id: 252,
    organization: "Tsunamia",
    username: "Susie968",
    email: "susiemassey@tsunamia.com",
    phoneNumber: "(892) 439-2630",
    dateJoined: "2017-02-04",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 492968164,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Mclaughlin Mcintosh",
      bvn: 19308932073,
      gender: "Female",
      marital_status: "Single",
      children: 5,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Employed",
      sector_of_employment: "Retail",
      duration_of_employment: "28 years",
      monthly_income: 324409,
      loan_repayment: 3187,
      office_email: "berta.miranda@isoswitch.com"
    },
    social: {
      facebook: "krista.rose",
      instagram: "wendi_nolan",
      twitter: "thornton97"
    },
    guarantor: {
      full_name: "Jeannie Stanton",
      phone: 2347691348232,
      email: "jeanniestanton@isoswitch.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 253,
    organization: "Deepends",
    username: "Clayton356",
    email: "claytonstanton@deepends.com",
    phoneNumber: "(844) 440-3279",
    dateJoined: "2014-02-11",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 156747486,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Mccoy Cardenas",
      bvn: 44591104664,
      gender: "Female",
      marital_status: "Single",
      children: 5,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Unemployed",
      sector_of_employment: "Construction",
      duration_of_employment: "30 years",
      monthly_income: 435139,
      loan_repayment: 2287,
      office_email: "althea.cox@avenetro.com"
    },
    social: {
      facebook: "york.finch",
      instagram: "mia_richmond",
      twitter: "flynn73"
    },
    guarantor: {
      full_name: "Delgado Good",
      phone: 2348270952050,
      email: "delgadogood@avenetro.com",
      relationship: "Colleague"
    }
  },
  {
    id: 254,
    organization: "Waab",
    username: "Erin173",
    email: "eringood@waab.com",
    phoneNumber: "(883) 406-3014",
    dateJoined: "2024-01-10",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 86384312,
      bank_name: "Wema Bank"
    },
    personalInformation: {
      fullname: "Sears Burch",
      bvn: 27263042314,
      gender: "Female",
      marital_status: "Widowed",
      children: 3,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Student",
      sector_of_employment: "Technology",
      duration_of_employment: "22 years",
      monthly_income: 248218,
      loan_repayment: 2482,
      office_email: "marianne.savage@corecom.com"
    },
    social: {
      facebook: "bessie.washington",
      instagram: "henrietta_calhoun",
      twitter: "bailey2"
    },
    guarantor: {
      full_name: "Madeline Reese",
      phone: 2348053243589,
      email: "madelinereese@corecom.com",
      relationship: "Colleague"
    }
  },
  {
    id: 255,
    organization: "Anocha",
    username: "Isabel290",
    email: "isabelreese@anocha.com",
    phoneNumber: "(850) 518-2303",
    dateJoined: "2024-10-23",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 210428601,
      bank_name: "GTBank"
    },
    personalInformation: {
      fullname: "Christa Jacobs",
      bvn: 70383776335,
      gender: "Male",
      marital_status: "Divorced",
      children: 3,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Unemployed",
      sector_of_employment: "Technology",
      duration_of_employment: "36 years",
      monthly_income: 344014,
      loan_repayment: 3300,
      office_email: "parker.mathis@duoflex.com"
    },
    social: {
      facebook: "smith.cohen",
      instagram: "taylor_hoffman",
      twitter: "lucille18"
    },
    guarantor: {
      full_name: "Odessa Hess",
      phone: 2348658208535,
      email: "odessahess@duoflex.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 256,
    organization: "Circum",
    username: "Ericka588",
    email: "erickahess@circum.com",
    phoneNumber: "(985) 497-2679",
    dateJoined: "2014-12-29",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 69108251,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Dominguez Orr",
      bvn: 11708547644,
      gender: "Female",
      marital_status: "Divorced",
      children: 0,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Self-employed",
      sector_of_employment: "Agriculture",
      duration_of_employment: "6 years",
      monthly_income: 344093,
      loan_repayment: 2244,
      office_email: "carpenter.whitaker@earbang.com"
    },
    social: {
      facebook: "beck.chang",
      instagram: "leblanc_morse",
      twitter: "thomas85"
    },
    guarantor: {
      full_name: "Hood Whitley",
      phone: 2348493072299,
      email: "hoodwhitley@earbang.com",
      relationship: "Family"
    }
  },
  {
    id: 257,
    organization: "Kidstock",
    username: "Bright288",
    email: "brightwhitley@kidstock.com",
    phoneNumber: "(812) 558-2164",
    dateJoined: "2015-06-24",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 128717942,
      bank_name: "GTBank"
    },
    personalInformation: {
      fullname: "Travis Mcintyre",
      bvn: 55044259000,
      gender: "Male",
      marital_status: "Widowed",
      children: 0,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Self-employed",
      sector_of_employment: "Education",
      duration_of_employment: "31 years",
      monthly_income: 361469,
      loan_repayment: 4187,
      office_email: "day.abbott@vixo.com"
    },
    social: {
      facebook: "hannah.holt",
      instagram: "hampton_moran",
      twitter: "caroline12"
    },
    guarantor: {
      full_name: "Stevens Mckay",
      phone: 2349058748563,
      email: "stevensmckay@vixo.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 258,
    organization: "Geoforma",
    username: "Shawna223",
    email: "shawnamckay@geoforma.com",
    phoneNumber: "(906) 579-2057",
    dateJoined: "2016-01-03",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 238393532,
      bank_name: "Wema Bank"
    },
    personalInformation: {
      fullname: "Trudy Anderson",
      bvn: 70407278262,
      gender: "Male",
      marital_status: "Single",
      children: 5,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Retired",
      sector_of_employment: "Agriculture",
      duration_of_employment: "35 years",
      monthly_income: 393394,
      loan_repayment: 4185,
      office_email: "natalia.harvey@quarex.com"
    },
    social: {
      facebook: "simpson.mendoza",
      instagram: "vargas_underwood",
      twitter: "burgess25"
    },
    guarantor: {
      full_name: "Austin Joseph",
      phone: 2347785030090,
      email: "austinjoseph@quarex.com",
      relationship: "Colleague"
    }
  },
  {
    id: 259,
    organization: "Rodeocean",
    username: "Battle454",
    email: "battlejoseph@rodeocean.com",
    phoneNumber: "(984) 559-3541",
    dateJoined: "2020-03-12",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 196217240,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Lucia Young",
      bvn: 58504429596,
      gender: "Male",
      marital_status: "Single",
      children: 5,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Retired",
      sector_of_employment: "Retail",
      duration_of_employment: "24 years",
      monthly_income: 306534,
      loan_repayment: 2736,
      office_email: "queen.byrd@emtrac.com"
    },
    social: {
      facebook: "snow.cunningham",
      instagram: "allison_ward",
      twitter: "pearl47"
    },
    guarantor: {
      full_name: "Shelby Christensen",
      phone: 2347082593354,
      email: "shelbychristensen@emtrac.com",
      relationship: "Colleague"
    }
  },
  {
    id: 260,
    organization: "Zoarere",
    username: "Mosley931",
    email: "mosleychristensen@zoarere.com",
    phoneNumber: "(992) 491-3145",
    dateJoined: "2022-05-28",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 171926872,
      bank_name: "GTBank"
    },
    personalInformation: {
      fullname: "Delia Payne",
      bvn: 70294941847,
      gender: "Female",
      marital_status: "Divorced",
      children: 5,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Self-employed",
      sector_of_employment: "Finance",
      duration_of_employment: "2 years",
      monthly_income: 108577,
      loan_repayment: 4288,
      office_email: "gentry.molina@ovolo.com"
    },
    social: {
      facebook: "melba.thompson",
      instagram: "allie_berry",
      twitter: "ellison27"
    },
    guarantor: {
      full_name: "Wilkinson Everett",
      phone: 2348146462390,
      email: "wilkinsoneverett@ovolo.com",
      relationship: "Friend"
    }
  },
  {
    id: 261,
    organization: "Netility",
    username: "Alvarado190",
    email: "alvaradoeverett@netility.com",
    phoneNumber: "(916) 428-2519",
    dateJoined: "2021-03-31",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 93525355,
      bank_name: "Wema Bank"
    },
    personalInformation: {
      fullname: "Jacklyn Flores",
      bvn: 49104757749,
      gender: "Male",
      marital_status: "Married",
      children: 1,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Self-employed",
      sector_of_employment: "Construction",
      duration_of_employment: "7 years",
      monthly_income: 411300,
      loan_repayment: 4853,
      office_email: "woodard.blackwell@obliq.com"
    },
    social: {
      facebook: "tia.monroe",
      instagram: "erickson_juarez",
      twitter: "walters98"
    },
    guarantor: {
      full_name: "Katharine Mercado",
      phone: 2347038533191,
      email: "katharinemercado@obliq.com",
      relationship: "Colleague"
    }
  },
  {
    id: 262,
    organization: "Interfind",
    username: "Susana524",
    email: "susanamercado@interfind.com",
    phoneNumber: "(808) 406-2847",
    dateJoined: "2024-04-27",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 31560987,
      bank_name: "UBA"
    },
    personalInformation: {
      fullname: "Anne Macias",
      bvn: 10134648868,
      gender: "Female",
      marital_status: "Divorced",
      children: 0,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Retired",
      sector_of_employment: "Healthcare",
      duration_of_employment: "31 years",
      monthly_income: 84450,
      loan_repayment: 2650,
      office_email: "wall.gray@grainspot.com"
    },
    social: {
      facebook: "bernadette.wilkins",
      instagram: "robbie_jimenez",
      twitter: "mary15"
    },
    guarantor: {
      full_name: "Anderson Holland",
      phone: 2348598570072,
      email: "andersonholland@grainspot.com",
      relationship: "Friend"
    }
  },
  {
    id: 263,
    organization: "Xixan",
    username: "Bryan393",
    email: "bryanholland@xixan.com",
    phoneNumber: "(825) 413-2780",
    dateJoined: "2021-02-06",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 339503198,
      bank_name: "Wema Bank"
    },
    personalInformation: {
      fullname: "Wells Kelly",
      bvn: 67855437915,
      gender: "Female",
      marital_status: "Single",
      children: 0,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Unemployed",
      sector_of_employment: "Technology",
      duration_of_employment: "21 years",
      monthly_income: 69560,
      loan_repayment: 3396,
      office_email: "christensen.vance@geekko.com"
    },
    social: {
      facebook: "sophia.sellers",
      instagram: "keller_lancaster",
      twitter: "sweet92"
    },
    guarantor: {
      full_name: "Hudson Lowery",
      phone: 2348631601932,
      email: "hudsonlowery@geekko.com",
      relationship: "Family"
    }
  },
  {
    id: 264,
    organization: "Portico",
    username: "Hess837",
    email: "hesslowery@portico.com",
    phoneNumber: "(847) 580-2937",
    dateJoined: "2024-08-04",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 334708467,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Sellers Fernandez",
      bvn: 67738033128,
      gender: "Female",
      marital_status: "Divorced",
      children: 0,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Unemployed",
      sector_of_employment: "Construction",
      duration_of_employment: "38 years",
      monthly_income: 70623,
      loan_repayment: 2506,
      office_email: "renee.simpson@cemention.com"
    },
    social: {
      facebook: "logan.miles",
      instagram: "trujillo_puckett",
      twitter: "dawson29"
    },
    guarantor: {
      full_name: "Welch Rasmussen",
      phone: 2348876549074,
      email: "welchrasmussen@cemention.com",
      relationship: "Family"
    }
  },
  {
    id: 265,
    organization: "Codax",
    username: "Ernestine519",
    email: "ernestinerasmussen@codax.com",
    phoneNumber: "(893) 446-3801",
    dateJoined: "2016-05-09",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 306262335,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Rene David",
      bvn: 21951602804,
      gender: "Female",
      marital_status: "Single",
      children: 3,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Employed",
      sector_of_employment: "Construction",
      duration_of_employment: "23 years",
      monthly_income: 420187,
      loan_repayment: 2548,
      office_email: "alexis.carney@zentury.com"
    },
    social: {
      facebook: "mathis.bray",
      instagram: "wong_moreno",
      twitter: "stout91"
    },
    guarantor: {
      full_name: "Marguerite Stafford",
      phone: 2348721788872,
      email: "margueritestafford@zentury.com",
      relationship: "Colleague"
    }
  },
  {
    id: 266,
    organization: "Cinesanct",
    username: "Jaime820",
    email: "jaimestafford@cinesanct.com",
    phoneNumber: "(855) 477-2085",
    dateJoined: "2021-09-14",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 348302750,
      bank_name: "First Bank"
    },
    personalInformation: {
      fullname: "Ferrell Sargent",
      bvn: 97378304846,
      gender: "Male",
      marital_status: "Single",
      children: 5,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Retired",
      sector_of_employment: "Retail",
      duration_of_employment: "30 years",
      monthly_income: 242776,
      loan_repayment: 3376,
      office_email: "rodgers.leach@rodeomad.com"
    },
    social: {
      facebook: "mcfadden.hays",
      instagram: "letitia_griffin",
      twitter: "richardson88"
    },
    guarantor: {
      full_name: "Sanford Lott",
      phone: 2347283237907,
      email: "sanfordlott@rodeomad.com",
      relationship: "Family"
    }
  },
  {
    id: 267,
    organization: "Assistia",
    username: "Terrell873",
    email: "terrelllott@assistia.com",
    phoneNumber: "(852) 531-3257",
    dateJoined: "2020-12-26",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 263945450,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Annmarie Ford",
      bvn: 12345313679,
      gender: "Male",
      marital_status: "Single",
      children: 0,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Unemployed",
      sector_of_employment: "Healthcare",
      duration_of_employment: "16 years",
      monthly_income: 245467,
      loan_repayment: 2807,
      office_email: "crawford.welch@neptide.com"
    },
    social: {
      facebook: "morris.clay",
      instagram: "pacheco_navarro",
      twitter: "nichols63"
    },
    guarantor: {
      full_name: "Holcomb Gonzales",
      phone: 2348295636547,
      email: "holcombgonzales@neptide.com",
      relationship: "Family"
    }
  },
  {
    id: 268,
    organization: "Grok",
    username: "Elinor737",
    email: "elinorgonzales@grok.com",
    phoneNumber: "(807) 569-3069",
    dateJoined: "2020-07-25",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 369595034,
      bank_name: "GTBank"
    },
    personalInformation: {
      fullname: "Jimmie Salinas",
      bvn: 15179341080,
      gender: "Female",
      marital_status: "Married",
      children: 4,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Unemployed",
      sector_of_employment: "Finance",
      duration_of_employment: "1 years",
      monthly_income: 356026,
      loan_repayment: 2068,
      office_email: "meyer.shaw@furnafix.com"
    },
    social: {
      facebook: "felecia.weeks",
      instagram: "heidi_simmons",
      twitter: "wright63"
    },
    guarantor: {
      full_name: "Brooks Barber",
      phone: 2348832005939,
      email: "brooksbarber@furnafix.com",
      relationship: "Colleague"
    }
  },
  {
    id: 269,
    organization: "Nikuda",
    username: "Jenna887",
    email: "jennabarber@nikuda.com",
    phoneNumber: "(869) 589-2246",
    dateJoined: "2016-06-04",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 420522144,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Jaclyn May",
      bvn: 59769879903,
      gender: "Female",
      marital_status: "Married",
      children: 1,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Employed",
      sector_of_employment: "Government",
      duration_of_employment: "17 years",
      monthly_income: 148527,
      loan_repayment: 4731,
      office_email: "madden.lowe@navir.com"
    },
    social: {
      facebook: "gwen.pollard",
      instagram: "jordan_castro",
      twitter: "francis91"
    },
    guarantor: {
      full_name: "Evelyn Beach",
      phone: 2347742474908,
      email: "evelynbeach@navir.com",
      relationship: "Partner"
    }
  },
  {
    id: 270,
    organization: "Hairport",
    username: "Weber508",
    email: "weberbeach@hairport.com",
    phoneNumber: "(808) 433-3271",
    dateJoined: "2024-10-31",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 221411200,
      bank_name: "First Bank"
    },
    personalInformation: {
      fullname: "Cathy Coffey",
      bvn: 90257334369,
      gender: "Male",
      marital_status: "Widowed",
      children: 2,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Student",
      sector_of_employment: "Finance",
      duration_of_employment: "8 years",
      monthly_income: 253399,
      loan_repayment: 3233,
      office_email: "kelsey.blake@imperium.com"
    },
    social: {
      facebook: "ashlee.little",
      instagram: "hilary_mcbride",
      twitter: "morton2"
    },
    guarantor: {
      full_name: "Cross Hickman",
      phone: 2347309770742,
      email: "crosshickman@imperium.com",
      relationship: "Partner"
    }
  },
  {
    id: 271,
    organization: "Turnling",
    username: "Luna130",
    email: "lunahickman@turnling.com",
    phoneNumber: "(839) 460-2136",
    dateJoined: "2023-02-04",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 76208047,
      bank_name: "UBA"
    },
    personalInformation: {
      fullname: "Constance Oliver",
      bvn: 39963476809,
      gender: "Female",
      marital_status: "Married",
      children: 5,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Retired",
      sector_of_employment: "Healthcare",
      duration_of_employment: "29 years",
      monthly_income: 99983,
      loan_repayment: 2259,
      office_email: "buckner.carter@applidec.com"
    },
    social: {
      facebook: "fitzgerald.morton",
      instagram: "christi_white",
      twitter: "callie20"
    },
    guarantor: {
      full_name: "Sutton Dominguez",
      phone: 2348159170411,
      email: "suttondominguez@applidec.com",
      relationship: "Colleague"
    }
  },
  {
    id: 272,
    organization: "Comdom",
    username: "Melva915",
    email: "melvadominguez@comdom.com",
    phoneNumber: "(847) 477-3115",
    dateJoined: "2016-01-23",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 230781681,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Francisca Park",
      bvn: 36726635495,
      gender: "Female",
      marital_status: "Widowed",
      children: 4,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Student",
      sector_of_employment: "Construction",
      duration_of_employment: "11 years",
      monthly_income: 373328,
      loan_repayment: 2500,
      office_email: "decker.herman@skinserve.com"
    },
    social: {
      facebook: "nina.gonzalez",
      instagram: "higgins_barton",
      twitter: "knight22"
    },
    guarantor: {
      full_name: "Haley Bradley",
      phone: 2348347943476,
      email: "haleybradley@skinserve.com",
      relationship: "Colleague"
    }
  },
  {
    id: 273,
    organization: "Zentia",
    username: "Stephanie169",
    email: "stephaniebradley@zentia.com",
    phoneNumber: "(815) 581-3589",
    dateJoined: "2017-01-30",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 140518749,
      bank_name: "Wema Bank"
    },
    personalInformation: {
      fullname: "Jackie Avila",
      bvn: 82417393059,
      gender: "Male",
      marital_status: "Widowed",
      children: 3,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Unemployed",
      sector_of_employment: "Finance",
      duration_of_employment: "26 years",
      monthly_income: 161588,
      loan_repayment: 4448,
      office_email: "patty.mcgee@zanilla.com"
    },
    social: {
      facebook: "janine.freeman",
      instagram: "hunt_vang",
      twitter: "koch64"
    },
    guarantor: {
      full_name: "Violet Dunlap",
      phone: 2348136300323,
      email: "violetdunlap@zanilla.com",
      relationship: "Friend"
    }
  },
  {
    id: 274,
    organization: "Panzent",
    username: "Vega628",
    email: "vegadunlap@panzent.com",
    phoneNumber: "(833) 500-2185",
    dateJoined: "2018-02-03",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 120450742,
      bank_name: "GTBank"
    },
    personalInformation: {
      fullname: "Gibbs Blanchard",
      bvn: 83868456147,
      gender: "Male",
      marital_status: "Widowed",
      children: 3,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Employed",
      sector_of_employment: "Government",
      duration_of_employment: "19 years",
      monthly_income: 326893,
      loan_repayment: 2997,
      office_email: "sexton.bass@automon.com"
    },
    social: {
      facebook: "eaton.webster",
      instagram: "carlene_grant",
      twitter: "francis38"
    },
    guarantor: {
      full_name: "Wendy Koch",
      phone: 2347325443122,
      email: "wendykoch@automon.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 275,
    organization: "Krag",
    username: "Aline798",
    email: "alinekoch@krag.com",
    phoneNumber: "(907) 555-2794",
    dateJoined: "2019-09-17",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 110613858,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Madeleine Christian",
      bvn: 75293069283,
      gender: "Female",
      marital_status: "Widowed",
      children: 3,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Employed",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "36 years",
      monthly_income: 486138,
      loan_repayment: 2905,
      office_email: "leslie.wheeler@flyboyz.com"
    },
    social: {
      facebook: "stephenson.walters",
      instagram: "eunice_hayden",
      twitter: "graves24"
    },
    guarantor: {
      full_name: "Patterson Frank",
      phone: 2347385524481,
      email: "pattersonfrank@flyboyz.com",
      relationship: "Colleague"
    }
  },
  {
    id: 276,
    organization: "Comstruct",
    username: "Walsh748",
    email: "walshfrank@comstruct.com",
    phoneNumber: "(902) 446-3105",
    dateJoined: "2015-01-02",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 54319883,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Leigh Bates",
      bvn: 96435914347,
      gender: "Female",
      marital_status: "Divorced",
      children: 5,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Unemployed",
      sector_of_employment: "Agriculture",
      duration_of_employment: "32 years",
      monthly_income: 383556,
      loan_repayment: 1796,
      office_email: "maggie.logan@earthwax.com"
    },
    social: {
      facebook: "lourdes.marquez",
      instagram: "hattie_lewis",
      twitter: "spencer77"
    },
    guarantor: {
      full_name: "Terry Arnold",
      phone: 2348655735768,
      email: "terryarnold@earthwax.com",
      relationship: "Partner"
    }
  },
  {
    id: 277,
    organization: "Frenex",
    username: "Janet308",
    email: "janetarnold@frenex.com",
    phoneNumber: "(920) 583-3629",
    dateJoined: "2021-09-22",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 113194949,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Sherri Mueller",
      bvn: 70549130297,
      gender: "Female",
      marital_status: "Widowed",
      children: 0,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Employed",
      sector_of_employment: "Education",
      duration_of_employment: "26 years",
      monthly_income: 355810,
      loan_repayment: 4147,
      office_email: "kitty.wynn@netplode.com"
    },
    social: {
      facebook: "mccall.crosby",
      instagram: "laurel_saunders",
      twitter: "morin64"
    },
    guarantor: {
      full_name: "Judith Malone",
      phone: 2347109424055,
      email: "judithmalone@netplode.com",
      relationship: "Family"
    }
  },
  {
    id: 278,
    organization: "Colaire",
    username: "Brewer542",
    email: "brewermalone@colaire.com",
    phoneNumber: "(904) 468-2200",
    dateJoined: "2021-05-13",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 225887759,
      bank_name: "First Bank"
    },
    personalInformation: {
      fullname: "Holland Bryan",
      bvn: 42742775873,
      gender: "Male",
      marital_status: "Divorced",
      children: 3,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Retired",
      sector_of_employment: "Education",
      duration_of_employment: "26 years",
      monthly_income: 183577,
      loan_repayment: 3156,
      office_email: "buckley.blackburn@iplax.com"
    },
    social: {
      facebook: "camacho.tran",
      instagram: "lorene_lara",
      twitter: "patsy18"
    },
    guarantor: {
      full_name: "Deana Lester",
      phone: 2347301887003,
      email: "deanalester@iplax.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 279,
    organization: "Overplex",
    username: "Saundra368",
    email: "saundralester@overplex.com",
    phoneNumber: "(999) 428-2481",
    dateJoined: "2016-03-21",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 66845294,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Jewell Wolfe",
      bvn: 76755257748,
      gender: "Male",
      marital_status: "Married",
      children: 2,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Employed",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "39 years",
      monthly_income: 430588,
      loan_repayment: 3220,
      office_email: "dotson.velazquez@zilodyne.com"
    },
    social: {
      facebook: "dunn.cote",
      instagram: "darlene_irwin",
      twitter: "collins70"
    },
    guarantor: {
      full_name: "Shaw Schneider",
      phone: 2348761073345,
      email: "shawschneider@zilodyne.com",
      relationship: "Colleague"
    }
  },
  {
    id: 280,
    organization: "Eyeris",
    username: "Kelly784",
    email: "kellyschneider@eyeris.com",
    phoneNumber: "(975) 537-2344",
    dateJoined: "2022-09-23",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 116813339,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Daisy Daniels",
      bvn: 41799372444,
      gender: "Male",
      marital_status: "Married",
      children: 5,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Retired",
      sector_of_employment: "Education",
      duration_of_employment: "13 years",
      monthly_income: 434867,
      loan_repayment: 3025,
      office_email: "kristi.perez@uberlux.com"
    },
    social: {
      facebook: "mckinney.britt",
      instagram: "marina_barr",
      twitter: "kerry55"
    },
    guarantor: {
      full_name: "Angela Wilcox",
      phone: 2347710239448,
      email: "angelawilcox@uberlux.com",
      relationship: "Colleague"
    }
  },
  {
    id: 281,
    organization: "Rameon",
    username: "Hanson683",
    email: "hansonwilcox@rameon.com",
    phoneNumber: "(863) 538-3232",
    dateJoined: "2015-03-04",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 401115099,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Clay Bernard",
      bvn: 22819863722,
      gender: "Female",
      marital_status: "Married",
      children: 0,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Self-employed",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "25 years",
      monthly_income: 470802,
      loan_repayment: 4229,
      office_email: "richards.summers@equicom.com"
    },
    social: {
      facebook: "knox.rosa",
      instagram: "graham_chambers",
      twitter: "bethany48"
    },
    guarantor: {
      full_name: "Branch Condo",
      phone: 2348179076675,
      email: "branchcondo@equicom.com",
      relationship: "Colleague"
    }
  },
  {
    id: 282,
    organization: "Surelogic",
    username: "Shauna458",
    email: "shaunacondo@surelogic.com",
    phoneNumber: "(859) 492-2721",
    dateJoined: "2023-10-28",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 435161287,
      bank_name: "Sterling Bank"
    },
    personalInformation: {
      fullname: "Benson Conway",
      bvn: 53611050064,
      gender: "Male",
      marital_status: "Married",
      children: 3,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Retired",
      sector_of_employment: "Technology",
      duration_of_employment: "17 years",
      monthly_income: 461653,
      loan_repayment: 3136,
      office_email: "gaines.schultz@gonkle.com"
    },
    social: {
      facebook: "roberta.kramer",
      instagram: "leola_briggs",
      twitter: "thelma59"
    },
    guarantor: {
      full_name: "Conner Rivera",
      phone: 2347763627724,
      email: "connerrivera@gonkle.com",
      relationship: "Colleague"
    }
  },
  {
    id: 283,
    organization: "Flum",
    username: "Conrad153",
    email: "conradrivera@flum.com",
    phoneNumber: "(973) 472-2427",
    dateJoined: "2017-05-18",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 50855181,
      bank_name: "First Bank"
    },
    personalInformation: {
      fullname: "Mai Mcclain",
      bvn: 54583434953,
      gender: "Female",
      marital_status: "Divorced",
      children: 4,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Employed",
      sector_of_employment: "Technology",
      duration_of_employment: "10 years",
      monthly_income: 146439,
      loan_repayment: 4368,
      office_email: "deena.jacobson@escenta.com"
    },
    social: {
      facebook: "marquita.obrien",
      instagram: "bobbie_cruz",
      twitter: "mcintyre44"
    },
    guarantor: {
      full_name: "Sandoval Blevins",
      phone: 2347235030967,
      email: "sandovalblevins@escenta.com",
      relationship: "Partner"
    }
  },
  {
    id: 284,
    organization: "Quantasis",
    username: "Rosalie481",
    email: "rosalieblevins@quantasis.com",
    phoneNumber: "(856) 562-2890",
    dateJoined: "2021-06-26",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 138454389,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Estella Chandler",
      bvn: 73047631260,
      gender: "Male",
      marital_status: "Single",
      children: 2,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Retired",
      sector_of_employment: "Education",
      duration_of_employment: "20 years",
      monthly_income: 325048,
      loan_repayment: 4394,
      office_email: "gracie.allen@columella.com"
    },
    social: {
      facebook: "deborah.boone",
      instagram: "ramsey_evans",
      twitter: "bianca73"
    },
    guarantor: {
      full_name: "Gould Steele",
      phone: 2347695602658,
      email: "gouldsteele@columella.com",
      relationship: "Family"
    }
  },
  {
    id: 285,
    organization: "Shepard",
    username: "Oliver829",
    email: "oliversteele@shepard.com",
    phoneNumber: "(956) 438-3779",
    dateJoined: "2022-10-13",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 357056081,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Keri Joyner",
      bvn: 12447260484,
      gender: "Female",
      marital_status: "Divorced",
      children: 5,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Employed",
      sector_of_employment: "Government",
      duration_of_employment: "4 years",
      monthly_income: 433092,
      loan_repayment: 3320,
      office_email: "ayers.wells@golistic.com"
    },
    social: {
      facebook: "porter.downs",
      instagram: "claudette_woods",
      twitter: "robinson90"
    },
    guarantor: {
      full_name: "Lowe Page",
      phone: 2348140802377,
      email: "lowepage@golistic.com",
      relationship: "Partner"
    }
  },
  {
    id: 286,
    organization: "Joviold",
    username: "Whitfield556",
    email: "whitfieldpage@joviold.com",
    phoneNumber: "(810) 477-3586",
    dateJoined: "2020-09-30",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 297230024,
      bank_name: "UBA"
    },
    personalInformation: {
      fullname: "Schneider Fleming",
      bvn: 86064134087,
      gender: "Female",
      marital_status: "Single",
      children: 1,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Employed",
      sector_of_employment: "Finance",
      duration_of_employment: "13 years",
      monthly_income: 371628,
      loan_repayment: 2584,
      office_email: "ward.gentry@isbol.com"
    },
    social: {
      facebook: "jillian.wagner",
      instagram: "virgie_hinton",
      twitter: "aurelia51"
    },
    guarantor: {
      full_name: "Oneill Mcgowan",
      phone: 2348944579135,
      email: "oneillmcgowan@isbol.com",
      relationship: "Partner"
    }
  },
  {
    id: 287,
    organization: "Quordate",
    username: "Susan620",
    email: "susanmcgowan@quordate.com",
    phoneNumber: "(864) 590-2069",
    dateJoined: "2019-12-15",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 413541728,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Jarvis Hatfield",
      bvn: 53971757058,
      gender: "Female",
      marital_status: "Married",
      children: 0,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Self-employed",
      sector_of_employment: "Healthcare",
      duration_of_employment: "21 years",
      monthly_income: 402897,
      loan_repayment: 4334,
      office_email: "wood.mann@comtext.com"
    },
    social: {
      facebook: "gilmore.davis",
      instagram: "eve_miller",
      twitter: "pennington99"
    },
    guarantor: {
      full_name: "Ollie Chaney",
      phone: 2349060708009,
      email: "olliechaney@comtext.com",
      relationship: "Family"
    }
  },
  {
    id: 288,
    organization: "Emergent",
    username: "Pena733",
    email: "penachaney@emergent.com",
    phoneNumber: "(808) 594-3569",
    dateJoined: "2021-03-05",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 489814384,
      bank_name: "UBA"
    },
    personalInformation: {
      fullname: "Rivas Guzman",
      bvn: 95294506791,
      gender: "Female",
      marital_status: "Married",
      children: 5,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Retired",
      sector_of_employment: "Agriculture",
      duration_of_employment: "26 years",
      monthly_income: 410174,
      loan_repayment: 3639,
      office_email: "joanna.stout@marvane.com"
    },
    social: {
      facebook: "lana.ross",
      instagram: "traci_ayala",
      twitter: "serrano36"
    },
    guarantor: {
      full_name: "Gwendolyn Mccormick",
      phone: 2347844957540,
      email: "gwendolynmccormick@marvane.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 289,
    organization: "Comveyor",
    username: "Earlene549",
    email: "earlenemccormick@comveyor.com",
    phoneNumber: "(917) 534-3031",
    dateJoined: "2018-10-01",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 118546749,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Cannon Higgins",
      bvn: 24046462104,
      gender: "Male",
      marital_status: "Widowed",
      children: 1,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Retired",
      sector_of_employment: "Finance",
      duration_of_employment: "6 years",
      monthly_income: 148479,
      loan_repayment: 3438,
      office_email: "bridget.ballard@hawkster.com"
    },
    social: {
      facebook: "perry.ball",
      instagram: "isabella_villarreal",
      twitter: "nora74"
    },
    guarantor: {
      full_name: "Mable Walls",
      phone: 2347909507149,
      email: "mablewalls@hawkster.com",
      relationship: "Colleague"
    }
  },
  {
    id: 290,
    organization: "Brainclip",
    username: "Burt190",
    email: "burtwalls@brainclip.com",
    phoneNumber: "(960) 485-3175",
    dateJoined: "2019-06-09",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 499337020,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Elsie Prince",
      bvn: 21037926739,
      gender: "Female",
      marital_status: "Single",
      children: 1,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Unemployed",
      sector_of_employment: "Healthcare",
      duration_of_employment: "22 years",
      monthly_income: 265553,
      loan_repayment: 3935,
      office_email: "mallory.graham@enerforce.com"
    },
    social: {
      facebook: "claire.scott",
      instagram: "gonzales_rush",
      twitter: "liz56"
    },
    guarantor: {
      full_name: "Natasha Calderon",
      phone: 2348204188721,
      email: "natashacalderon@enerforce.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 291,
    organization: "Gluid",
    username: "Noel425",
    email: "noelcalderon@gluid.com",
    phoneNumber: "(807) 480-2482",
    dateJoined: "2024-08-10",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 386870743,
      bank_name: "GTBank"
    },
    personalInformation: {
      fullname: "Green Garza",
      bvn: 40358363250,
      gender: "Male",
      marital_status: "Married",
      children: 0,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Retired",
      sector_of_employment: "Agriculture",
      duration_of_employment: "29 years",
      monthly_income: 177581,
      loan_repayment: 4815,
      office_email: "langley.mullins@genesynk.com"
    },
    social: {
      facebook: "cindy.humphrey",
      instagram: "booker_huber",
      twitter: "little3"
    },
    guarantor: {
      full_name: "Davidson Meyers",
      phone: 2347160445316,
      email: "davidsonmeyers@genesynk.com",
      relationship: "Colleague"
    }
  },
  {
    id: 292,
    organization: "Optyk",
    username: "Downs940",
    email: "downsmeyers@optyk.com",
    phoneNumber: "(938) 519-2349",
    dateJoined: "2014-10-30",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 196828680,
      bank_name: "UBA"
    },
    personalInformation: {
      fullname: "Leta Alvarado",
      bvn: 46345157210,
      gender: "Male",
      marital_status: "Married",
      children: 5,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Self-employed",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "5 years",
      monthly_income: 223089,
      loan_repayment: 2715,
      office_email: "sherrie.morris@gology.com"
    },
    social: {
      facebook: "christy.patrick",
      instagram: "saunders_dale",
      twitter: "gretchen44"
    },
    guarantor: {
      full_name: "Bonner Stevens",
      phone: 2347249704559,
      email: "bonnerstevens@gology.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 293,
    organization: "Volax",
    username: "Julie847",
    email: "juliestevens@volax.com",
    phoneNumber: "(955) 403-2556",
    dateJoined: "2020-02-20",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 387312993,
      bank_name: "GTBank"
    },
    personalInformation: {
      fullname: "Ella Talley",
      bvn: 74846725342,
      gender: "Female",
      marital_status: "Married",
      children: 1,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Unemployed",
      sector_of_employment: "Education",
      duration_of_employment: "31 years",
      monthly_income: 217535,
      loan_repayment: 3939,
      office_email: "doyle.tanner@verton.com"
    },
    social: {
      facebook: "wise.cooke",
      instagram: "dianna_foreman",
      twitter: "bartlett96"
    },
    guarantor: {
      full_name: "Concepcion Sparks",
      phone: 2348625584571,
      email: "concepcionsparks@verton.com",
      relationship: "Family"
    }
  },
  {
    id: 294,
    organization: "Zedalis",
    username: "Shari872",
    email: "sharisparks@zedalis.com",
    phoneNumber: "(947) 599-2709",
    dateJoined: "2024-09-05",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 68407791,
      bank_name: "Wema Bank"
    },
    personalInformation: {
      fullname: "Lucile Hahn",
      bvn: 94524272613,
      gender: "Male",
      marital_status: "Married",
      children: 1,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Unemployed",
      sector_of_employment: "Construction",
      duration_of_employment: "21 years",
      monthly_income: 477952,
      loan_repayment: 3292,
      office_email: "black.raymond@mantro.com"
    },
    social: {
      facebook: "eileen.mcdonald",
      instagram: "tonya_peters",
      twitter: "kirk77"
    },
    guarantor: {
      full_name: "Allison Barry",
      phone: 2349018955931,
      email: "allisonbarry@mantro.com",
      relationship: "Friend"
    }
  },
  {
    id: 295,
    organization: "Farmage",
    username: "Carey557",
    email: "careybarry@farmage.com",
    phoneNumber: "(927) 571-2326",
    dateJoined: "2023-12-04",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 308340025,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "West Harper",
      bvn: 75797538838,
      gender: "Male",
      marital_status: "Single",
      children: 5,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Self-employed",
      sector_of_employment: "Healthcare",
      duration_of_employment: "13 years",
      monthly_income: 178916,
      loan_repayment: 3421,
      office_email: "vang.morrow@microluxe.com"
    },
    social: {
      facebook: "willis.pena",
      instagram: "mindy_fuller",
      twitter: "abigail97"
    },
    guarantor: {
      full_name: "Rosanne Adams",
      phone: 2347389515464,
      email: "rosanneadams@microluxe.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 296,
    organization: "Sureplex",
    username: "Finley849",
    email: "finleyadams@sureplex.com",
    phoneNumber: "(844) 423-2830",
    dateJoined: "2021-01-28",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 175649100,
      bank_name: "Sterling Bank"
    },
    personalInformation: {
      fullname: "Frieda Sherman",
      bvn: 40448045501,
      gender: "Female",
      marital_status: "Divorced",
      children: 4,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Student",
      sector_of_employment: "Healthcare",
      duration_of_employment: "28 years",
      monthly_income: 467770,
      loan_repayment: 3922,
      office_email: "margie.herring@tubesys.com"
    },
    social: {
      facebook: "carrillo.french",
      instagram: "rose_ortiz",
      twitter: "caitlin15"
    },
    guarantor: {
      full_name: "Talley Morin",
      phone: 2348857877664,
      email: "talleymorin@tubesys.com",
      relationship: "Family"
    }
  },
  {
    id: 297,
    organization: "Tripsch",
    username: "Roberts568",
    email: "robertsmorin@tripsch.com",
    phoneNumber: "(841) 417-2939",
    dateJoined: "2015-09-18",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 376709790,
      bank_name: "Wema Bank"
    },
    personalInformation: {
      fullname: "Debra Hancock",
      bvn: 46686470884,
      gender: "Female",
      marital_status: "Single",
      children: 5,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Self-employed",
      sector_of_employment: "Technology",
      duration_of_employment: "36 years",
      monthly_income: 105297,
      loan_repayment: 2740,
      office_email: "elise.fry@idealis.com"
    },
    social: {
      facebook: "clemons.mckee",
      instagram: "baldwin_alvarez",
      twitter: "hester62"
    },
    guarantor: {
      full_name: "Maynard Mckenzie",
      phone: 2347177391101,
      email: "maynardmckenzie@idealis.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 298,
    organization: "Digirang",
    username: "Annette631",
    email: "annettemckenzie@digirang.com",
    phoneNumber: "(845) 462-2486",
    dateJoined: "2015-01-14",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 214907107,
      bank_name: "First Bank"
    },
    personalInformation: {
      fullname: "Rochelle Rowe",
      bvn: 48894993341,
      gender: "Male",
      marital_status: "Married",
      children: 1,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Self-employed",
      sector_of_employment: "Finance",
      duration_of_employment: "30 years",
      monthly_income: 452623,
      loan_repayment: 2007,
      office_email: "dana.gould@renovize.com"
    },
    social: {
      facebook: "leanna.england",
      instagram: "small_bird",
      twitter: "mullins65"
    },
    guarantor: {
      full_name: "Maude Holmes",
      phone: 2348664368038,
      email: "maudeholmes@renovize.com",
      relationship: "Partner"
    }
  },
  {
    id: 299,
    organization: "Quadeebo",
    username: "Kane327",
    email: "kaneholmes@quadeebo.com",
    phoneNumber: "(958) 583-3026",
    dateJoined: "2016-09-22",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 438098210,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Berg Bolton",
      bvn: 96721535520,
      gender: "Male",
      marital_status: "Single",
      children: 1,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Employed",
      sector_of_employment: "Agriculture",
      duration_of_employment: "16 years",
      monthly_income: 180452,
      loan_repayment: 4934,
      office_email: "lambert.lloyd@diginetic.com"
    },
    social: {
      facebook: "bette.heath",
      instagram: "tanya_riggs",
      twitter: "vonda24"
    },
    guarantor: {
      full_name: "Justine Tate",
      phone: 2348834037026,
      email: "justinetate@diginetic.com",
      relationship: "Friend"
    }
  },
  {
    id: 300,
    organization: "Dymi",
    username: "Carly860",
    email: "carlytate@dymi.com",
    phoneNumber: "(842) 528-3346",
    dateJoined: "2015-03-20",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 399297284,
      bank_name: "GTBank"
    },
    personalInformation: {
      fullname: "Tracy Peterson",
      bvn: 46734051367,
      gender: "Female",
      marital_status: "Divorced",
      children: 1,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Unemployed",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "32 years",
      monthly_income: 455957,
      loan_repayment: 2745,
      office_email: "kerr.knight@xoggle.com"
    },
    social: {
      facebook: "rowena.zimmerman",
      instagram: "lou_vaughn",
      twitter: "lidia13"
    },
    guarantor: {
      full_name: "Mcclain Beck",
      phone: 2348963165291,
      email: "mcclainbeck@xoggle.com",
      relationship: "Family"
    }
  },
  {
    id: 301,
    organization: "Netbook",
    username: "Tamra553",
    email: "tamrabeck@netbook.com",
    phoneNumber: "(956) 424-3173",
    dateJoined: "2021-01-10",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 57876161,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Priscilla Ramos",
      bvn: 30405184395,
      gender: "Female",
      marital_status: "Married",
      children: 2,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Student",
      sector_of_employment: "Finance",
      duration_of_employment: "29 years",
      monthly_income: 163615,
      loan_repayment: 3950,
      office_email: "cabrera.farley@bittor.com"
    },
    social: {
      facebook: "bertie.valdez",
      instagram: "reed_berger",
      twitter: "hayes61"
    },
    guarantor: {
      full_name: "Goodman Baxter",
      phone: 2348473616640,
      email: "goodmanbaxter@bittor.com",
      relationship: "Colleague"
    }
  },
  {
    id: 302,
    organization: "Anacho",
    username: "Martinez159",
    email: "martinezbaxter@anacho.com",
    phoneNumber: "(880) 471-3296",
    dateJoined: "2017-10-20",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 115110083,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Hurst Wood",
      bvn: 83851908610,
      gender: "Male",
      marital_status: "Single",
      children: 2,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Employed",
      sector_of_employment: "Retail",
      duration_of_employment: "31 years",
      monthly_income: 113848,
      loan_repayment: 3873,
      office_email: "faulkner.frye@bisba.com"
    },
    social: {
      facebook: "lorie.harris",
      instagram: "desiree_odom",
      twitter: "tanisha26"
    },
    guarantor: {
      full_name: "Diaz Shelton",
      phone: 2347525635784,
      email: "diazshelton@bisba.com",
      relationship: "Partner"
    }
  },
  {
    id: 303,
    organization: "Gleamink",
    username: "Marquez438",
    email: "marquezshelton@gleamink.com",
    phoneNumber: "(952) 496-2665",
    dateJoined: "2017-07-05",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 148170659,
      bank_name: "Sterling Bank"
    },
    personalInformation: {
      fullname: "Neal Mason",
      bvn: 52569854891,
      gender: "Male",
      marital_status: "Single",
      children: 0,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Employed",
      sector_of_employment: "Finance",
      duration_of_employment: "3 years",
      monthly_income: 468402,
      loan_repayment: 4912,
      office_email: "jeanine.hood@vetron.com"
    },
    social: {
      facebook: "phyllis.barron",
      instagram: "rosa_duran",
      twitter: "janice9"
    },
    guarantor: {
      full_name: "Stefanie Mitchell",
      phone: 2347888264945,
      email: "stefaniemitchell@vetron.com",
      relationship: "Colleague"
    }
  },
  {
    id: 304,
    organization: "Bitendrex",
    username: "Solomon433",
    email: "solomonmitchell@bitendrex.com",
    phoneNumber: "(907) 526-2892",
    dateJoined: "2022-12-02",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 465670324,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Gamble Hensley",
      bvn: 77362795921,
      gender: "Female",
      marital_status: "Widowed",
      children: 0,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Retired",
      sector_of_employment: "Government",
      duration_of_employment: "38 years",
      monthly_income: 78987,
      loan_repayment: 4447,
      office_email: "amparo.henson@extremo.com"
    },
    social: {
      facebook: "walton.campbell",
      instagram: "jenny_rice",
      twitter: "sonia88"
    },
    guarantor: {
      full_name: "Reeves Petersen",
      phone: 2348049798800,
      email: "reevespetersen@extremo.com",
      relationship: "Colleague"
    }
  },
  {
    id: 305,
    organization: "Comtrek",
    username: "Sanchez383",
    email: "sanchezpetersen@comtrek.com",
    phoneNumber: "(894) 552-2844",
    dateJoined: "2023-01-17",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 181658664,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Middleton Shields",
      bvn: 25781445808,
      gender: "Female",
      marital_status: "Divorced",
      children: 5,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Employed",
      sector_of_employment: "Agriculture",
      duration_of_employment: "25 years",
      monthly_income: 356280,
      loan_repayment: 4482,
      office_email: "mann.hampton@exospace.com"
    },
    social: {
      facebook: "castro.hardy",
      instagram: "lane_delacruz",
      twitter: "donna68"
    },
    guarantor: {
      full_name: "Griffith Whitfield",
      phone: 2349070555258,
      email: "griffithwhitfield@exospace.com",
      relationship: "Partner"
    }
  },
  {
    id: 306,
    organization: "Motovate",
    username: "Mason151",
    email: "masonwhitfield@motovate.com",
    phoneNumber: "(800) 516-3105",
    dateJoined: "2023-04-12",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 461827792,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Bonnie Hyde",
      bvn: 31437381583,
      gender: "Female",
      marital_status: "Divorced",
      children: 1,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Student",
      sector_of_employment: "Technology",
      duration_of_employment: "37 years",
      monthly_income: 128457,
      loan_repayment: 2239,
      office_email: "erica.randolph@arctiq.com"
    },
    social: {
      facebook: "stacy.baker",
      instagram: "rosie_brewer",
      twitter: "josephine61"
    },
    guarantor: {
      full_name: "Best Roth",
      phone: 2348956059285,
      email: "bestroth@arctiq.com",
      relationship: "Partner"
    }
  },
  {
    id: 307,
    organization: "Artworlds",
    username: "Hutchinson944",
    email: "hutchinsonroth@artworlds.com",
    phoneNumber: "(974) 591-3657",
    dateJoined: "2016-12-30",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 426100698,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Regina Fox",
      bvn: 86803007332,
      gender: "Female",
      marital_status: "Married",
      children: 2,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Student",
      sector_of_employment: "Government",
      duration_of_employment: "26 years",
      monthly_income: 258361,
      loan_repayment: 1959,
      office_email: "marion.mcleod@asimiline.com"
    },
    social: {
      facebook: "fran.cooley",
      instagram: "sharpe_lawrence",
      twitter: "rosanna94"
    },
    guarantor: {
      full_name: "Angelica Jarvis",
      phone: 2348346917434,
      email: "angelicajarvis@asimiline.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 308,
    organization: "Puria",
    username: "Baird804",
    email: "bairdjarvis@puria.com",
    phoneNumber: "(992) 514-3270",
    dateJoined: "2017-12-20",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 482755587,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Cotton Cannon",
      bvn: 21281594645,
      gender: "Male",
      marital_status: "Married",
      children: 2,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Self-employed",
      sector_of_employment: "Construction",
      duration_of_employment: "33 years",
      monthly_income: 62284,
      loan_repayment: 3790,
      office_email: "blanca.moss@bullzone.com"
    },
    social: {
      facebook: "shepherd.terrell",
      instagram: "alejandra_dennis",
      twitter: "kristina9"
    },
    guarantor: {
      full_name: "Samantha Cline",
      phone: 2347586345227,
      email: "samanthacline@bullzone.com",
      relationship: "Partner"
    }
  },
  {
    id: 309,
    organization: "Sultrax",
    username: "Debora244",
    email: "deboracline@sultrax.com",
    phoneNumber: "(956) 448-2957",
    dateJoined: "2023-12-19",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 415534719,
      bank_name: "Wema Bank"
    },
    personalInformation: {
      fullname: "Molina Cervantes",
      bvn: 55709235602,
      gender: "Male",
      marital_status: "Divorced",
      children: 1,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Unemployed",
      sector_of_employment: "Construction",
      duration_of_employment: "6 years",
      monthly_income: 155404,
      loan_repayment: 4219,
      office_email: "armstrong.santiago@dyno.com"
    },
    social: {
      facebook: "jessie.rodgers",
      instagram: "trisha_palmer",
      twitter: "lesa19"
    },
    guarantor: {
      full_name: "Bernice Oneil",
      phone: 2347905976956,
      email: "berniceoneil@dyno.com",
      relationship: "Family"
    }
  },
  {
    id: 310,
    organization: "Isosure",
    username: "Glenna710",
    email: "glennaoneil@isosure.com",
    phoneNumber: "(962) 549-2434",
    dateJoined: "2021-11-05",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 229991471,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Randolph Banks",
      bvn: 58973113732,
      gender: "Male",
      marital_status: "Widowed",
      children: 5,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Retired",
      sector_of_employment: "Construction",
      duration_of_employment: "7 years",
      monthly_income: 368347,
      loan_repayment: 3974,
      office_email: "frost.hester@opticall.com"
    },
    social: {
      facebook: "hilda.reyes",
      instagram: "nash_butler",
      twitter: "liliana4"
    },
    guarantor: {
      full_name: "Meyers Garcia",
      phone: 2348130223667,
      email: "meyersgarcia@opticall.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 311,
    organization: "Waretel",
    username: "Patricia120",
    email: "patriciagarcia@waretel.com",
    phoneNumber: "(957) 427-3057",
    dateJoined: "2022-08-06",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 321022559,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Mildred Hogan",
      bvn: 88659441734,
      gender: "Male",
      marital_status: "Divorced",
      children: 0,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Student",
      sector_of_employment: "Healthcare",
      duration_of_employment: "28 years",
      monthly_income: 244288,
      loan_repayment: 3457,
      office_email: "annie.camacho@enersave.com"
    },
    social: {
      facebook: "jill.stark",
      instagram: "prince_ramirez",
      twitter: "lowery97"
    },
    guarantor: {
      full_name: "Newton Whitney",
      phone: 2348396655330,
      email: "newtonwhitney@enersave.com",
      relationship: "Family"
    }
  },
  {
    id: 312,
    organization: "Zensus",
    username: "Greene723",
    email: "greenewhitney@zensus.com",
    phoneNumber: "(919) 482-2746",
    dateJoined: "2023-05-29",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 224128300,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Elnora Buchanan",
      bvn: 58921138133,
      gender: "Female",
      marital_status: "Widowed",
      children: 4,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Student",
      sector_of_employment: "Retail",
      duration_of_employment: "2 years",
      monthly_income: 97180,
      loan_repayment: 3937,
      office_email: "andrea.burton@medmex.com"
    },
    social: {
      facebook: "tabatha.harmon",
      instagram: "jeannine_fitzpatrick",
      twitter: "berry92"
    },
    guarantor: {
      full_name: "Candace Fischer",
      phone: 2347239745123,
      email: "candacefischer@medmex.com",
      relationship: "Partner"
    }
  },
  {
    id: 313,
    organization: "Zepitope",
    username: "Valencia577",
    email: "valenciafischer@zepitope.com",
    phoneNumber: "(995) 549-3635",
    dateJoined: "2017-03-02",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 204869742,
      bank_name: "GTBank"
    },
    personalInformation: {
      fullname: "Stanley Cherry",
      bvn: 45047298604,
      gender: "Female",
      marital_status: "Widowed",
      children: 5,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Retired",
      sector_of_employment: "Retail",
      duration_of_employment: "38 years",
      monthly_income: 485615,
      loan_repayment: 4271,
      office_email: "katie.luna@vicon.com"
    },
    social: {
      facebook: "martina.crawford",
      instagram: "marjorie_hurley",
      twitter: "connie93"
    },
    guarantor: {
      full_name: "Merritt Frazier",
      phone: 2347752993320,
      email: "merrittfrazier@vicon.com",
      relationship: "Colleague"
    }
  },
  {
    id: 314,
    organization: "Webiotic",
    username: "Lorna332",
    email: "lornafrazier@webiotic.com",
    phoneNumber: "(861) 500-3634",
    dateJoined: "2016-05-05",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 153107100,
      bank_name: "UBA"
    },
    personalInformation: {
      fullname: "Odonnell Owens",
      bvn: 40472346831,
      gender: "Female",
      marital_status: "Widowed",
      children: 5,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Student",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "3 years",
      monthly_income: 185479,
      loan_repayment: 4813,
      office_email: "mamie.robles@phuel.com"
    },
    social: {
      facebook: "jimenez.acosta",
      instagram: "pollard_davenport",
      twitter: "tate94"
    },
    guarantor: {
      full_name: "Esmeralda Hawkins",
      phone: 2348191265405,
      email: "esmeraldahawkins@phuel.com",
      relationship: "Colleague"
    }
  },
  {
    id: 315,
    organization: "Tourmania",
    username: "Odom488",
    email: "odomhawkins@tourmania.com",
    phoneNumber: "(971) 478-3727",
    dateJoined: "2017-01-26",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 23837923,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Ramona Mcconnell",
      bvn: 66111917163,
      gender: "Female",
      marital_status: "Widowed",
      children: 3,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Self-employed",
      sector_of_employment: "Government",
      duration_of_employment: "37 years",
      monthly_income: 454629,
      loan_repayment: 4388,
      office_email: "diane.harrell@magnina.com"
    },
    social: {
      facebook: "henry.gordon",
      instagram: "bertha_knox",
      twitter: "franks29"
    },
    guarantor: {
      full_name: "Chapman Fields",
      phone: 2348796081867,
      email: "chapmanfields@magnina.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 316,
    organization: "Kangle",
    username: "Elliott842",
    email: "elliottfields@kangle.com",
    phoneNumber: "(957) 505-2306",
    dateJoined: "2021-01-26",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 24693292,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Judy Sharpe",
      bvn: 18803680608,
      gender: "Female",
      marital_status: "Divorced",
      children: 2,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Student",
      sector_of_employment: "Construction",
      duration_of_employment: "26 years",
      monthly_income: 208416,
      loan_repayment: 1799,
      office_email: "naomi.anthony@utarian.com"
    },
    social: {
      facebook: "foley.bridges",
      instagram: "chen_phelps",
      twitter: "dale15"
    },
    guarantor: {
      full_name: "Lora Chan",
      phone: 2348127993900,
      email: "lorachan@utarian.com",
      relationship: "Colleague"
    }
  },
  {
    id: 317,
    organization: "Ezentia",
    username: "Celeste521",
    email: "celestechan@ezentia.com",
    phoneNumber: "(978) 524-2556",
    dateJoined: "2015-10-20",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 132786212,
      bank_name: "GTBank"
    },
    personalInformation: {
      fullname: "Haley Shaffer",
      bvn: 46378259140,
      gender: "Male",
      marital_status: "Married",
      children: 4,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Employed",
      sector_of_employment: "Finance",
      duration_of_employment: "40 years",
      monthly_income: 237547,
      loan_repayment: 2237,
      office_email: "rosemary.pennington@imant.com"
    },
    social: {
      facebook: "terry.strong",
      instagram: "margo_perry",
      twitter: "randall72"
    },
    guarantor: {
      full_name: "Trina Parsons",
      phone: 2347090055575,
      email: "trinaparsons@imant.com",
      relationship: "Partner"
    }
  },
  {
    id: 318,
    organization: "Isologics",
    username: "Lenora445",
    email: "lenoraparsons@isologics.com",
    phoneNumber: "(950) 558-3953",
    dateJoined: "2019-08-27",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 468916379,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Maricela Woodward",
      bvn: 12786446958,
      gender: "Female",
      marital_status: "Married",
      children: 5,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Retired",
      sector_of_employment: "Healthcare",
      duration_of_employment: "35 years",
      monthly_income: 355702,
      loan_repayment: 2227,
      office_email: "johns.porter@pulze.com"
    },
    social: {
      facebook: "ayala.pruitt",
      instagram: "dina_yang",
      twitter: "holmes8"
    },
    guarantor: {
      full_name: "Merle Stein",
      phone: 2348690382930,
      email: "merlestein@pulze.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 319,
    organization: "Buzzness",
    username: "Boyle271",
    email: "boylestein@buzzness.com",
    phoneNumber: "(883) 511-2600",
    dateJoined: "2014-12-27",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 20231253,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Colon Cotton",
      bvn: 78186669314,
      gender: "Female",
      marital_status: "Widowed",
      children: 3,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Retired",
      sector_of_employment: "Government",
      duration_of_employment: "31 years",
      monthly_income: 276471,
      loan_repayment: 2022,
      office_email: "hahn.castillo@ovium.com"
    },
    social: {
      facebook: "sadie.conley",
      instagram: "alice_bishop",
      twitter: "weaver9"
    },
    guarantor: {
      full_name: "Condo Walsh",
      phone: 2347647957482,
      email: "condowalsh@ovium.com",
      relationship: "Friend"
    }
  },
  {
    id: 320,
    organization: "Acruex",
    username: "Barry344",
    email: "barrywalsh@acruex.com",
    phoneNumber: "(952) 500-2247",
    dateJoined: "2014-02-05",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 150263703,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Maritza Bailey",
      bvn: 93105117974,
      gender: "Male",
      marital_status: "Divorced",
      children: 1,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Student",
      sector_of_employment: "Construction",
      duration_of_employment: "17 years",
      monthly_income: 423890,
      loan_repayment: 1853,
      office_email: "joanne.salas@polaria.com"
    },
    social: {
      facebook: "clare.bond",
      instagram: "sanders_flowers",
      twitter: "ophelia72"
    },
    guarantor: {
      full_name: "Hines Neal",
      phone: 2347917490812,
      email: "hinesneal@polaria.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 321,
    organization: "Bulljuice",
    username: "Nadine282",
    email: "nadineneal@bulljuice.com",
    phoneNumber: "(979) 438-2512",
    dateJoined: "2024-11-02",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 8083611,
      bank_name: "UBA"
    },
    personalInformation: {
      fullname: "Wilkerson Lambert",
      bvn: 61183857982,
      gender: "Male",
      marital_status: "Divorced",
      children: 0,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Self-employed",
      sector_of_employment: "Retail",
      duration_of_employment: "4 years",
      monthly_income: 454969,
      loan_repayment: 2006,
      office_email: "keisha.schwartz@insuresys.com"
    },
    social: {
      facebook: "winters.osborn",
      instagram: "robbins_dotson",
      twitter: "marsha22"
    },
    guarantor: {
      full_name: "Jackson Singleton",
      phone: 2347190677510,
      email: "jacksonsingleton@insuresys.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 322,
    organization: "Genmy",
    username: "Sheppard430",
    email: "sheppardsingleton@genmy.com",
    phoneNumber: "(901) 419-2797",
    dateJoined: "2017-02-18",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 339732441,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Chavez Robbins",
      bvn: 50641509120,
      gender: "Male",
      marital_status: "Married",
      children: 1,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Employed",
      sector_of_employment: "Government",
      duration_of_employment: "9 years",
      monthly_income: 412749,
      loan_repayment: 4067,
      office_email: "rutledge.morales@realysis.com"
    },
    social: {
      facebook: "harrison.blair",
      instagram: "sims_weiss",
      twitter: "chase49"
    },
    guarantor: {
      full_name: "Kay Cantu",
      phone: 2348902561705,
      email: "kaycantu@realysis.com",
      relationship: "Friend"
    }
  },
  {
    id: 323,
    organization: "Ewaves",
    username: "Brandie447",
    email: "brandiecantu@ewaves.com",
    phoneNumber: "(868) 546-3586",
    dateJoined: "2014-04-13",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 470609514,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Norris Guy",
      bvn: 43596900424,
      gender: "Male",
      marital_status: "Widowed",
      children: 0,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Student",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "10 years",
      monthly_income: 328368,
      loan_repayment: 2437,
      office_email: "brianna.moody@frosnex.com"
    },
    social: {
      facebook: "williams.russo",
      instagram: "church_oneal",
      twitter: "guerra3"
    },
    guarantor: {
      full_name: "Michele Brennan",
      phone: 2348128348946,
      email: "michelebrennan@frosnex.com",
      relationship: "Partner"
    }
  },
  {
    id: 324,
    organization: "Eventage",
    username: "Sparks304",
    email: "sparksbrennan@eventage.com",
    phoneNumber: "(918) 534-3486",
    dateJoined: "2021-05-13",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 229056853,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Kathy Campos",
      bvn: 76074199170,
      gender: "Female",
      marital_status: "Single",
      children: 5,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Retired",
      sector_of_employment: "Education",
      duration_of_employment: "1 years",
      monthly_income: 73039,
      loan_repayment: 2692,
      office_email: "miriam.johnson@eweville.com"
    },
    social: {
      facebook: "myrna.wright",
      instagram: "hebert_burks",
      twitter: "karen20"
    },
    guarantor: {
      full_name: "Santiago Mcmahon",
      phone: 2348222895994,
      email: "santiagomcmahon@eweville.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 325,
    organization: "Veraq",
    username: "Ramirez185",
    email: "ramirezmcmahon@veraq.com",
    phoneNumber: "(854) 577-3697",
    dateJoined: "2021-05-09",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 213916249,
      bank_name: "Sterling Bank"
    },
    personalInformation: {
      fullname: "Dodson Hodges",
      bvn: 88533692550,
      gender: "Female",
      marital_status: "Divorced",
      children: 0,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Unemployed",
      sector_of_employment: "Construction",
      duration_of_employment: "2 years",
      monthly_income: 103925,
      loan_repayment: 3870,
      office_email: "tania.sheppard@tribalog.com"
    },
    social: {
      facebook: "kidd.alexander",
      instagram: "harrington_atkins",
      twitter: "tyler24"
    },
    guarantor: {
      full_name: "Vickie Farrell",
      phone: 2348262404526,
      email: "vickiefarrell@tribalog.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 326,
    organization: "Geekfarm",
    username: "Justice688",
    email: "justicefarrell@geekfarm.com",
    phoneNumber: "(983) 479-2293",
    dateJoined: "2017-03-23",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 43980166,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Weeks Hamilton",
      bvn: 49112691028,
      gender: "Female",
      marital_status: "Married",
      children: 5,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Self-employed",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "36 years",
      monthly_income: 474932,
      loan_repayment: 1988,
      office_email: "lorena.glover@portalis.com"
    },
    social: {
      facebook: "bruce.maddox",
      instagram: "duffy_lyons",
      twitter: "jean98"
    },
    guarantor: {
      full_name: "Wilson Sims",
      phone: 2348780651571,
      email: "wilsonsims@portalis.com",
      relationship: "Family"
    }
  },
  {
    id: 327,
    organization: "Quinex",
    username: "Eula797",
    email: "eulasims@quinex.com",
    phoneNumber: "(868) 600-3268",
    dateJoined: "2018-03-10",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 235381249,
      bank_name: "Wema Bank"
    },
    personalInformation: {
      fullname: "Pope Francis",
      bvn: 46476530305,
      gender: "Male",
      marital_status: "Married",
      children: 0,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Self-employed",
      sector_of_employment: "Healthcare",
      duration_of_employment: "39 years",
      monthly_income: 382808,
      loan_repayment: 4452,
      office_email: "daniels.trujillo@halap.com"
    },
    social: {
      facebook: "jones.gaines",
      instagram: "mcdaniel_frederick",
      twitter: "lyons15"
    },
    guarantor: {
      full_name: "Hester Alford",
      phone: 2347097149506,
      email: "hesteralford@halap.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 328,
    organization: "Zizzle",
    username: "Carroll553",
    email: "carrollalford@zizzle.com",
    phoneNumber: "(924) 471-3437",
    dateJoined: "2023-06-29",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 456891045,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Roach Beasley",
      bvn: 63590802013,
      gender: "Male",
      marital_status: "Widowed",
      children: 4,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Student",
      sector_of_employment: "Technology",
      duration_of_employment: "2 years",
      monthly_income: 201537,
      loan_repayment: 3738,
      office_email: "mercedes.acevedo@fuelton.com"
    },
    social: {
      facebook: "gibson.eaton",
      instagram: "juliet_mendez",
      twitter: "fern67"
    },
    guarantor: {
      full_name: "Vilma Solis",
      phone: 2347331655534,
      email: "vilmasolis@fuelton.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 329,
    organization: "Nimon",
    username: "Kaitlin106",
    email: "kaitlinsolis@nimon.com",
    phoneNumber: "(805) 464-2488",
    dateJoined: "2023-01-23",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 126783287,
      bank_name: "First Bank"
    },
    personalInformation: {
      fullname: "Giles Glenn",
      bvn: 46482826518,
      gender: "Male",
      marital_status: "Widowed",
      children: 5,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Retired",
      sector_of_employment: "Retail",
      duration_of_employment: "37 years",
      monthly_income: 249010,
      loan_repayment: 3965,
      office_email: "lindsey.lynn@imageflow.com"
    },
    social: {
      facebook: "natalie.gallegos",
      instagram: "estes_sawyer",
      twitter: "michael13"
    },
    guarantor: {
      full_name: "Ebony Burt",
      phone: 2348283028471,
      email: "ebonyburt@imageflow.com",
      relationship: "Friend"
    }
  },
  {
    id: 330,
    organization: "Omnigog",
    username: "Daphne690",
    email: "daphneburt@omnigog.com",
    phoneNumber: "(853) 436-2081",
    dateJoined: "2017-05-13",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 114018767,
      bank_name: "Sterling Bank"
    },
    personalInformation: {
      fullname: "Dominique Bryant",
      bvn: 85015801223,
      gender: "Male",
      marital_status: "Married",
      children: 4,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Unemployed",
      sector_of_employment: "Education",
      duration_of_employment: "33 years",
      monthly_income: 488244,
      loan_repayment: 2853,
      office_email: "dena.melendez@zytrex.com"
    },
    social: {
      facebook: "clark.hendricks",
      instagram: "preston_duffy",
      twitter: "petty77"
    },
    guarantor: {
      full_name: "Elba Glass",
      phone: 2347276188694,
      email: "elbaglass@zytrex.com",
      relationship: "Family"
    }
  },
  {
    id: 331,
    organization: "Datacator",
    username: "Jennings588",
    email: "jenningsglass@datacator.com",
    phoneNumber: "(887) 483-3876",
    dateJoined: "2019-11-20",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 133865417,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Chandra Henry",
      bvn: 62044928104,
      gender: "Male",
      marital_status: "Widowed",
      children: 2,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Self-employed",
      sector_of_employment: "Construction",
      duration_of_employment: "5 years",
      monthly_income: 198312,
      loan_repayment: 3696,
      office_email: "eugenia.potts@exovent.com"
    },
    social: {
      facebook: "georgia.poole",
      instagram: "brady_ochoa",
      twitter: "ronda97"
    },
    guarantor: {
      full_name: "Rowland Cabrera",
      phone: 2347964671102,
      email: "rowlandcabrera@exovent.com",
      relationship: "Family"
    }
  },
  {
    id: 332,
    organization: "Globoil",
    username: "Cox588",
    email: "coxcabrera@globoil.com",
    phoneNumber: "(953) 538-3398",
    dateJoined: "2023-04-29",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 74077724,
      bank_name: "First Bank"
    },
    personalInformation: {
      fullname: "Christian Reid",
      bvn: 42172069715,
      gender: "Male",
      marital_status: "Widowed",
      children: 0,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Self-employed",
      sector_of_employment: "Technology",
      duration_of_employment: "7 years",
      monthly_income: 416954,
      loan_repayment: 4350,
      office_email: "huber.larsen@beadzza.com"
    },
    social: {
      facebook: "shawn.green",
      instagram: "ladonna_pope",
      twitter: "cassie19"
    },
    guarantor: {
      full_name: "Deloris Le",
      phone: 2347742491257,
      email: "delorisle@beadzza.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 333,
    organization: "Pharmex",
    username: "Charles581",
    email: "charlesle@pharmex.com",
    phoneNumber: "(829) 410-2979",
    dateJoined: "2022-04-08",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 189333071,
      bank_name: "First Bank"
    },
    personalInformation: {
      fullname: "Campbell Foley",
      bvn: 31985483626,
      gender: "Female",
      marital_status: "Widowed",
      children: 4,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Unemployed",
      sector_of_employment: "Retail",
      duration_of_employment: "19 years",
      monthly_income: 441535,
      loan_repayment: 4814,
      office_email: "kari.hubbard@centree.com"
    },
    social: {
      facebook: "mandy.mclaughlin",
      instagram: "joy_fisher",
      twitter: "florine95"
    },
    guarantor: {
      full_name: "Montoya Finley",
      phone: 2348979921527,
      email: "montoyafinley@centree.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 334,
    organization: "Slumberia",
    username: "Jeanie225",
    email: "jeaniefinley@slumberia.com",
    phoneNumber: "(941) 420-2462",
    dateJoined: "2017-09-15",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 66527628,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Roslyn Clarke",
      bvn: 54034658916,
      gender: "Female",
      marital_status: "Single",
      children: 4,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Unemployed",
      sector_of_employment: "Agriculture",
      duration_of_employment: "28 years",
      monthly_income: 364366,
      loan_repayment: 2012,
      office_email: "guzman.huffman@sealoud.com"
    },
    social: {
      facebook: "glass.vega",
      instagram: "josefina_church",
      twitter: "nancy6"
    },
    guarantor: {
      full_name: "Brennan Wolf",
      phone: 2348856651572,
      email: "brennanwolf@sealoud.com",
      relationship: "Partner"
    }
  },
  {
    id: 335,
    organization: "Cowtown",
    username: "Goldie305",
    email: "goldiewolf@cowtown.com",
    phoneNumber: "(954) 525-3868",
    dateJoined: "2022-05-15",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 449277050,
      bank_name: "Sterling Bank"
    },
    personalInformation: {
      fullname: "Tami Dorsey",
      bvn: 25589220697,
      gender: "Female",
      marital_status: "Divorced",
      children: 5,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Self-employed",
      sector_of_employment: "Education",
      duration_of_employment: "34 years",
      monthly_income: 122125,
      loan_repayment: 3533,
      office_email: "cline.barrett@maxemia.com"
    },
    social: {
      facebook: "minnie.diaz",
      instagram: "finch_mack",
      twitter: "pickett54"
    },
    guarantor: {
      full_name: "Kathleen Donaldson",
      phone: 2347165735016,
      email: "kathleendonaldson@maxemia.com",
      relationship: "Friend"
    }
  },
  {
    id: 336,
    organization: "Geekosis",
    username: "May188",
    email: "maydonaldson@geekosis.com",
    phoneNumber: "(861) 472-2389",
    dateJoined: "2022-01-13",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 35828417,
      bank_name: "UBA"
    },
    personalInformation: {
      fullname: "Holman Sandoval",
      bvn: 85966641011,
      gender: "Male",
      marital_status: "Married",
      children: 5,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Unemployed",
      sector_of_employment: "Agriculture",
      duration_of_employment: "33 years",
      monthly_income: 355078,
      loan_repayment: 2324,
      office_email: "frankie.benson@kraggle.com"
    },
    social: {
      facebook: "pearlie.erickson",
      instagram: "mayo_cross",
      twitter: "zelma86"
    },
    guarantor: {
      full_name: "Diana Hammond",
      phone: 2348451857842,
      email: "dianahammond@kraggle.com",
      relationship: "Friend"
    }
  },
  {
    id: 337,
    organization: "Memora",
    username: "Alissa119",
    email: "alissahammond@memora.com",
    phoneNumber: "(815) 444-3974",
    dateJoined: "2020-08-16",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 55706607,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Laverne Dillard",
      bvn: 48983844389,
      gender: "Female",
      marital_status: "Divorced",
      children: 1,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Student",
      sector_of_employment: "Government",
      duration_of_employment: "5 years",
      monthly_income: 145231,
      loan_repayment: 3082,
      office_email: "huff.romero@splinx.com"
    },
    social: {
      facebook: "juliana.rodriguez",
      instagram: "joyce_mcclure",
      twitter: "foster1"
    },
    guarantor: {
      full_name: "Cervantes Goff",
      phone: 2348300569937,
      email: "cervantesgoff@splinx.com",
      relationship: "Friend"
    }
  },
  {
    id: 338,
    organization: "Eventix",
    username: "Mathews195",
    email: "mathewsgoff@eventix.com",
    phoneNumber: "(907) 513-3101",
    dateJoined: "2015-12-27",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 321541859,
      bank_name: "UBA"
    },
    personalInformation: {
      fullname: "Kristin Greer",
      bvn: 36483277355,
      gender: "Female",
      marital_status: "Married",
      children: 5,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Employed",
      sector_of_employment: "Government",
      duration_of_employment: "19 years",
      monthly_income: 141043,
      loan_repayment: 4686,
      office_email: "anastasia.keith@terrago.com"
    },
    social: {
      facebook: "karla.bauer",
      instagram: "rush_delaney",
      twitter: "mclean63"
    },
    guarantor: {
      full_name: "Marian Mccall",
      phone: 2347643067611,
      email: "marianmccall@terrago.com",
      relationship: "Partner"
    }
  },
  {
    id: 339,
    organization: "Macronaut",
    username: "Freida438",
    email: "freidamccall@macronaut.com",
    phoneNumber: "(869) 589-2482",
    dateJoined: "2021-07-15",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 298669813,
      bank_name: "Wema Bank"
    },
    personalInformation: {
      fullname: "Daniel Mooney",
      bvn: 86277397071,
      gender: "Male",
      marital_status: "Single",
      children: 0,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Student",
      sector_of_employment: "Government",
      duration_of_employment: "30 years",
      monthly_income: 211982,
      loan_repayment: 3668,
      office_email: "mills.rogers@gink.com"
    },
    social: {
      facebook: "flores.mcguire",
      instagram: "angelia_gamble",
      twitter: "leah25"
    },
    guarantor: {
      full_name: "Dolly Jefferson",
      phone: 2347877352373,
      email: "dollyjefferson@gink.com",
      relationship: "Colleague"
    }
  },
  {
    id: 340,
    organization: "Dreamia",
    username: "Carr758",
    email: "carrjefferson@dreamia.com",
    phoneNumber: "(910) 519-2764",
    dateJoined: "2018-12-20",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 174424398,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Strong Burgess",
      bvn: 77455623778,
      gender: "Male",
      marital_status: "Widowed",
      children: 0,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Unemployed",
      sector_of_employment: "Construction",
      duration_of_employment: "19 years",
      monthly_income: 274117,
      loan_repayment: 4666,
      office_email: "faith.olsen@senmao.com"
    },
    social: {
      facebook: "atkins.maynard",
      instagram: "gonzalez_snider",
      twitter: "elaine81"
    },
    guarantor: {
      full_name: "Clements Carpenter",
      phone: 2347275157534,
      email: "clementscarpenter@senmao.com",
      relationship: "Family"
    }
  },
  {
    id: 341,
    organization: "Steeltab",
    username: "Spears793",
    email: "spearscarpenter@steeltab.com",
    phoneNumber: "(999) 486-2933",
    dateJoined: "2022-04-19",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 498582290,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Aimee Dillon",
      bvn: 10883151556,
      gender: "Female",
      marital_status: "Single",
      children: 5,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Unemployed",
      sector_of_employment: "Finance",
      duration_of_employment: "9 years",
      monthly_income: 104528,
      loan_repayment: 3140,
      office_email: "fry.casey@skyplex.com"
    },
    social: {
      facebook: "maura.rutledge",
      instagram: "katy_burris",
      twitter: "ines39"
    },
    guarantor: {
      full_name: "Hensley Nielsen",
      phone: 2347806558029,
      email: "hensleynielsen@skyplex.com",
      relationship: "Friend"
    }
  },
  {
    id: 342,
    organization: "Centrexin",
    username: "Cecilia963",
    email: "cecilianielsen@centrexin.com",
    phoneNumber: "(846) 420-2591",
    dateJoined: "2020-03-30",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 352028169,
      bank_name: "Wema Bank"
    },
    personalInformation: {
      fullname: "Sofia Griffith",
      bvn: 12254857504,
      gender: "Female",
      marital_status: "Widowed",
      children: 1,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Unemployed",
      sector_of_employment: "Healthcare",
      duration_of_employment: "31 years",
      monthly_income: 67434,
      loan_repayment: 2236,
      office_email: "snyder.keller@medesign.com"
    },
    social: {
      facebook: "burns.leblanc",
      instagram: "sampson_bean",
      twitter: "robyn54"
    },
    guarantor: {
      full_name: "Rosalyn Quinn",
      phone: 2348138116546,
      email: "rosalynquinn@medesign.com",
      relationship: "Colleague"
    }
  },
  {
    id: 343,
    organization: "Comcubine",
    username: "Corrine961",
    email: "corrinequinn@comcubine.com",
    phoneNumber: "(989) 600-3658",
    dateJoined: "2020-05-16",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 186644147,
      bank_name: "First Bank"
    },
    personalInformation: {
      fullname: "Patton Rowland",
      bvn: 61023270287,
      gender: "Female",
      marital_status: "Divorced",
      children: 0,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Retired",
      sector_of_employment: "Government",
      duration_of_employment: "34 years",
      monthly_income: 466361,
      loan_repayment: 3849,
      office_email: "lavonne.cortez@buzzopia.com"
    },
    social: {
      facebook: "aileen.parker",
      instagram: "bishop_watson",
      twitter: "myra65"
    },
    guarantor: {
      full_name: "Doris Montoya",
      phone: 2347070723599,
      email: "dorismontoya@buzzopia.com",
      relationship: "Friend"
    }
  },
  {
    id: 344,
    organization: "Acumentor",
    username: "Joyner613",
    email: "joynermontoya@acumentor.com",
    phoneNumber: "(909) 545-2899",
    dateJoined: "2021-02-27",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 254939873,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Foreman Noel",
      bvn: 73644030783,
      gender: "Male",
      marital_status: "Married",
      children: 4,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Unemployed",
      sector_of_employment: "Education",
      duration_of_employment: "26 years",
      monthly_income: 300112,
      loan_repayment: 4943,
      office_email: "kerri.merrill@miraclis.com"
    },
    social: {
      facebook: "sabrina.jordan",
      instagram: "reva_hull",
      twitter: "martin34"
    },
    guarantor: {
      full_name: "Summer Stephenson",
      phone: 2348247457440,
      email: "summerstephenson@miraclis.com",
      relationship: "Partner"
    }
  },
  {
    id: 345,
    organization: "Earwax",
    username: "Kimberly639",
    email: "kimberlystephenson@earwax.com",
    phoneNumber: "(998) 583-2689",
    dateJoined: "2017-09-14",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 254420166,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Adrian Thornton",
      bvn: 20686205696,
      gender: "Female",
      marital_status: "Married",
      children: 2,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Unemployed",
      sector_of_employment: "Technology",
      duration_of_employment: "40 years",
      monthly_income: 101195,
      loan_repayment: 4165,
      office_email: "lorrie.contreras@venoflex.com"
    },
    social: {
      facebook: "craig.meadows",
      instagram: "olivia_mccray",
      twitter: "perez44"
    },
    guarantor: {
      full_name: "Whitney Waller",
      phone: 2347504465627,
      email: "whitneywaller@venoflex.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 346,
    organization: "Recritube",
    username: "Henson859",
    email: "hensonwaller@recritube.com",
    phoneNumber: "(924) 446-2086",
    dateJoined: "2023-03-03",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 336811740,
      bank_name: "First Bank"
    },
    personalInformation: {
      fullname: "Miranda Dejesus",
      bvn: 68402896540,
      gender: "Female",
      marital_status: "Widowed",
      children: 5,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Self-employed",
      sector_of_employment: "Agriculture",
      duration_of_employment: "22 years",
      monthly_income: 68131,
      loan_repayment: 4914,
      office_email: "hartman.franks@locazone.com"
    },
    social: {
      facebook: "french.mayo",
      instagram: "noelle_gilmore",
      twitter: "lois58"
    },
    guarantor: {
      full_name: "Mccullough Roman",
      phone: 2348389673067,
      email: "mcculloughroman@locazone.com",
      relationship: "Partner"
    }
  },
  {
    id: 347,
    organization: "Conjurica",
    username: "Mccormick849",
    email: "mccormickroman@conjurica.com",
    phoneNumber: "(964) 593-3025",
    dateJoined: "2016-08-13",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 382077492,
      bank_name: "First Bank"
    },
    personalInformation: {
      fullname: "Combs Lynch",
      bvn: 32704253011,
      gender: "Male",
      marital_status: "Single",
      children: 1,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Retired",
      sector_of_employment: "Technology",
      duration_of_employment: "17 years",
      monthly_income: 427917,
      loan_repayment: 2065,
      office_email: "della.pierce@ramjob.com"
    },
    social: {
      facebook: "olive.lawson",
      instagram: "tonia_mayer",
      twitter: "avery83"
    },
    guarantor: {
      full_name: "Riddle Meyer",
      phone: 2348392462343,
      email: "riddlemeyer@ramjob.com",
      relationship: "Friend"
    }
  },
  {
    id: 348,
    organization: "Spherix",
    username: "Holder446",
    email: "holdermeyer@spherix.com",
    phoneNumber: "(878) 563-3400",
    dateJoined: "2017-01-14",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 274068386,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Leila Watkins",
      bvn: 14167098111,
      gender: "Male",
      marital_status: "Widowed",
      children: 2,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Student",
      sector_of_employment: "Finance",
      duration_of_employment: "13 years",
      monthly_income: 498684,
      loan_repayment: 2581,
      office_email: "michelle.hebert@geekol.com"
    },
    social: {
      facebook: "jane.flynn",
      instagram: "dillon_solomon",
      twitter: "julianne85"
    },
    guarantor: {
      full_name: "Mcneil Valenzuela",
      phone: 2348754378473,
      email: "mcneilvalenzuela@geekol.com",
      relationship: "Colleague"
    }
  },
  {
    id: 349,
    organization: "Uplinx",
    username: "Walker804",
    email: "walkervalenzuela@uplinx.com",
    phoneNumber: "(815) 446-3274",
    dateJoined: "2021-12-19",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 42462982,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Rich Horn",
      bvn: 90755025091,
      gender: "Female",
      marital_status: "Single",
      children: 2,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Employed",
      sector_of_employment: "Education",
      duration_of_employment: "26 years",
      monthly_income: 298595,
      loan_repayment: 3294,
      office_email: "hewitt.cochran@keengen.com"
    },
    social: {
      facebook: "chelsea.mclean",
      instagram: "wiley_fletcher",
      twitter: "valerie34"
    },
    guarantor: {
      full_name: "Albert Mays",
      phone: 2348054071110,
      email: "albertmays@keengen.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 350,
    organization: "Ceprene",
    username: "Melton296",
    email: "meltonmays@ceprene.com",
    phoneNumber: "(910) 526-3733",
    dateJoined: "2024-05-18",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 344610164,
      bank_name: "UBA"
    },
    personalInformation: {
      fullname: "Claudia Wooten",
      bvn: 72662163050,
      gender: "Male",
      marital_status: "Married",
      children: 2,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Student",
      sector_of_employment: "Agriculture",
      duration_of_employment: "33 years",
      monthly_income: 70409,
      loan_repayment: 2471,
      office_email: "hancock.merritt@kyaguru.com"
    },
    social: {
      facebook: "vicki.fuentes",
      instagram: "allen_short",
      twitter: "cara80"
    },
    guarantor: {
      full_name: "Deleon Crane",
      phone: 2347257086767,
      email: "deleoncrane@kyaguru.com",
      relationship: "Partner"
    }
  },
  {
    id: 351,
    organization: "Fossiel",
    username: "Mcconnell218",
    email: "mcconnellcrane@fossiel.com",
    phoneNumber: "(982) 560-3075",
    dateJoined: "2020-07-22",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 163255901,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "May Marsh",
      bvn: 90683357328,
      gender: "Female",
      marital_status: "Divorced",
      children: 1,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Student",
      sector_of_employment: "Retail",
      duration_of_employment: "32 years",
      monthly_income: 93455,
      loan_repayment: 4798,
      office_email: "snider.goodwin@xymonk.com"
    },
    social: {
      facebook: "dale.hurst",
      instagram: "fuentes_guerrero",
      twitter: "keith39"
    },
    guarantor: {
      full_name: "Cynthia Padilla",
      phone: 2349053160169,
      email: "cynthiapadilla@xymonk.com",
      relationship: "Partner"
    }
  },
  {
    id: 352,
    organization: "Bytrex",
    username: "Graciela967",
    email: "gracielapadilla@bytrex.com",
    phoneNumber: "(818) 574-3478",
    dateJoined: "2024-09-01",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 70791259,
      bank_name: "GTBank"
    },
    personalInformation: {
      fullname: "Alisa Michael",
      bvn: 75259579234,
      gender: "Male",
      marital_status: "Divorced",
      children: 4,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Employed",
      sector_of_employment: "Technology",
      duration_of_employment: "4 years",
      monthly_income: 164754,
      loan_repayment: 3621,
      office_email: "paul.ingram@flotonic.com"
    },
    social: {
      facebook: "frye.rivas",
      instagram: "campos_hutchinson",
      twitter: "freeman41"
    },
    guarantor: {
      full_name: "Dunlap Reed",
      phone: 2347899636025,
      email: "dunlapreed@flotonic.com",
      relationship: "Colleague"
    }
  },
  {
    id: 353,
    organization: "Enquility",
    username: "Webb658",
    email: "webbreed@enquility.com",
    phoneNumber: "(873) 552-3894",
    dateJoined: "2021-10-19",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 386019593,
      bank_name: "Wema Bank"
    },
    personalInformation: {
      fullname: "Gail Douglas",
      bvn: 77829687208,
      gender: "Male",
      marital_status: "Divorced",
      children: 3,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Student",
      sector_of_employment: "Healthcare",
      duration_of_employment: "3 years",
      monthly_income: 97048,
      loan_repayment: 1924,
      office_email: "cole.knapp@vendblend.com"
    },
    social: {
      facebook: "watkins.buckner",
      instagram: "key_hill",
      twitter: "eddie56"
    },
    guarantor: {
      full_name: "Vasquez Garrison",
      phone: 2347026217679,
      email: "vasquezgarrison@vendblend.com",
      relationship: "Friend"
    }
  },
  {
    id: 354,
    organization: "Elita",
    username: "Blankenship852",
    email: "blankenshipgarrison@elita.com",
    phoneNumber: "(942) 404-2541",
    dateJoined: "2021-09-02",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 402133373,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Gilbert Gardner",
      bvn: 33129087367,
      gender: "Female",
      marital_status: "Single",
      children: 4,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Student",
      sector_of_employment: "Education",
      duration_of_employment: "12 years",
      monthly_income: 468032,
      loan_repayment: 3027,
      office_email: "lola.gallagher@deviltoe.com"
    },
    social: {
      facebook: "barlow.holder",
      instagram: "mollie_emerson",
      twitter: "janelle9"
    },
    guarantor: {
      full_name: "Glenda Martinez",
      phone: 2347153410896,
      email: "glendamartinez@deviltoe.com",
      relationship: "Friend"
    }
  },
  {
    id: 355,
    organization: "Geekus",
    username: "Jefferson860",
    email: "jeffersonmartinez@geekus.com",
    phoneNumber: "(977) 578-3372",
    dateJoined: "2019-10-29",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 449717251,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Lamb Carlson",
      bvn: 73291386583,
      gender: "Female",
      marital_status: "Divorced",
      children: 0,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Retired",
      sector_of_employment: "Technology",
      duration_of_employment: "20 years",
      monthly_income: 376779,
      loan_repayment: 3136,
      office_email: "stacey.lane@biolive.com"
    },
    social: {
      facebook: "carolyn.stewart",
      instagram: "parrish_curry",
      twitter: "sophie90"
    },
    guarantor: {
      full_name: "Estrada Schmidt",
      phone: 2348967724580,
      email: "estradaschmidt@biolive.com",
      relationship: "Colleague"
    }
  },
  {
    id: 356,
    organization: "Mazuda",
    username: "Short162",
    email: "shortschmidt@mazuda.com",
    phoneNumber: "(886) 538-3981",
    dateJoined: "2017-05-24",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 410613076,
      bank_name: "Sterling Bank"
    },
    personalInformation: {
      fullname: "Lupe West",
      bvn: 22789811787,
      gender: "Male",
      marital_status: "Widowed",
      children: 2,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Self-employed",
      sector_of_employment: "Education",
      duration_of_employment: "17 years",
      monthly_income: 245993,
      loan_repayment: 3555,
      office_email: "theresa.potter@dragbot.com"
    },
    social: {
      facebook: "johnston.pate",
      instagram: "glover_munoz",
      twitter: "tamera84"
    },
    guarantor: {
      full_name: "Winnie Terry",
      phone: 2347870841501,
      email: "winnieterry@dragbot.com",
      relationship: "Friend"
    }
  },
  {
    id: 357,
    organization: "Imaginart",
    username: "Patti771",
    email: "pattiterry@imaginart.com",
    phoneNumber: "(924) 548-2262",
    dateJoined: "2015-11-04",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 34220815,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Kinney Gillespie",
      bvn: 64723940424,
      gender: "Male",
      marital_status: "Widowed",
      children: 2,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Self-employed",
      sector_of_employment: "Construction",
      duration_of_employment: "36 years",
      monthly_income: 235940,
      loan_repayment: 3362,
      office_email: "helene.dyer@genekom.com"
    },
    social: {
      facebook: "kent.bradshaw",
      instagram: "young_robertson",
      twitter: "murray38"
    },
    guarantor: {
      full_name: "Howard Cash",
      phone: 2348814876542,
      email: "howardcash@genekom.com",
      relationship: "Friend"
    }
  },
  {
    id: 358,
    organization: "Zuvy",
    username: "Marcie162",
    email: "marciecash@zuvy.com",
    phoneNumber: "(905) 570-2756",
    dateJoined: "2018-10-21",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 210033906,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Audrey Jackson",
      bvn: 55269806227,
      gender: "Male",
      marital_status: "Married",
      children: 2,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Retired",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "31 years",
      monthly_income: 402827,
      loan_repayment: 2884,
      office_email: "josie.castaneda@rugstars.com"
    },
    social: {
      facebook: "dejesus.golden",
      instagram: "wolf_mullen",
      twitter: "harrell96"
    },
    guarantor: {
      full_name: "Heath Hopkins",
      phone: 2348537480612,
      email: "heathhopkins@rugstars.com",
      relationship: "Friend"
    }
  },
  {
    id: 359,
    organization: "Pasturia",
    username: "Kirby211",
    email: "kirbyhopkins@pasturia.com",
    phoneNumber: "(917) 416-3608",
    dateJoined: "2022-06-16",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 367101675,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Stella Armstrong",
      bvn: 12704093035,
      gender: "Male",
      marital_status: "Married",
      children: 3,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Unemployed",
      sector_of_employment: "Agriculture",
      duration_of_employment: "40 years",
      monthly_income: 150705,
      loan_repayment: 4567,
      office_email: "boone.donovan@buzzmaker.com"
    },
    social: {
      facebook: "alyce.lopez",
      instagram: "ellis_hansen",
      twitter: "woods95"
    },
    guarantor: {
      full_name: "Burch Andrews",
      phone: 2347231341065,
      email: "burchandrews@buzzmaker.com",
      relationship: "Friend"
    }
  },
  {
    id: 360,
    organization: "Micronaut",
    username: "Janna303",
    email: "jannaandrews@micronaut.com",
    phoneNumber: "(950) 579-3653",
    dateJoined: "2016-11-04",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 303582099,
      bank_name: "Wema Bank"
    },
    personalInformation: {
      fullname: "Blevins Tucker",
      bvn: 67265178837,
      gender: "Male",
      marital_status: "Single",
      children: 5,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Retired",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "30 years",
      monthly_income: 100565,
      loan_repayment: 3903,
      office_email: "lindsay.pace@quiltigen.com"
    },
    social: {
      facebook: "riley.shepherd",
      instagram: "copeland_drake",
      twitter: "fannie93"
    },
    guarantor: {
      full_name: "Morales Turner",
      phone: 2347045198581,
      email: "moralesturner@quiltigen.com",
      relationship: "Partner"
    }
  },
  {
    id: 361,
    organization: "Combot",
    username: "Kennedy545",
    email: "kennedyturner@combot.com",
    phoneNumber: "(881) 518-2370",
    dateJoined: "2019-03-18",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 452040301,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Evangeline Conrad",
      bvn: 81245702084,
      gender: "Female",
      marital_status: "Widowed",
      children: 3,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Employed",
      sector_of_employment: "Agriculture",
      duration_of_employment: "6 years",
      monthly_income: 64724,
      loan_repayment: 4456,
      office_email: "lily.lang@virva.com"
    },
    social: {
      facebook: "whitehead.brock",
      instagram: "harper_vincent",
      twitter: "georgina93"
    },
    guarantor: {
      full_name: "Maldonado Gates",
      phone: 2347177220865,
      email: "maldonadogates@virva.com",
      relationship: "Family"
    }
  },
  {
    id: 362,
    organization: "Izzby",
    username: "Mcclure160",
    email: "mccluregates@izzby.com",
    phoneNumber: "(910) 584-2967",
    dateJoined: "2016-11-04",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 331080682,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Martha Curtis",
      bvn: 47093007391,
      gender: "Male",
      marital_status: "Married",
      children: 3,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Retired",
      sector_of_employment: "Healthcare",
      duration_of_employment: "23 years",
      monthly_income: 271570,
      loan_repayment: 2137,
      office_email: "leonor.hobbs@lunchpad.com"
    },
    social: {
      facebook: "lara.bradford",
      instagram: "elvia_wall",
      twitter: "livingston53"
    },
    guarantor: {
      full_name: "Browning Santos",
      phone: 2347076956427,
      email: "browningsantos@lunchpad.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 363,
    organization: "Acium",
    username: "Deanne869",
    email: "deannesantos@acium.com",
    phoneNumber: "(814) 515-2676",
    dateJoined: "2014-03-26",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 499073923,
      bank_name: "Sterling Bank"
    },
    personalInformation: {
      fullname: "Schmidt Wilkinson",
      bvn: 19757297516,
      gender: "Female",
      marital_status: "Single",
      children: 5,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Self-employed",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "12 years",
      monthly_income: 324856,
      loan_repayment: 3903,
      office_email: "antoinette.wilkerson@utara.com"
    },
    social: {
      facebook: "king.townsend",
      instagram: "vincent_mccarthy",
      twitter: "willa23"
    },
    guarantor: {
      full_name: "Sue Bartlett",
      phone: 2348198545596,
      email: "suebartlett@utara.com",
      relationship: "Partner"
    }
  },
  {
    id: 364,
    organization: "Amril",
    username: "Yang328",
    email: "yangbartlett@amril.com",
    phoneNumber: "(881) 450-3793",
    dateJoined: "2022-01-21",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 409627343,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Ina Mcpherson",
      bvn: 97065217332,
      gender: "Male",
      marital_status: "Single",
      children: 1,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Student",
      sector_of_employment: "Construction",
      duration_of_employment: "37 years",
      monthly_income: 290150,
      loan_repayment: 4461,
      office_email: "rogers.bush@techtrix.com"
    },
    social: {
      facebook: "osborne.mccarty",
      instagram: "byrd_tyson",
      twitter: "goodwin72"
    },
    guarantor: {
      full_name: "Trevino Long",
      phone: 2347617866039,
      email: "trevinolong@techtrix.com",
      relationship: "Family"
    }
  },
  {
    id: 365,
    organization: "Geoform",
    username: "Rachel889",
    email: "rachellong@geoform.com",
    phoneNumber: "(931) 425-3063",
    dateJoined: "2014-10-23",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 248839514,
      bank_name: "Wema Bank"
    },
    personalInformation: {
      fullname: "Hickman Chapman",
      bvn: 84984315506,
      gender: "Male",
      marital_status: "Divorced",
      children: 5,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Unemployed",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "12 years",
      monthly_income: 361388,
      loan_repayment: 2115,
      office_email: "carol.bentley@indexia.com"
    },
    social: {
      facebook: "franco.bennett",
      instagram: "britney_branch",
      twitter: "moore34"
    },
    guarantor: {
      full_name: "Liza Vargas",
      phone: 2347385610212,
      email: "lizavargas@indexia.com",
      relationship: "Family"
    }
  },
  {
    id: 366,
    organization: "Farmex",
    username: "Carmen495",
    email: "carmenvargas@farmex.com",
    phoneNumber: "(868) 505-3249",
    dateJoined: "2021-08-04",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 325352471,
      bank_name: "Wema Bank"
    },
    personalInformation: {
      fullname: "Lilia Black",
      bvn: 22594491648,
      gender: "Male",
      marital_status: "Single",
      children: 0,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Employed",
      sector_of_employment: "Technology",
      duration_of_employment: "4 years",
      monthly_income: 181684,
      loan_repayment: 4141,
      office_email: "benita.burke@maximind.com"
    },
    social: {
      facebook: "newman.barrera",
      instagram: "schultz_york",
      twitter: "arnold23"
    },
    guarantor: {
      full_name: "Casey Grimes",
      phone: 2348008163263,
      email: "caseygrimes@maximind.com",
      relationship: "Colleague"
    }
  },
  {
    id: 367,
    organization: "Apexia",
    username: "Twila749",
    email: "twilagrimes@apexia.com",
    phoneNumber: "(947) 572-2934",
    dateJoined: "2016-01-02",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 266136700,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Montgomery Cummings",
      bvn: 29255815654,
      gender: "Female",
      marital_status: "Single",
      children: 0,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Retired",
      sector_of_employment: "Education",
      duration_of_employment: "12 years",
      monthly_income: 393390,
      loan_repayment: 3041,
      office_email: "ofelia.booth@sportan.com"
    },
    social: {
      facebook: "angelique.barker",
      instagram: "buck_browning",
      twitter: "elvira13"
    },
    guarantor: {
      full_name: "Roseann Jones",
      phone: 2347906388329,
      email: "roseannjones@sportan.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 368,
    organization: "Zytrac",
    username: "Gale411",
    email: "galejones@zytrac.com",
    phoneNumber: "(827) 502-3666",
    dateJoined: "2017-04-11",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 109321761,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Cherry Ruiz",
      bvn: 27893234122,
      gender: "Female",
      marital_status: "Married",
      children: 5,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Unemployed",
      sector_of_employment: "Technology",
      duration_of_employment: "9 years",
      monthly_income: 147845,
      loan_repayment: 1831,
      office_email: "knapp.clemons@teraprene.com"
    },
    social: {
      facebook: "fleming.haley",
      instagram: "eloise_henderson",
      twitter: "todd72"
    },
    guarantor: {
      full_name: "Terra Herrera",
      phone: 2348884499796,
      email: "terraherrera@teraprene.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 369,
    organization: "Omatom",
    username: "Carver113",
    email: "carverherrera@omatom.com",
    phoneNumber: "(886) 590-3140",
    dateJoined: "2014-04-07",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 143420225,
      bank_name: "Sterling Bank"
    },
    personalInformation: {
      fullname: "Alvarez Buck",
      bvn: 68993111866,
      gender: "Female",
      marital_status: "Single",
      children: 3,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Employed",
      sector_of_employment: "Construction",
      duration_of_employment: "13 years",
      monthly_income: 111707,
      loan_repayment: 2262,
      office_email: "cohen.craig@assitia.com"
    },
    social: {
      facebook: "howe.hanson",
      instagram: "gillespie_albert",
      twitter: "mckenzie74"
    },
    guarantor: {
      full_name: "Haney Strickland",
      phone: 2348569313533,
      email: "haneystrickland@assitia.com",
      relationship: "Family"
    }
  },
  {
    id: 370,
    organization: "Gushkool",
    username: "Mcmahon403",
    email: "mcmahonstrickland@gushkool.com",
    phoneNumber: "(821) 597-2023",
    dateJoined: "2015-05-19",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 103926834,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "James Barnett",
      bvn: 42809867745,
      gender: "Male",
      marital_status: "Divorced",
      children: 5,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Employed",
      sector_of_employment: "Healthcare",
      duration_of_employment: "27 years",
      monthly_income: 499370,
      loan_repayment: 2816,
      office_email: "gay.brown@peticular.com"
    },
    social: {
      facebook: "valenzuela.murray",
      instagram: "ochoa_parrish",
      twitter: "letha64"
    },
    guarantor: {
      full_name: "Dianne Battle",
      phone: 2348910283324,
      email: "diannebattle@peticular.com",
      relationship: "Colleague"
    }
  },
  {
    id: 371,
    organization: "Stelaecor",
    username: "Grimes490",
    email: "grimesbattle@stelaecor.com",
    phoneNumber: "(823) 452-2850",
    dateJoined: "2017-11-20",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 35632628,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Louella Frost",
      bvn: 17855747097,
      gender: "Female",
      marital_status: "Single",
      children: 0,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Self-employed",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "1 years",
      monthly_income: 257672,
      loan_repayment: 2026,
      office_email: "lauri.rollins@pivitol.com"
    },
    social: {
      facebook: "amelia.patterson",
      instagram: "selma_roberson",
      twitter: "lila25"
    },
    guarantor: {
      full_name: "Henderson Maldonado",
      phone: 2347860992797,
      email: "hendersonmaldonado@pivitol.com",
      relationship: "Family"
    }
  },
  {
    id: 372,
    organization: "Extrawear",
    username: "Blanchard870",
    email: "blanchardmaldonado@extrawear.com",
    phoneNumber: "(852) 448-3841",
    dateJoined: "2019-04-02",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 288934071,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Durham Gregory",
      bvn: 87024843803,
      gender: "Male",
      marital_status: "Widowed",
      children: 2,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Self-employed",
      sector_of_employment: "Construction",
      duration_of_employment: "29 years",
      monthly_income: 316740,
      loan_repayment: 2453,
      office_email: "velazquez.pacheco@comvoy.com"
    },
    social: {
      facebook: "irwin.norton",
      instagram: "corine_lamb",
      twitter: "addie10"
    },
    guarantor: {
      full_name: "Rodriguez Mercer",
      phone: 2348816856527,
      email: "rodriguezmercer@comvoy.com",
      relationship: "Family"
    }
  },
  {
    id: 373,
    organization: "Musix",
    username: "Jewel477",
    email: "jewelmercer@musix.com",
    phoneNumber: "(972) 516-3271",
    dateJoined: "2014-12-05",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 285043636,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Palmer Schroeder",
      bvn: 21560228318,
      gender: "Male",
      marital_status: "Married",
      children: 5,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Student",
      sector_of_employment: "Retail",
      duration_of_employment: "39 years",
      monthly_income: 172418,
      loan_repayment: 2737,
      office_email: "singleton.guthrie@concility.com"
    },
    social: {
      facebook: "horton.levy",
      instagram: "enid_boyd",
      twitter: "marylou88"
    },
    guarantor: {
      full_name: "Milagros Sanford",
      phone: 2348253595473,
      email: "milagrossanford@concility.com",
      relationship: "Colleague"
    }
  },
  {
    id: 374,
    organization: "Talkalot",
    username: "Barker316",
    email: "barkersanford@talkalot.com",
    phoneNumber: "(959) 446-2800",
    dateJoined: "2023-10-05",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 79452703,
      bank_name: "Wema Bank"
    },
    personalInformation: {
      fullname: "Alana Harrison",
      bvn: 11670747556,
      gender: "Male",
      marital_status: "Divorced",
      children: 0,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Employed",
      sector_of_employment: "Healthcare",
      duration_of_employment: "29 years",
      monthly_income: 369961,
      loan_repayment: 4009,
      office_email: "stephens.kidd@minga.com"
    },
    social: {
      facebook: "kelli.nunez",
      instagram: "sheila_olson",
      twitter: "louisa14"
    },
    guarantor: {
      full_name: "Rhonda Tyler",
      phone: 2347003269191,
      email: "rhondatyler@minga.com",
      relationship: "Friend"
    }
  },
  {
    id: 375,
    organization: "Terascape",
    username: "Jenkins333",
    email: "jenkinstyler@terascape.com",
    phoneNumber: "(834) 492-3765",
    dateJoined: "2018-01-31",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 196500580,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Earnestine Spence",
      bvn: 30411753722,
      gender: "Female",
      marital_status: "Single",
      children: 1,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Student",
      sector_of_employment: "Technology",
      duration_of_employment: "20 years",
      monthly_income: 139151,
      loan_repayment: 2547,
      office_email: "curtis.rivers@suretech.com"
    },
    social: {
      facebook: "pruitt.wiley",
      instagram: "myrtle_manning",
      twitter: "adeline93"
    },
    guarantor: {
      full_name: "Beverly Doyle",
      phone: 2348467211163,
      email: "beverlydoyle@suretech.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 376,
    organization: "Calcula",
    username: "Geraldine106",
    email: "geraldinedoyle@calcula.com",
    phoneNumber: "(909) 456-3291",
    dateJoined: "2017-04-05",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 498332482,
      bank_name: "UBA"
    },
    personalInformation: {
      fullname: "Opal Jensen",
      bvn: 84917345258,
      gender: "Male",
      marital_status: "Widowed",
      children: 1,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Student",
      sector_of_employment: "Agriculture",
      duration_of_employment: "37 years",
      monthly_income: 304955,
      loan_repayment: 3773,
      office_email: "rosario.aguirre@qualitex.com"
    },
    social: {
      facebook: "ashley.richardson",
      instagram: "blake_velez",
      twitter: "bradford56"
    },
    guarantor: {
      full_name: "Le Deleon",
      phone: 2347311453980,
      email: "ledeleon@qualitex.com",
      relationship: "Partner"
    }
  },
  {
    id: 377,
    organization: "Retrack",
    username: "Hubbard378",
    email: "hubbarddeleon@retrack.com",
    phoneNumber: "(926) 475-2837",
    dateJoined: "2024-11-04",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 482961047,
      bank_name: "Wema Bank"
    },
    personalInformation: {
      fullname: "Hansen Mcfarland",
      bvn: 59287175622,
      gender: "Male",
      marital_status: "Widowed",
      children: 4,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Employed",
      sector_of_employment: "Education",
      duration_of_employment: "12 years",
      monthly_income: 111312,
      loan_repayment: 1844,
      office_email: "alicia.dean@combogen.com"
    },
    social: {
      facebook: "spence.fulton",
      instagram: "young_gilbert",
      twitter: "melissa50"
    },
    guarantor: {
      full_name: "Hughes Aguilar",
      phone: 2348228153596,
      email: "hughesaguilar@combogen.com",
      relationship: "Family"
    }
  },
  {
    id: 378,
    organization: "Grupoli",
    username: "Garner891",
    email: "garneraguilar@grupoli.com",
    phoneNumber: "(869) 578-3660",
    dateJoined: "2016-04-27",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 459047074,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Kirsten Harrington",
      bvn: 25422222827,
      gender: "Female",
      marital_status: "Single",
      children: 3,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Retired",
      sector_of_employment: "Education",
      duration_of_employment: "34 years",
      monthly_income: 290227,
      loan_repayment: 3062,
      office_email: "imelda.suarez@moltonic.com"
    },
    social: {
      facebook: "cortez.spears",
      instagram: "chan_nixon",
      twitter: "christine78"
    },
    guarantor: {
      full_name: "Kasey Bowers",
      phone: 2348917103746,
      email: "kaseybowers@moltonic.com",
      relationship: "Partner"
    }
  },
  {
    id: 379,
    organization: "Cubix",
    username: "Gay925",
    email: "gaybowers@cubix.com",
    phoneNumber: "(928) 471-3640",
    dateJoined: "2023-10-23",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 488677233,
      bank_name: "Wema Bank"
    },
    personalInformation: {
      fullname: "Cantrell Baird",
      bvn: 99719740914,
      gender: "Female",
      marital_status: "Single",
      children: 5,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Retired",
      sector_of_employment: "Education",
      duration_of_employment: "31 years",
      monthly_income: 220766,
      loan_repayment: 4930,
      office_email: "ross.cook@nurplex.com"
    },
    social: {
      facebook: "elva.duke",
      instagram: "kristy_howe",
      twitter: "taylor17"
    },
    guarantor: {
      full_name: "Delores Bender",
      phone: 2348260416300,
      email: "deloresbender@nurplex.com",
      relationship: "Friend"
    }
  },
  {
    id: 380,
    organization: "Accufarm",
    username: "Alexander394",
    email: "alexanderbender@accufarm.com",
    phoneNumber: "(894) 526-3618",
    dateJoined: "2014-11-06",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 37431074,
      bank_name: "Sterling Bank"
    },
    personalInformation: {
      fullname: "Walter Charles",
      bvn: 45858155933,
      gender: "Female",
      marital_status: "Widowed",
      children: 5,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Unemployed",
      sector_of_employment: "Agriculture",
      duration_of_employment: "14 years",
      monthly_income: 51670,
      loan_repayment: 4740,
      office_email: "katherine.english@undertap.com"
    },
    social: {
      facebook: "rosalind.carey",
      instagram: "dillard_dawson",
      twitter: "amie49"
    },
    guarantor: {
      full_name: "Hodges Benjamin",
      phone: 2348756076634,
      email: "hodgesbenjamin@undertap.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 381,
    organization: "Marketoid",
    username: "Malinda914",
    email: "malindabenjamin@marketoid.com",
    phoneNumber: "(964) 446-3829",
    dateJoined: "2018-03-04",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 413558042,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Hazel Travis",
      bvn: 22949950657,
      gender: "Male",
      marital_status: "Single",
      children: 1,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Employed",
      sector_of_employment: "Government",
      duration_of_employment: "5 years",
      monthly_income: 162158,
      loan_repayment: 3874,
      office_email: "silvia.ellison@biohab.com"
    },
    social: {
      facebook: "matthews.rocha",
      instagram: "effie_delgado",
      twitter: "munoz85"
    },
    guarantor: {
      full_name: "Jamie Maxwell",
      phone: 2347838311408,
      email: "jamiemaxwell@biohab.com",
      relationship: "Friend"
    }
  },
  {
    id: 382,
    organization: "Plasmox",
    username: "Adela622",
    email: "adelamaxwell@plasmox.com",
    phoneNumber: "(845) 439-3613",
    dateJoined: "2015-02-14",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 492143969,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Marta Ferguson",
      bvn: 37066942341,
      gender: "Female",
      marital_status: "Single",
      children: 4,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Employed",
      sector_of_employment: "Technology",
      duration_of_employment: "27 years",
      monthly_income: 458521,
      loan_repayment: 4574,
      office_email: "conway.moses@trasola.com"
    },
    social: {
      facebook: "wynn.day",
      instagram: "cheri_oneill",
      twitter: "shelley51"
    },
    guarantor: {
      full_name: "Lucy Mcdowell",
      phone: 2348647887393,
      email: "lucymcdowell@trasola.com",
      relationship: "Family"
    }
  },
  {
    id: 383,
    organization: "Geostele",
    username: "Cora112",
    email: "coramcdowell@geostele.com",
    phoneNumber: "(949) 514-2891",
    dateJoined: "2023-02-12",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 353836654,
      bank_name: "UBA"
    },
    personalInformation: {
      fullname: "Emma Gay",
      bvn: 79891432965,
      gender: "Male",
      marital_status: "Divorced",
      children: 2,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Student",
      sector_of_employment: "Retail",
      duration_of_employment: "8 years",
      monthly_income: 282391,
      loan_repayment: 3409,
      office_email: "fields.ware@paragonia.com"
    },
    social: {
      facebook: "jodi.myers",
      instagram: "hopkins_hicks",
      twitter: "cecile29"
    },
    guarantor: {
      full_name: "Pat Warner",
      phone: 2348076563244,
      email: "patwarner@paragonia.com",
      relationship: "Colleague"
    }
  },
  {
    id: 384,
    organization: "Twiggery",
    username: "Salinas931",
    email: "salinaswarner@twiggery.com",
    phoneNumber: "(844) 451-3063",
    dateJoined: "2020-07-13",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 90438457,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Kelley Sweeney",
      bvn: 99976632785,
      gender: "Male",
      marital_status: "Divorced",
      children: 5,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Unemployed",
      sector_of_employment: "Healthcare",
      duration_of_employment: "38 years",
      monthly_income: 223310,
      loan_repayment: 3300,
      office_email: "millicent.riley@medcom.com"
    },
    social: {
      facebook: "leann.phillips",
      instagram: "alexandra_skinner",
      twitter: "margery33"
    },
    guarantor: {
      full_name: "Cummings Snyder",
      phone: 2348405262143,
      email: "cummingssnyder@medcom.com",
      relationship: "Partner"
    }
  },
  {
    id: 385,
    organization: "Stucco",
    username: "Luella474",
    email: "luellasnyder@stucco.com",
    phoneNumber: "(800) 473-3031",
    dateJoined: "2015-03-19",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 246277291,
      bank_name: "GTBank"
    },
    personalInformation: {
      fullname: "Barnes Joyce",
      bvn: 94973777676,
      gender: "Male",
      marital_status: "Married",
      children: 4,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Retired",
      sector_of_employment: "Agriculture",
      duration_of_employment: "19 years",
      monthly_income: 447555,
      loan_repayment: 3679,
      office_email: "olsen.tillman@limage.com"
    },
    social: {
      facebook: "lloyd.petty",
      instagram: "kayla_booker",
      twitter: "miles11"
    },
    guarantor: {
      full_name: "Angelina Holcomb",
      phone: 2347535398714,
      email: "angelinaholcomb@limage.com",
      relationship: "Friend"
    }
  },
  {
    id: 386,
    organization: "Boilcat",
    username: "Randi375",
    email: "randiholcomb@boilcat.com",
    phoneNumber: "(890) 470-2946",
    dateJoined: "2024-07-31",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 308205406,
      bank_name: "Wema Bank"
    },
    personalInformation: {
      fullname: "Cote Gibbs",
      bvn: 43686243727,
      gender: "Female",
      marital_status: "Widowed",
      children: 4,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Self-employed",
      sector_of_employment: "Technology",
      duration_of_employment: "25 years",
      monthly_income: 204556,
      loan_repayment: 4219,
      office_email: "rosetta.goodman@lingoage.com"
    },
    social: {
      facebook: "briana.johnston",
      instagram: "edwina_gibson",
      twitter: "ingrid19"
    },
    guarantor: {
      full_name: "Reyes Moon",
      phone: 2349009976929,
      email: "reyesmoon@lingoage.com",
      relationship: "Family"
    }
  },
  {
    id: 387,
    organization: "Amtas",
    username: "Tyson870",
    email: "tysonmoon@amtas.com",
    phoneNumber: "(881) 555-3683",
    dateJoined: "2021-11-23",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 36017403,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Nettie Dixon",
      bvn: 64523973196,
      gender: "Female",
      marital_status: "Divorced",
      children: 0,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Unemployed",
      sector_of_employment: "Technology",
      duration_of_employment: "2 years",
      monthly_income: 419753,
      loan_repayment: 2256,
      office_email: "murphy.estrada@pyrami.com"
    },
    social: {
      facebook: "shelton.alston",
      instagram: "hurley_sears",
      twitter: "valdez24"
    },
    guarantor: {
      full_name: "Roth Haney",
      phone: 2349072893518,
      email: "rothhaney@pyrami.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 388,
    organization: "Qot",
    username: "Summers958",
    email: "summershaney@qot.com",
    phoneNumber: "(946) 541-3925",
    dateJoined: "2015-05-06",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 380261524,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Ila James",
      bvn: 90549071317,
      gender: "Male",
      marital_status: "Widowed",
      children: 5,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Self-employed",
      sector_of_employment: "Government",
      duration_of_employment: "19 years",
      monthly_income: 197990,
      loan_repayment: 2525,
      office_email: "hill.hernandez@zilencio.com"
    },
    social: {
      facebook: "lydia.newman",
      instagram: "lori_cobb",
      twitter: "jo15"
    },
    guarantor: {
      full_name: "Sharron William",
      phone: 2348944601679,
      email: "sharronwilliam@zilencio.com",
      relationship: "Partner"
    }
  },
  {
    id: 389,
    organization: "Comvex",
    username: "Therese225",
    email: "theresewilliam@comvex.com",
    phoneNumber: "(841) 564-2710",
    dateJoined: "2022-11-03",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 315726922,
      bank_name: "Wema Bank"
    },
    personalInformation: {
      fullname: "Brigitte Bell",
      bvn: 99562049816,
      gender: "Female",
      marital_status: "Divorced",
      children: 0,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Student",
      sector_of_employment: "Education",
      duration_of_employment: "37 years",
      monthly_income: 416754,
      loan_repayment: 3988,
      office_email: "gayle.kemp@cognicode.com"
    },
    social: {
      facebook: "mcmillan.huff",
      instagram: "gomez_wiggins",
      twitter: "mercado3"
    },
    guarantor: {
      full_name: "Perkins Pratt",
      phone: 2348010130673,
      email: "perkinspratt@cognicode.com",
      relationship: "Colleague"
    }
  },
  {
    id: 390,
    organization: "Isologix",
    username: "Audra735",
    email: "audrapratt@isologix.com",
    phoneNumber: "(899) 587-2017",
    dateJoined: "2015-07-30",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 124632736,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Chang Martin",
      bvn: 39884327827,
      gender: "Male",
      marital_status: "Single",
      children: 1,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Retired",
      sector_of_employment: "Government",
      duration_of_employment: "5 years",
      monthly_income: 72069,
      loan_repayment: 4114,
      office_email: "brittney.cole@zoxy.com"
    },
    social: {
      facebook: "barbra.reeves",
      instagram: "mavis_preston",
      twitter: "bernadine9"
    },
    guarantor: {
      full_name: "Bettye Pittman",
      phone: 2347231578172,
      email: "bettyepittman@zoxy.com",
      relationship: "Colleague"
    }
  },
  {
    id: 391,
    organization: "Bezal",
    username: "Hale517",
    email: "halepittman@bezal.com",
    phoneNumber: "(976) 548-3115",
    dateJoined: "2023-06-15",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 348866705,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Bryant Rios",
      bvn: 17809345279,
      gender: "Female",
      marital_status: "Divorced",
      children: 2,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Unemployed",
      sector_of_employment: "Agriculture",
      duration_of_employment: "11 years",
      monthly_income: 125979,
      loan_repayment: 4023,
      office_email: "florence.jennings@entroflex.com"
    },
    social: {
      facebook: "ferguson.hunter",
      instagram: "marla_slater",
      twitter: "leanne1"
    },
    guarantor: {
      full_name: "Sloan Small",
      phone: 2347468850015,
      email: "sloansmall@entroflex.com",
      relationship: "Colleague"
    }
  },
  {
    id: 392,
    organization: "Songlines",
    username: "Mcpherson751",
    email: "mcphersonsmall@songlines.com",
    phoneNumber: "(999) 472-3639",
    dateJoined: "2018-01-23",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 120391572,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Gray Winters",
      bvn: 13433544709,
      gender: "Male",
      marital_status: "Single",
      children: 2,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Self-employed",
      sector_of_employment: "Construction",
      duration_of_employment: "21 years",
      monthly_income: 391544,
      loan_repayment: 3178,
      office_email: "karin.garrett@ovation.com"
    },
    social: {
      facebook: "coleen.copeland",
      instagram: "lena_sloan",
      twitter: "dorothy84"
    },
    guarantor: {
      full_name: "Veronica Foster",
      phone: 2347072037645,
      email: "veronicafoster@ovation.com",
      relationship: "Colleague"
    }
  },
  {
    id: 393,
    organization: "Digial",
    username: "Sallie328",
    email: "salliefoster@digial.com",
    phoneNumber: "(919) 500-3272",
    dateJoined: "2023-04-14",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 273530864,
      bank_name: "UBA"
    },
    personalInformation: {
      fullname: "Carney Salazar",
      bvn: 96426354895,
      gender: "Male",
      marital_status: "Divorced",
      children: 3,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Employed",
      sector_of_employment: "Construction",
      duration_of_employment: "1 years",
      monthly_income: 262309,
      loan_repayment: 1980,
      office_email: "petersen.howard@insource.com"
    },
    social: {
      facebook: "dollie.gutierrez",
      instagram: "page_roy",
      twitter: "darcy82"
    },
    guarantor: {
      full_name: "Tracie Ortega",
      phone: 2348039701748,
      email: "tracieortega@insource.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 394,
    organization: "Zytrax",
    username: "Sharp209",
    email: "sharportega@zytrax.com",
    phoneNumber: "(945) 573-3441",
    dateJoined: "2016-06-18",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 290064185,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Lewis Chase",
      bvn: 82261056021,
      gender: "Male",
      marital_status: "Single",
      children: 0,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Student",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "20 years",
      monthly_income: 272856,
      loan_repayment: 4018,
      office_email: "pugh.holden@xurban.com"
    },
    social: {
      facebook: "bentley.daugherty",
      instagram: "velez_stephens",
      twitter: "baker36"
    },
    guarantor: {
      full_name: "Roman Dalton",
      phone: 2348207588784,
      email: "romandalton@xurban.com",
      relationship: "Colleague"
    }
  },
  {
    id: 395,
    organization: "Signidyne",
    username: "Tiffany397",
    email: "tiffanydalton@signidyne.com",
    phoneNumber: "(925) 484-2361",
    dateJoined: "2022-07-27",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 22850733,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Rachelle Dodson",
      bvn: 72399403755,
      gender: "Male",
      marital_status: "Single",
      children: 4,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Self-employed",
      sector_of_employment: "Education",
      duration_of_employment: "3 years",
      monthly_income: 370042,
      loan_repayment: 4053,
      office_email: "tammie.gomez@insurety.com"
    },
    social: {
      facebook: "wanda.harding",
      instagram: "dora_clements",
      twitter: "catalina47"
    },
    guarantor: {
      full_name: "Tina Hunt",
      phone: 2348853208532,
      email: "tinahunt@insurety.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 396,
    organization: "Entropix",
    username: "Hendricks742",
    email: "hendrickshunt@entropix.com",
    phoneNumber: "(888) 596-3565",
    dateJoined: "2020-02-28",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 331032913,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Hendrix Ayers",
      bvn: 30647938618,
      gender: "Male",
      marital_status: "Widowed",
      children: 0,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Retired",
      sector_of_employment: "Retail",
      duration_of_employment: "37 years",
      monthly_income: 394622,
      loan_repayment: 2040,
      office_email: "duncan.moore@musaphics.com"
    },
    social: {
      facebook: "suzette.torres",
      instagram: "barnett_weber",
      twitter: "cooper39"
    },
    guarantor: {
      full_name: "Macias Kinney",
      phone: 2347231030524,
      email: "maciaskinney@musaphics.com",
      relationship: "Partner"
    }
  },
  {
    id: 397,
    organization: "Solaren",
    username: "Ilene393",
    email: "ilenekinney@solaren.com",
    phoneNumber: "(984) 421-3525",
    dateJoined: "2022-12-20",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 246576588,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Weiss Stuart",
      bvn: 30894320983,
      gender: "Male",
      marital_status: "Divorced",
      children: 3,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Self-employed",
      sector_of_employment: "Healthcare",
      duration_of_employment: "4 years",
      monthly_income: 410052,
      loan_repayment: 4007,
      office_email: "sweeney.norman@unisure.com"
    },
    social: {
      facebook: "klein.williamson",
      instagram: "osborn_peck",
      twitter: "lawson80"
    },
    guarantor: {
      full_name: "Eliza Dickson",
      phone: 2347486125683,
      email: "elizadickson@unisure.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 398,
    organization: "Uniworld",
    username: "Peck504",
    email: "peckdickson@uniworld.com",
    phoneNumber: "(979) 527-3918",
    dateJoined: "2015-07-02",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 167844194,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Rebekah Boyle",
      bvn: 67058252236,
      gender: "Male",
      marital_status: "Single",
      children: 2,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Self-employed",
      sector_of_employment: "Construction",
      duration_of_employment: "30 years",
      monthly_income: 468958,
      loan_repayment: 2354,
      office_email: "nanette.floyd@comvey.com"
    },
    social: {
      facebook: "luisa.swanson",
      instagram: "colette_mcdaniel",
      twitter: "george41"
    },
    guarantor: {
      full_name: "Washington Atkinson",
      phone: 2348966724043,
      email: "washingtonatkinson@comvey.com",
      relationship: "Friend"
    }
  },
  {
    id: 399,
    organization: "Stralum",
    username: "Townsend878",
    email: "townsendatkinson@stralum.com",
    phoneNumber: "(849) 442-3792",
    dateJoined: "2021-07-03",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 464639857,
      bank_name: "First Bank"
    },
    personalInformation: {
      fullname: "Maribel Blankenship",
      bvn: 67258808272,
      gender: "Female",
      marital_status: "Single",
      children: 0,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Employed",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "22 years",
      monthly_income: 163039,
      loan_repayment: 2348,
      office_email: "amy.thomas@lyria.com"
    },
    social: {
      facebook: "vera.snow",
      instagram: "mayer_cleveland",
      twitter: "frederick3"
    },
    guarantor: {
      full_name: "Farrell Reilly",
      phone: 2347518718672,
      email: "farrellreilly@lyria.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 400,
    organization: "Isotrack",
    username: "Farley945",
    email: "farleyreilly@isotrack.com",
    phoneNumber: "(991) 558-2878",
    dateJoined: "2017-01-24",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 170864760,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Contreras Murphy",
      bvn: 90638627671,
      gender: "Male",
      marital_status: "Single",
      children: 4,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Unemployed",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "28 years",
      monthly_income: 489323,
      loan_repayment: 4592,
      office_email: "greer.guerra@octocore.com"
    },
    social: {
      facebook: "nelson.vasquez",
      instagram: "hammond_pickett",
      twitter: "boyd16"
    },
    guarantor: {
      full_name: "Leon Velasquez",
      phone: 2347898298256,
      email: "leonvelasquez@octocore.com",
      relationship: "Partner"
    }
  },
  {
    id: 401,
    organization: "Translink",
    username: "Fox779",
    email: "foxvelasquez@translink.com",
    phoneNumber: "(855) 584-3342",
    dateJoined: "2019-09-27",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 57564608,
      bank_name: "GTBank"
    },
    personalInformation: {
      fullname: "Barron Noble",
      bvn: 25447234974,
      gender: "Female",
      marital_status: "Married",
      children: 0,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Self-employed",
      sector_of_employment: "Government",
      duration_of_employment: "7 years",
      monthly_income: 475309,
      loan_repayment: 4337,
      office_email: "celia.george@callflex.com"
    },
    social: {
      facebook: "harriet.cooper",
      instagram: "emerson_caldwell",
      twitter: "mooney90"
    },
    guarantor: {
      full_name: "Muriel Sutton",
      phone: 2348177910005,
      email: "murielsutton@callflex.com",
      relationship: "Partner"
    }
  },
  {
    id: 402,
    organization: "Interloo",
    username: "Lauren510",
    email: "laurensutton@interloo.com",
    phoneNumber: "(858) 493-3622",
    dateJoined: "2017-08-06",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 152104656,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Garcia Becker",
      bvn: 81592401031,
      gender: "Male",
      marital_status: "Single",
      children: 4,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Unemployed",
      sector_of_employment: "Retail",
      duration_of_employment: "35 years",
      monthly_income: 348023,
      loan_repayment: 4274,
      office_email: "cruz.hoover@zaphire.com"
    },
    social: {
      facebook: "drake.carroll",
      instagram: "shelly_cameron",
      twitter: "carter18"
    },
    guarantor: {
      full_name: "Mona Love",
      phone: 2347336970578,
      email: "monalove@zaphire.com",
      relationship: "Partner"
    }
  },
  {
    id: 403,
    organization: "Boink",
    username: "English146",
    email: "englishlove@boink.com",
    phoneNumber: "(943) 495-2631",
    dateJoined: "2017-08-19",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 383371986,
      bank_name: "GTBank"
    },
    personalInformation: {
      fullname: "Salazar Ewing",
      bvn: 57841954258,
      gender: "Female",
      marital_status: "Single",
      children: 0,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Employed",
      sector_of_employment: "Agriculture",
      duration_of_employment: "34 years",
      monthly_income: 130576,
      loan_repayment: 4119,
      office_email: "harding.bullock@zensor.com"
    },
    social: {
      facebook: "chrystal.landry",
      instagram: "dixie_key",
      twitter: "beverley89"
    },
    guarantor: {
      full_name: "Mcintosh Sweet",
      phone: 2347153503755,
      email: "mcintoshsweet@zensor.com",
      relationship: "Partner"
    }
  },
  {
    id: 404,
    organization: "Inquala",
    username: "Navarro489",
    email: "navarrosweet@inquala.com",
    phoneNumber: "(912) 416-2908",
    dateJoined: "2020-04-14",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 479564132,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Kim Randall",
      bvn: 15537197504,
      gender: "Male",
      marital_status: "Single",
      children: 5,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Retired",
      sector_of_employment: "Education",
      duration_of_employment: "22 years",
      monthly_income: 168869,
      loan_repayment: 2524,
      office_email: "burks.decker@kage.com"
    },
    social: {
      facebook: "michael.sexton",
      instagram: "bullock_richards",
      twitter: "hodge62"
    },
    guarantor: {
      full_name: "Russo Ferrell",
      phone: 2348548157771,
      email: "russoferrell@kage.com",
      relationship: "Family"
    }
  },
  {
    id: 405,
    organization: "Otherside",
    username: "Stuart941",
    email: "stuartferrell@otherside.com",
    phoneNumber: "(853) 447-3293",
    dateJoined: "2021-05-12",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 430826381,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Vinson Simon",
      bvn: 64208477568,
      gender: "Male",
      marital_status: "Single",
      children: 2,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Employed",
      sector_of_employment: "Healthcare",
      duration_of_employment: "38 years",
      monthly_income: 192516,
      loan_repayment: 4219,
      office_email: "bonita.haynes@entality.com"
    },
    social: {
      facebook: "reese.reynolds",
      instagram: "soto_stanley",
      twitter: "moody24"
    },
    guarantor: {
      full_name: "Tara Kirkland",
      phone: 2348174146257,
      email: "tarakirkland@entality.com",
      relationship: "Family"
    }
  },
  {
    id: 406,
    organization: "Norsup",
    username: "Nicholson260",
    email: "nicholsonkirkland@norsup.com",
    phoneNumber: "(900) 584-2739",
    dateJoined: "2016-07-22",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 484832058,
      bank_name: "GTBank"
    },
    personalInformation: {
      fullname: "Becker Leon",
      bvn: 20270113688,
      gender: "Male",
      marital_status: "Married",
      children: 2,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Retired",
      sector_of_employment: "Finance",
      duration_of_employment: "4 years",
      monthly_income: 156029,
      loan_repayment: 2369,
      office_email: "joyce.kennedy@anarco.com"
    },
    social: {
      facebook: "kelly.gross",
      instagram: "lula_stone",
      twitter: "johanna76"
    },
    guarantor: {
      full_name: "Barber Bruce",
      phone: 2348859319254,
      email: "barberbruce@anarco.com",
      relationship: "Friend"
    }
  },
  {
    id: 407,
    organization: "Gadtron",
    username: "Hicks225",
    email: "hicksbruce@gadtron.com",
    phoneNumber: "(987) 588-3282",
    dateJoined: "2017-06-25",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 481844440,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Alisha Best",
      bvn: 71182720171,
      gender: "Female",
      marital_status: "Married",
      children: 1,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Self-employed",
      sector_of_employment: "Agriculture",
      duration_of_employment: "25 years",
      monthly_income: 361819,
      loan_repayment: 2125,
      office_email: "ester.dickerson@remold.com"
    },
    social: {
      facebook: "shelia.workman",
      instagram: "everett_benton",
      twitter: "kline89"
    },
    guarantor: {
      full_name: "Margret Stokes",
      phone: 2347206467445,
      email: "margretstokes@remold.com",
      relationship: "Friend"
    }
  },
  {
    id: 408,
    organization: "Recrisys",
    username: "Garza864",
    email: "garzastokes@recrisys.com",
    phoneNumber: "(815) 413-2079",
    dateJoined: "2016-11-21",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 435262655,
      bank_name: "GTBank"
    },
    personalInformation: {
      fullname: "Marietta Adkins",
      bvn: 63713430128,
      gender: "Female",
      marital_status: "Married",
      children: 5,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Student",
      sector_of_employment: "Retail",
      duration_of_employment: "39 years",
      monthly_income: 95901,
      loan_repayment: 2094,
      office_email: "beasley.smith@mantrix.com"
    },
    social: {
      facebook: "alba.berg",
      instagram: "tucker_webb",
      twitter: "brandi72"
    },
    guarantor: {
      full_name: "Minerva Mcmillan",
      phone: 2349008734553,
      email: "minervamcmillan@mantrix.com",
      relationship: "Partner"
    }
  },
  {
    id: 409,
    organization: "Codact",
    username: "Gabrielle670",
    email: "gabriellemcmillan@codact.com",
    phoneNumber: "(874) 573-3871",
    dateJoined: "2016-09-15",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 363039387,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Houston Hewitt",
      bvn: 46776326077,
      gender: "Female",
      marital_status: "Married",
      children: 4,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Student",
      sector_of_employment: "Healthcare",
      duration_of_employment: "24 years",
      monthly_income: 111487,
      loan_repayment: 3075,
      office_email: "maria.todd@ezent.com"
    },
    social: {
      facebook: "rhodes.yates",
      instagram: "dyer_newton",
      twitter: "mcknight56"
    },
    guarantor: {
      full_name: "Rivers Hall",
      phone: 2348076437536,
      email: "rivershall@ezent.com",
      relationship: "Family"
    }
  },
  {
    id: 410,
    organization: "Zinca",
    username: "Rowe827",
    email: "rowehall@zinca.com",
    phoneNumber: "(829) 444-3205",
    dateJoined: "2017-02-05",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 490805517,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Carrie Weaver",
      bvn: 91882844244,
      gender: "Female",
      marital_status: "Single",
      children: 4,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Employed",
      sector_of_employment: "Technology",
      duration_of_employment: "25 years",
      monthly_income: 90565,
      loan_repayment: 2118,
      office_email: "debbie.garner@gorganic.com"
    },
    social: {
      facebook: "benton.kelley",
      instagram: "lea_mcfadden",
      twitter: "torres23"
    },
    guarantor: {
      full_name: "Frazier Mills",
      phone: 2348888870038,
      email: "fraziermills@gorganic.com",
      relationship: "Colleague"
    }
  },
  {
    id: 411,
    organization: "Slax",
    username: "Herman396",
    email: "hermanmills@slax.com",
    phoneNumber: "(841) 527-2333",
    dateJoined: "2015-11-18",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 135646620,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Wiggins Franco",
      bvn: 43934928769,
      gender: "Female",
      marital_status: "Widowed",
      children: 1,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Student",
      sector_of_employment: "Government",
      duration_of_employment: "20 years",
      monthly_income: 188374,
      loan_repayment: 3557,
      office_email: "morse.williams@insectus.com"
    },
    social: {
      facebook: "dennis.ellis",
      instagram: "horne_riddle",
      twitter: "peterson81"
    },
    guarantor: {
      full_name: "Morgan Brady",
      phone: 2348002912394,
      email: "morganbrady@insectus.com",
      relationship: "Friend"
    }
  },
  {
    id: 412,
    organization: "Chillium",
    username: "Helena330",
    email: "helenabrady@chillium.com",
    phoneNumber: "(899) 414-2204",
    dateJoined: "2017-05-09",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 447512675,
      bank_name: "Sterling Bank"
    },
    personalInformation: {
      fullname: "Sharlene Wyatt",
      bvn: 74265761586,
      gender: "Female",
      marital_status: "Divorced",
      children: 0,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Employed",
      sector_of_employment: "Government",
      duration_of_employment: "7 years",
      monthly_income: 134716,
      loan_repayment: 4653,
      office_email: "hopper.carson@sulfax.com"
    },
    social: {
      facebook: "cathryn.jenkins",
      instagram: "edwards_taylor",
      twitter: "melendez10"
    },
    guarantor: {
      full_name: "Watson Burnett",
      phone: 2347366982444,
      email: "watsonburnett@sulfax.com",
      relationship: "Family"
    }
  },
  {
    id: 413,
    organization: "Supportal",
    username: "Oneil887",
    email: "oneilburnett@supportal.com",
    phoneNumber: "(875) 542-2374",
    dateJoined: "2017-07-16",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 236400825,
      bank_name: "UBA"
    },
    personalInformation: {
      fullname: "James Knowles",
      bvn: 63869956623,
      gender: "Male",
      marital_status: "Widowed",
      children: 0,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Employed",
      sector_of_employment: "Healthcare",
      duration_of_employment: "32 years",
      monthly_income: 424315,
      loan_repayment: 3581,
      office_email: "crosby.oconnor@corpulse.com"
    },
    social: {
      facebook: "wilma.hardin",
      instagram: "geneva_santana",
      twitter: "workman57"
    },
    guarantor: {
      full_name: "Holt Forbes",
      phone: 2348032780457,
      email: "holtforbes@corpulse.com",
      relationship: "Family"
    }
  },
  {
    id: 414,
    organization: "Fleetmix",
    username: "Haynes182",
    email: "haynesforbes@fleetmix.com",
    phoneNumber: "(831) 524-2870",
    dateJoined: "2014-02-07",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 403501040,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Sondra Levine",
      bvn: 82360878711,
      gender: "Male",
      marital_status: "Married",
      children: 0,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Retired",
      sector_of_employment: "Technology",
      duration_of_employment: "35 years",
      monthly_income: 71288,
      loan_repayment: 4880,
      office_email: "rebecca.callahan@multron.com"
    },
    social: {
      facebook: "dickson.hartman",
      instagram: "larson_lee",
      twitter: "bettie8"
    },
    guarantor: {
      full_name: "Case Powers",
      phone: 2348844083514,
      email: "casepowers@multron.com",
      relationship: "Partner"
    }
  },
  {
    id: 415,
    organization: "Xyqag",
    username: "Deann175",
    email: "deannpowers@xyqag.com",
    phoneNumber: "(833) 538-2578",
    dateJoined: "2014-11-28",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 294860812,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Richard Patel",
      bvn: 90356919286,
      gender: "Male",
      marital_status: "Single",
      children: 4,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Employed",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "16 years",
      monthly_income: 360949,
      loan_repayment: 2038,
      office_email: "bridges.nichols@anivet.com"
    },
    social: {
      facebook: "nola.osborne",
      instagram: "salas_wade",
      twitter: "rojas95"
    },
    guarantor: {
      full_name: "Fernandez Farmer",
      phone: 2347541623316,
      email: "fernandezfarmer@anivet.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 416,
    organization: "Eplode",
    username: "Flowers621",
    email: "flowersfarmer@eplode.com",
    phoneNumber: "(900) 400-3498",
    dateJoined: "2019-09-05",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 269608509,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Roy Price",
      bvn: 23525688775,
      gender: "Male",
      marital_status: "Single",
      children: 3,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Retired",
      sector_of_employment: "Construction",
      duration_of_employment: "17 years",
      monthly_income: 404219,
      loan_repayment: 4696,
      office_email: "pamela.clark@extragene.com"
    },
    social: {
      facebook: "mercer.colon",
      instagram: "robertson_klein",
      twitter: "courtney76"
    },
    guarantor: {
      full_name: "Wagner Kline",
      phone: 2347826936752,
      email: "wagnerkline@extragene.com",
      relationship: "Colleague"
    }
  },
  {
    id: 417,
    organization: "Repetwire",
    username: "Bradshaw361",
    email: "bradshawkline@repetwire.com",
    phoneNumber: "(942) 450-3957",
    dateJoined: "2024-11-04",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 32484482,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Ware Greene",
      bvn: 76047859769,
      gender: "Female",
      marital_status: "Divorced",
      children: 5,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Self-employed",
      sector_of_employment: "Retail",
      duration_of_employment: "32 years",
      monthly_income: 61525,
      loan_repayment: 4710,
      office_email: "padilla.justice@applideck.com"
    },
    social: {
      facebook: "steele.chen",
      instagram: "hyde_langley",
      twitter: "corina8"
    },
    guarantor: {
      full_name: "Pam Stevenson",
      phone: 2347793267668,
      email: "pamstevenson@applideck.com",
      relationship: "Friend"
    }
  },
  {
    id: 418,
    organization: "Furnitech",
    username: "Kathie986",
    email: "kathiestevenson@furnitech.com",
    phoneNumber: "(973) 466-2207",
    dateJoined: "2017-09-10",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 174454623,
      bank_name: "Wema Bank"
    },
    personalInformation: {
      fullname: "Howell Bowen",
      bvn: 23099202686,
      gender: "Male",
      marital_status: "Divorced",
      children: 5,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Retired",
      sector_of_employment: "Technology",
      duration_of_employment: "1 years",
      monthly_income: 394880,
      loan_repayment: 2394,
      office_email: "angelita.marshall@cincyr.com"
    },
    social: {
      facebook: "thompson.roach",
      instagram: "angeline_fowler",
      twitter: "pace79"
    },
    guarantor: {
      full_name: "Laurie Wong",
      phone: 2347635400110,
      email: "lauriewong@cincyr.com",
      relationship: "Colleague"
    }
  },
  {
    id: 419,
    organization: "Netropic",
    username: "Herminia482",
    email: "herminiawong@netropic.com",
    phoneNumber: "(862) 460-2634",
    dateJoined: "2021-11-03",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 349066266,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Collier Leonard",
      bvn: 63055457161,
      gender: "Female",
      marital_status: "Married",
      children: 2,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Unemployed",
      sector_of_employment: "Retail",
      duration_of_employment: "20 years",
      monthly_income: 56255,
      loan_repayment: 3605,
      office_email: "joseph.davidson@intergeek.com"
    },
    social: {
      facebook: "ora.gill",
      instagram: "vaughn_medina",
      twitter: "laura52"
    },
    guarantor: {
      full_name: "Pansy Galloway",
      phone: 2347325489854,
      email: "pansygalloway@intergeek.com",
      relationship: "Partner"
    }
  },
  {
    id: 420,
    organization: "Bluplanet",
    username: "Cook875",
    email: "cookgalloway@bluplanet.com",
    phoneNumber: "(880) 421-2215",
    dateJoined: "2024-09-13",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 338407778,
      bank_name: "Wema Bank"
    },
    personalInformation: {
      fullname: "Kendra Serrano",
      bvn: 42403466548,
      gender: "Male",
      marital_status: "Divorced",
      children: 0,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Unemployed",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "16 years",
      monthly_income: 223392,
      loan_repayment: 2316,
      office_email: "erika.wilder@kozgene.com"
    },
    social: {
      facebook: "wheeler.edwards",
      instagram: "paulette_robinson",
      twitter: "stanton78"
    },
    guarantor: {
      full_name: "Barton Clayton",
      phone: 2347143396768,
      email: "bartonclayton@kozgene.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 421,
    organization: "Rockabye",
    username: "Flora185",
    email: "floraclayton@rockabye.com",
    phoneNumber: "(881) 485-3751",
    dateJoined: "2024-09-24",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 25719946,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Bradley Head",
      bvn: 47722702218,
      gender: "Female",
      marital_status: "Divorced",
      children: 3,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Retired",
      sector_of_employment: "Technology",
      duration_of_employment: "19 years",
      monthly_income: 382694,
      loan_repayment: 3546,
      office_email: "compton.hodge@comtest.com"
    },
    social: {
      facebook: "gallegos.patton",
      instagram: "norma_bonner",
      twitter: "paula20"
    },
    guarantor: {
      full_name: "Marshall Roberts",
      phone: 2348758585055,
      email: "marshallroberts@comtest.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 422,
    organization: "Tubalum",
    username: "Rhoda656",
    email: "rhodaroberts@tubalum.com",
    phoneNumber: "(989) 405-2662",
    dateJoined: "2021-11-23",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 104709960,
      bank_name: "Sterling Bank"
    },
    personalInformation: {
      fullname: "Madge Owen",
      bvn: 45004456412,
      gender: "Female",
      marital_status: "Single",
      children: 4,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Student",
      sector_of_employment: "Government",
      duration_of_employment: "29 years",
      monthly_income: 292842,
      loan_repayment: 2779,
      office_email: "strickland.mejia@medifax.com"
    },
    social: {
      facebook: "gina.sosa",
      instagram: "parsons_barnes",
      twitter: "beard63"
    },
    guarantor: {
      full_name: "Wyatt Beard",
      phone: 2347293171383,
      email: "wyattbeard@medifax.com",
      relationship: "Partner"
    }
  },
  {
    id: 423,
    organization: "Homelux",
    username: "Reyna691",
    email: "reynabeard@homelux.com",
    phoneNumber: "(977) 400-2479",
    dateJoined: "2021-10-01",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 315777897,
      bank_name: "UBA"
    },
    personalInformation: {
      fullname: "Rachael Mcknight",
      bvn: 60505435733,
      gender: "Female",
      marital_status: "Married",
      children: 5,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Self-employed",
      sector_of_employment: "Government",
      duration_of_employment: "18 years",
      monthly_income: 200214,
      loan_repayment: 2474,
      office_email: "latasha.hines@candecor.com"
    },
    social: {
      facebook: "johnson.collier",
      instagram: "ortega_craft",
      twitter: "lilly19"
    },
    guarantor: {
      full_name: "Mattie Gilliam",
      phone: 2347434631963,
      email: "mattiegilliam@candecor.com",
      relationship: "Partner"
    }
  },
  {
    id: 424,
    organization: "Mondicil",
    username: "Lacey636",
    email: "laceygilliam@mondicil.com",
    phoneNumber: "(888) 591-3030",
    dateJoined: "2016-01-03",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 117558389,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Gardner Silva",
      bvn: 38594947439,
      gender: "Female",
      marital_status: "Single",
      children: 4,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Employed",
      sector_of_employment: "Education",
      duration_of_employment: "12 years",
      monthly_income: 326460,
      loan_repayment: 2239,
      office_email: "jan.wilson@silodyne.com"
    },
    social: {
      facebook: "lott.watts",
      instagram: "carolina_hopper",
      twitter: "reilly29"
    },
    guarantor: {
      full_name: "Lester Daniel",
      phone: 2348356379530,
      email: "lesterdaniel@silodyne.com",
      relationship: "Partner"
    }
  },
  {
    id: 425,
    organization: "Securia",
    username: "Head665",
    email: "headdaniel@securia.com",
    phoneNumber: "(970) 591-2755",
    dateJoined: "2022-06-07",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 48332134,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Gutierrez Wallace",
      bvn: 36630472699,
      gender: "Female",
      marital_status: "Single",
      children: 1,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Student",
      sector_of_employment: "Retail",
      duration_of_employment: "13 years",
      monthly_income: 275892,
      loan_repayment: 4599,
      office_email: "sykes.hayes@portaline.com"
    },
    social: {
      facebook: "grace.russell",
      instagram: "charlene_ashley",
      twitter: "hogan81"
    },
    guarantor: {
      full_name: "Elizabeth Johns",
      phone: 2348478760512,
      email: "elizabethjohns@portaline.com",
      relationship: "Friend"
    }
  },
  {
    id: 426,
    organization: "Slofast",
    username: "Jacquelyn893",
    email: "jacquelynjohns@slofast.com",
    phoneNumber: "(828) 573-3137",
    dateJoined: "2014-12-30",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 213963322,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Marci Horne",
      bvn: 11343387019,
      gender: "Male",
      marital_status: "Married",
      children: 3,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Unemployed",
      sector_of_employment: "Education",
      duration_of_employment: "20 years",
      monthly_income: 174391,
      loan_repayment: 1896,
      office_email: "tommie.ryan@magnafone.com"
    },
    social: {
      facebook: "norman.conner",
      instagram: "marlene_bright",
      twitter: "serena88"
    },
    guarantor: {
      full_name: "Nicole Vazquez",
      phone: 2347343780203,
      email: "nicolevazquez@magnafone.com",
      relationship: "Friend"
    }
  },
  {
    id: 427,
    organization: "Isoternia",
    username: "Ray311",
    email: "rayvazquez@isoternia.com",
    phoneNumber: "(852) 459-2536",
    dateJoined: "2021-04-06",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 314161477,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Maureen Rhodes",
      bvn: 49880637668,
      gender: "Male",
      marital_status: "Widowed",
      children: 0,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Employed",
      sector_of_employment: "Healthcare",
      duration_of_employment: "31 years",
      monthly_income: 282838,
      loan_repayment: 3612,
      office_email: "stokes.fitzgerald@xanide.com"
    },
    social: {
      facebook: "marva.walton",
      instagram: "ruby_hudson",
      twitter: "herring83"
    },
    guarantor: {
      full_name: "Cobb Sanders",
      phone: 2347800518022,
      email: "cobbsanders@xanide.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 428,
    organization: "Zilch",
    username: "Mcfarland294",
    email: "mcfarlandsanders@zilch.com",
    phoneNumber: "(926) 414-2234",
    dateJoined: "2016-02-23",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 178972841,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Calhoun Boyer",
      bvn: 82445159802,
      gender: "Male",
      marital_status: "Single",
      children: 4,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Self-employed",
      sector_of_employment: "Government",
      duration_of_employment: "37 years",
      monthly_income: 74032,
      loan_repayment: 2081,
      office_email: "carson.zamora@quonk.com"
    },
    social: {
      facebook: "cristina.woodard",
      instagram: "levine_nelson",
      twitter: "lessie27"
    },
    guarantor: {
      full_name: "Cooke Richard",
      phone: 2348275046564,
      email: "cookerichard@quonk.com",
      relationship: "Friend"
    }
  },
  {
    id: 429,
    organization: "Nebulean",
    username: "Mcgee761",
    email: "mcgeerichard@nebulean.com",
    phoneNumber: "(865) 420-2332",
    dateJoined: "2020-02-19",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 357254092,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Diann Brooks",
      bvn: 50900033569,
      gender: "Female",
      marital_status: "Divorced",
      children: 5,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Employed",
      sector_of_employment: "Finance",
      duration_of_employment: "7 years",
      monthly_income: 300861,
      loan_repayment: 2296,
      office_email: "betsy.walker@isodrive.com"
    },
    social: {
      facebook: "cherry.spencer",
      instagram: "kara_compton",
      twitter: "marisa72"
    },
    guarantor: {
      full_name: "Manuela Larson",
      phone: 2347694271558,
      email: "manuelalarson@isodrive.com",
      relationship: "Colleague"
    }
  },
  {
    id: 430,
    organization: "Gazak",
    username: "Fisher422",
    email: "fisherlarson@gazak.com",
    phoneNumber: "(872) 567-3644",
    dateJoined: "2017-02-02",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 473553254,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Bender Rosales",
      bvn: 23532060725,
      gender: "Female",
      marital_status: "Single",
      children: 1,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Student",
      sector_of_employment: "Construction",
      duration_of_employment: "8 years",
      monthly_income: 250320,
      loan_repayment: 3347,
      office_email: "lynette.perkins@slambda.com"
    },
    social: {
      facebook: "lillie.melton",
      instagram: "craft_valencia",
      twitter: "alfreda71"
    },
    guarantor: {
      full_name: "Tabitha Carver",
      phone: 2348053163136,
      email: "tabithacarver@slambda.com",
      relationship: "Family"
    }
  },
  {
    id: 431,
    organization: "Genmom",
    username: "Millie969",
    email: "milliecarver@genmom.com",
    phoneNumber: "(976) 534-2252",
    dateJoined: "2015-05-12",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 358192391,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Concetta Avery",
      bvn: 53433961781,
      gender: "Male",
      marital_status: "Single",
      children: 3,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Retired",
      sector_of_employment: "Finance",
      duration_of_employment: "36 years",
      monthly_income: 112274,
      loan_repayment: 2839,
      office_email: "bobbi.kirk@adornica.com"
    },
    social: {
      facebook: "tanner.lindsay",
      instagram: "hope_whitehead",
      twitter: "love64"
    },
    guarantor: {
      full_name: "Lillian Rosario",
      phone: 2348740137222,
      email: "lillianrosario@adornica.com",
      relationship: "Colleague"
    }
  },
  {
    id: 432,
    organization: "Sarasonic",
    username: "Bush638",
    email: "bushrosario@sarasonic.com",
    phoneNumber: "(855) 420-2536",
    dateJoined: "2024-10-13",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 276166479,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Alford Sampson",
      bvn: 74829936761,
      gender: "Female",
      marital_status: "Divorced",
      children: 0,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Self-employed",
      sector_of_employment: "Education",
      duration_of_employment: "20 years",
      monthly_income: 444140,
      loan_repayment: 3353,
      office_email: "bolton.walter@blurrybus.com"
    },
    social: {
      facebook: "billie.rich",
      instagram: "hallie_chavez",
      twitter: "stewart48"
    },
    guarantor: {
      full_name: "Holly Collins",
      phone: 2347087421368,
      email: "hollycollins@blurrybus.com",
      relationship: "Colleague"
    }
  },
  {
    id: 433,
    organization: "Sloganaut",
    username: "Kemp613",
    email: "kempcollins@sloganaut.com",
    phoneNumber: "(898) 465-2971",
    dateJoined: "2021-02-18",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 491143295,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Latonya Houston",
      bvn: 15167248799,
      gender: "Male",
      marital_status: "Widowed",
      children: 1,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Self-employed",
      sector_of_employment: "Construction",
      duration_of_employment: "20 years",
      monthly_income: 303818,
      loan_repayment: 4237,
      office_email: "manning.hale@applica.com"
    },
    social: {
      facebook: "castaneda.duncan",
      instagram: "mccray_vaughan",
      twitter: "fitzpatrick79"
    },
    guarantor: {
      full_name: "Hays Holloway",
      phone: 2348975249952,
      email: "haysholloway@applica.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 434,
    organization: "Suremax",
    username: "Estelle315",
    email: "estelleholloway@suremax.com",
    phoneNumber: "(851) 486-3763",
    dateJoined: "2021-07-06",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 377813503,
      bank_name: "First Bank"
    },
    personalInformation: {
      fullname: "Nadia Kaufman",
      bvn: 96757700934,
      gender: "Male",
      marital_status: "Married",
      children: 0,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Unemployed",
      sector_of_employment: "Healthcare",
      duration_of_employment: "18 years",
      monthly_income: 61820,
      loan_repayment: 2253,
      office_email: "marcy.cain@harmoney.com"
    },
    social: {
      facebook: "inez.dudley",
      instagram: "lorraine_paul",
      twitter: "meghan23"
    },
    guarantor: {
      full_name: "Deirdre Ray",
      phone: 2347553069925,
      email: "deirdreray@harmoney.com",
      relationship: "Partner"
    }
  },
  {
    id: 435,
    organization: "Futurity",
    username: "Stevenson126",
    email: "stevensonray@futurity.com",
    phoneNumber: "(961) 406-2210",
    dateJoined: "2019-02-13",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 351258437,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Terri Graves",
      bvn: 11860351446,
      gender: "Male",
      marital_status: "Widowed",
      children: 2,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Self-employed",
      sector_of_employment: "Construction",
      duration_of_employment: "18 years",
      monthly_income: 360713,
      loan_repayment: 2995,
      office_email: "lee.sharp@trollery.com"
    },
    social: {
      facebook: "sargent.howell",
      instagram: "selena_byers",
      twitter: "russell38"
    },
    guarantor: {
      full_name: "Skinner Hart",
      phone: 2348285419033,
      email: "skinnerhart@trollery.com",
      relationship: "Family"
    }
  },
  {
    id: 436,
    organization: "Exerta",
    username: "Freda348",
    email: "fredahart@exerta.com",
    phoneNumber: "(969) 479-3158",
    dateJoined: "2016-02-21",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 495631306,
      bank_name: "GTBank"
    },
    personalInformation: {
      fullname: "Joni Hughes",
      bvn: 35533959251,
      gender: "Male",
      marital_status: "Divorced",
      children: 1,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Employed",
      sector_of_employment: "Construction",
      duration_of_employment: "3 years",
      monthly_income: 80732,
      loan_repayment: 2906,
      office_email: "julia.nieves@austech.com"
    },
    social: {
      facebook: "paige.kim",
      instagram: "solis_mccullough",
      twitter: "jayne19"
    },
    guarantor: {
      full_name: "Angel Estes",
      phone: 2347287395315,
      email: "angelestes@austech.com",
      relationship: "Colleague"
    }
  },
  {
    id: 437,
    organization: "Zentry",
    username: "Sally349",
    email: "sallyestes@zentry.com",
    phoneNumber: "(949) 523-3670",
    dateJoined: "2022-11-17",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 136891407,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Harmon Austin",
      bvn: 82492064831,
      gender: "Female",
      marital_status: "Single",
      children: 0,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Employed",
      sector_of_employment: "Agriculture",
      duration_of_employment: "31 years",
      monthly_income: 179852,
      loan_repayment: 4578,
      office_email: "cecelia.sullivan@talae.com"
    },
    social: {
      facebook: "eva.trevino",
      instagram: "jana_burns",
      twitter: "dionne17"
    },
    guarantor: {
      full_name: "Benjamin Cantrell",
      phone: 2347882561843,
      email: "benjamincantrell@talae.com",
      relationship: "Colleague"
    }
  },
  {
    id: 438,
    organization: "Retrotex",
    username: "Reid322",
    email: "reidcantrell@retrotex.com",
    phoneNumber: "(946) 488-3442",
    dateJoined: "2015-01-23",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 424795938,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Denise Nash",
      bvn: 33834977108,
      gender: "Female",
      marital_status: "Widowed",
      children: 1,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Self-employed",
      sector_of_employment: "Agriculture",
      duration_of_employment: "29 years",
      monthly_income: 375319,
      loan_repayment: 2468,
      office_email: "fletcher.allison@irack.com"
    },
    social: {
      facebook: "fanny.kerr",
      instagram: "oneal_sykes",
      twitter: "conley10"
    },
    guarantor: {
      full_name: "Elma Mcneil",
      phone: 2348787858126,
      email: "elmamcneil@irack.com",
      relationship: "Partner"
    }
  },
  {
    id: 439,
    organization: "Megall",
    username: "Hinton457",
    email: "hintonmcneil@megall.com",
    phoneNumber: "(942) 553-2471",
    dateJoined: "2016-09-07",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 153343176,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Megan Nguyen",
      bvn: 57289745066,
      gender: "Female",
      marital_status: "Divorced",
      children: 3,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Unemployed",
      sector_of_employment: "Agriculture",
      duration_of_employment: "4 years",
      monthly_income: 171420,
      loan_repayment: 3664,
      office_email: "figueroa.kent@evidends.com"
    },
    social: {
      facebook: "velma.odonnell",
      instagram: "becky_baldwin",
      twitter: "vivian53"
    },
    guarantor: {
      full_name: "Nikki Norris",
      phone: 2347185787632,
      email: "nikkinorris@evidends.com",
      relationship: "Friend"
    }
  },
  {
    id: 440,
    organization: "Intradisk",
    username: "Callahan500",
    email: "callahannorris@intradisk.com",
    phoneNumber: "(846) 571-2139",
    dateJoined: "2017-11-19",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 374793507,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Casey Matthews",
      bvn: 67037371265,
      gender: "Female",
      marital_status: "Married",
      children: 5,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Employed",
      sector_of_employment: "Education",
      duration_of_employment: "17 years",
      monthly_income: 155604,
      loan_repayment: 3913,
      office_email: "gabriela.nicholson@aquacine.com"
    },
    social: {
      facebook: "guthrie.morgan",
      instagram: "neva_willis",
      twitter: "danielle26"
    },
    guarantor: {
      full_name: "Velasquez Wise",
      phone: 2347111378518,
      email: "velasquezwise@aquacine.com",
      relationship: "Colleague"
    }
  },
  {
    id: 441,
    organization: "Malathion",
    username: "Joann915",
    email: "joannwise@malathion.com",
    phoneNumber: "(866) 419-3736",
    dateJoined: "2014-03-21",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 199308101,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Cantu Shannon",
      bvn: 31713444007,
      gender: "Male",
      marital_status: "Widowed",
      children: 5,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Unemployed",
      sector_of_employment: "Healthcare",
      duration_of_employment: "1 years",
      monthly_income: 123684,
      loan_repayment: 3656,
      office_email: "bridgett.parks@sentia.com"
    },
    social: {
      facebook: "helen.ratliff",
      instagram: "sylvia_mccoy",
      twitter: "candy95"
    },
    guarantor: {
      full_name: "Schwartz Livingston",
      phone: 2348304832499,
      email: "schwartzlivingston@sentia.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 442,
    organization: "Hopeli",
    username: "Latisha833",
    email: "latishalivingston@hopeli.com",
    phoneNumber: "(979) 577-3000",
    dateJoined: "2020-04-01",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 212362954,
      bank_name: "Sterling Bank"
    },
    personalInformation: {
      fullname: "Lawanda Pugh",
      bvn: 16194965656,
      gender: "Male",
      marital_status: "Married",
      children: 4,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Student",
      sector_of_employment: "Agriculture",
      duration_of_employment: "1 years",
      monthly_income: 392924,
      loan_repayment: 2537,
      office_email: "hoover.waters@comtract.com"
    },
    social: {
      facebook: "rollins.carr",
      instagram: "zamora_pitts",
      twitter: "gordon7"
    },
    guarantor: {
      full_name: "Scott Bowman",
      phone: 2347754145248,
      email: "scottbowman@comtract.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 443,
    organization: "Orbalix",
    username: "Reynolds366",
    email: "reynoldsbowman@orbalix.com",
    phoneNumber: "(987) 598-2841",
    dateJoined: "2015-12-04",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 5875418,
      bank_name: "Wema Bank"
    },
    personalInformation: {
      fullname: "Frances Warren",
      bvn: 30893611175,
      gender: "Male",
      marital_status: "Widowed",
      children: 1,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Retired",
      sector_of_employment: "Retail",
      duration_of_employment: "35 years",
      monthly_income: 419860,
      loan_repayment: 2595,
      office_email: "kimberley.sanchez@insuron.com"
    },
    social: {
      facebook: "aida.mckinney",
      instagram: "leach_horton",
      twitter: "savage83"
    },
    guarantor: {
      full_name: "Barrera Kane",
      phone: 2348485893891,
      email: "barrerakane@insuron.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 444,
    organization: "Hotcakes",
    username: "Lucinda240",
    email: "lucindakane@hotcakes.com",
    phoneNumber: "(917) 489-2989",
    dateJoined: "2018-07-30",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 432493321,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Latoya Morrison",
      bvn: 38881864180,
      gender: "Male",
      marital_status: "Divorced",
      children: 3,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Student",
      sector_of_employment: "Finance",
      duration_of_employment: "16 years",
      monthly_income: 457979,
      loan_repayment: 2816,
      office_email: "shannon.ramsey@zaya.com"
    },
    social: {
      facebook: "corinne.barlow",
      instagram: "adrienne_vinson",
      twitter: "mendoza47"
    },
    guarantor: {
      full_name: "Sybil Hendrix",
      phone: 2347328392401,
      email: "sybilhendrix@zaya.com",
      relationship: "Family"
    }
  },
  {
    id: 445,
    organization: "Biotica",
    username: "Sheena123",
    email: "sheenahendrix@biotica.com",
    phoneNumber: "(982) 514-2576",
    dateJoined: "2020-10-27",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 406656170,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Bates Powell",
      bvn: 97204745584,
      gender: "Female",
      marital_status: "Single",
      children: 3,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Employed",
      sector_of_employment: "Government",
      duration_of_employment: "38 years",
      monthly_income: 112977,
      loan_repayment: 2437,
      office_email: "meadows.kirby@terragen.com"
    },
    social: {
      facebook: "rasmussen.rojas",
      instagram: "marcia_giles",
      twitter: "mitchell97"
    },
    guarantor: {
      full_name: "Shanna Coleman",
      phone: 2347953599418,
      email: "shannacoleman@terragen.com",
      relationship: "Family"
    }
  },
  {
    id: 446,
    organization: "Bugsall",
    username: "Robin160",
    email: "robincoleman@bugsall.com",
    phoneNumber: "(883) 583-3667",
    dateJoined: "2024-06-27",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 152015762,
      bank_name: "GTBank"
    },
    personalInformation: {
      fullname: "Ellen Pearson",
      bvn: 43070364131,
      gender: "Female",
      marital_status: "Divorced",
      children: 5,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Employed",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "10 years",
      monthly_income: 120644,
      loan_repayment: 3937,
      office_email: "teri.lucas@springbee.com"
    },
    social: {
      facebook: "holden.macdonald",
      instagram: "norton_soto",
      twitter: "nixon25"
    },
    guarantor: {
      full_name: "Dixon Middleton",
      phone: 2347067830207,
      email: "dixonmiddleton@springbee.com",
      relationship: "Partner"
    }
  },
  {
    id: 447,
    organization: "Vortexaco",
    username: "June414",
    email: "junemiddleton@vortexaco.com",
    phoneNumber: "(907) 486-2759",
    dateJoined: "2023-04-16",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 394347434,
      bank_name: "GTBank"
    },
    personalInformation: {
      fullname: "Lynn Mathews",
      bvn: 15469667025,
      gender: "Male",
      marital_status: "Married",
      children: 2,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Retired",
      sector_of_employment: "Government",
      duration_of_employment: "29 years",
      monthly_income: 372108,
      loan_repayment: 3951,
      office_email: "ball.elliott@unia.com"
    },
    social: {
      facebook: "ann.combs",
      instagram: "lilian_king",
      twitter: "coleman56"
    },
    guarantor: {
      full_name: "Bird Hooper",
      phone: 2349071190329,
      email: "birdhooper@unia.com",
      relationship: "Friend"
    }
  },
  {
    id: 448,
    organization: "Imkan",
    username: "Simon153",
    email: "simonhooper@imkan.com",
    phoneNumber: "(956) 507-2845",
    dateJoined: "2015-12-30",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 314713606,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Mari Franklin",
      bvn: 72123939818,
      gender: "Male",
      marital_status: "Divorced",
      children: 3,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Self-employed",
      sector_of_employment: "Finance",
      duration_of_employment: "12 years",
      monthly_income: 407068,
      loan_repayment: 4571,
      office_email: "estela.dunn@andershun.com"
    },
    social: {
      facebook: "josefa.marks",
      instagram: "colleen_case",
      twitter: "cardenas23"
    },
    guarantor: {
      full_name: "Blackburn Figueroa",
      phone: 2347541811754,
      email: "blackburnfigueroa@andershun.com",
      relationship: "Family"
    }
  },
  {
    id: 449,
    organization: "Zyple",
    username: "Nona143",
    email: "nonafigueroa@zyple.com",
    phoneNumber: "(982) 472-3944",
    dateJoined: "2015-03-21",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 244800978,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Ramos Rodriquez",
      bvn: 72671844133,
      gender: "Female",
      marital_status: "Single",
      children: 4,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Self-employed",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "5 years",
      monthly_income: 385064,
      loan_repayment: 2277,
      office_email: "marcella.mosley@cinaster.com"
    },
    social: {
      facebook: "lynnette.witt",
      instagram: "sullivan_montgomery",
      twitter: "blanche95"
    },
    guarantor: {
      full_name: "Merrill Faulkner",
      phone: 2347078305780,
      email: "merrillfaulkner@cinaster.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 450,
    organization: "Straloy",
    username: "Slater183",
    email: "slaterfaulkner@straloy.com",
    phoneNumber: "(964) 525-3706",
    dateJoined: "2023-07-12",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 296288225,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Coffey Madden",
      bvn: 97173287722,
      gender: "Female",
      marital_status: "Single",
      children: 0,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Unemployed",
      sector_of_employment: "Government",
      duration_of_employment: "28 years",
      monthly_income: 119689,
      loan_repayment: 3783,
      office_email: "agnes.lindsey@sustenza.com"
    },
    social: {
      facebook: "iva.holman",
      instagram: "hooper_buckley",
      twitter: "cleo47"
    },
    guarantor: {
      full_name: "Polly Valentine",
      phone: 2348147375697,
      email: "pollyvalentine@sustenza.com",
      relationship: "Partner"
    }
  },
  {
    id: 451,
    organization: "Fangold",
    username: "Bowers780",
    email: "bowersvalentine@fangold.com",
    phoneNumber: "(878) 412-3810",
    dateJoined: "2016-08-25",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 109841030,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Beach Carrillo",
      bvn: 56164241669,
      gender: "Male",
      marital_status: "Divorced",
      children: 0,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Employed",
      sector_of_employment: "Construction",
      duration_of_employment: "24 years",
      monthly_income: 70332,
      loan_repayment: 4868,
      office_email: "roxie.shepard@zboo.com"
    },
    social: {
      facebook: "brown.espinoza",
      instagram: "cherie_massey",
      twitter: "santos4"
    },
    guarantor: {
      full_name: "Melisa Mcintosh",
      phone: 2347961474286,
      email: "melisamcintosh@zboo.com",
      relationship: "Colleague"
    }
  },
  {
    id: 452,
    organization: "Zenco",
    username: "Knowles283",
    email: "knowlesmcintosh@zenco.com",
    phoneNumber: "(903) 416-3215",
    dateJoined: "2016-12-12",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 141110689,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Dorsey Miranda",
      bvn: 25040550787,
      gender: "Female",
      marital_status: "Widowed",
      children: 3,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Employed",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "37 years",
      monthly_income: 322889,
      loan_repayment: 4129,
      office_email: "huffman.rose@playce.com"
    },
    social: {
      facebook: "lynda.nolan",
      instagram: "juana_stanton",
      twitter: "burke97"
    },
    guarantor: {
      full_name: "Orr Cardenas",
      phone: 2349042244067,
      email: "orrcardenas@playce.com",
      relationship: "Family"
    }
  },
  {
    id: 453,
    organization: "Gynk",
    username: "Buchanan296",
    email: "buchanancardenas@gynk.com",
    phoneNumber: "(814) 478-3855",
    dateJoined: "2015-08-10",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 198459713,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Lucas Cox",
      bvn: 93271984932,
      gender: "Male",
      marital_status: "Widowed",
      children: 1,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Student",
      sector_of_employment: "Retail",
      duration_of_employment: "12 years",
      monthly_income: 321707,
      loan_repayment: 4112,
      office_email: "good.finch@miracula.com"
    },
    social: {
      facebook: "landry.richmond",
      instagram: "espinoza_good",
      twitter: "dickerson32"
    },
    guarantor: {
      full_name: "Gregory Burch",
      phone: 2348140694399,
      email: "gregoryburch@miracula.com",
      relationship: "Colleague"
    }
  },
  {
    id: 454,
    organization: "Isostream",
    username: "Nita592",
    email: "nitaburch@isostream.com",
    phoneNumber: "(951) 589-2173",
    dateJoined: "2021-08-11",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 150598589,
      bank_name: "GTBank"
    },
    personalInformation: {
      fullname: "Underwood Savage",
      bvn: 40300622534,
      gender: "Male",
      marital_status: "Widowed",
      children: 0,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Unemployed",
      sector_of_employment: "Healthcare",
      duration_of_employment: "5 years",
      monthly_income: 98213,
      loan_repayment: 4939,
      office_email: "jenifer.washington@geeketron.com"
    },
    social: {
      facebook: "boyer.calhoun",
      instagram: "lacy_reese",
      twitter: "sheri83"
    },
    guarantor: {
      full_name: "Olga Jacobs",
      phone: 2347265385311,
      email: "olgajacobs@geeketron.com",
      relationship: "Partner"
    }
  },
  {
    id: 455,
    organization: "Zeam",
    username: "Guadalupe884",
    email: "guadalupejacobs@zeam.com",
    phoneNumber: "(800) 537-2343",
    dateJoined: "2018-02-06",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 134767897,
      bank_name: "Sterling Bank"
    },
    personalInformation: {
      fullname: "Jerri Mathis",
      bvn: 43183698264,
      gender: "Male",
      marital_status: "Single",
      children: 2,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Retired",
      sector_of_employment: "Finance",
      duration_of_employment: "29 years",
      monthly_income: 424019,
      loan_repayment: 4422,
      office_email: "larsen.cohen@talendula.com"
    },
    social: {
      facebook: "arline.hoffman",
      instagram: "mendez_hess",
      twitter: "chambers39"
    },
    guarantor: {
      full_name: "Evans Orr",
      phone: 2347480786235,
      email: "evansorr@talendula.com",
      relationship: "Family"
    }
  },
  {
    id: 456,
    organization: "Mediot",
    username: "Lakeisha158",
    email: "lakeishaorr@mediot.com",
    phoneNumber: "(893) 422-3283",
    dateJoined: "2016-12-07",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 184132434,
      bank_name: "Sterling Bank"
    },
    personalInformation: {
      fullname: "Davis Whitaker",
      bvn: 43043228480,
      gender: "Female",
      marital_status: "Single",
      children: 1,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Unemployed",
      sector_of_employment: "Construction",
      duration_of_employment: "28 years",
      monthly_income: 465309,
      loan_repayment: 2483,
      office_email: "jeri.chang@recognia.com"
    },
    social: {
      facebook: "harris.morse",
      instagram: "christian_whitley",
      twitter: "suarez14"
    },
    guarantor: {
      full_name: "Tamara Mcintyre",
      phone: 2347958027842,
      email: "tamaramcintyre@recognia.com",
      relationship: "Family"
    }
  },
  {
    id: 457,
    organization: "Xelegyl",
    username: "Medina610",
    email: "medinamcintyre@xelegyl.com",
    phoneNumber: "(979) 508-3535",
    dateJoined: "2020-08-15",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 282579153,
      bank_name: "UBA"
    },
    personalInformation: {
      fullname: "Maxine Abbott",
      bvn: 62349282361,
      gender: "Female",
      marital_status: "Widowed",
      children: 0,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Unemployed",
      sector_of_employment: "Healthcare",
      duration_of_employment: "4 years",
      monthly_income: 244681,
      loan_repayment: 3006,
      office_email: "woodward.holt@zounds.com"
    },
    social: {
      facebook: "oconnor.moran",
      instagram: "fuller_mckay",
      twitter: "imogene4"
    },
    guarantor: {
      full_name: "Gross Anderson",
      phone: 2348579407850,
      email: "grossanderson@zounds.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 458,
    organization: "Kaggle",
    username: "Bray153",
    email: "brayanderson@kaggle.com",
    phoneNumber: "(898) 579-2128",
    dateJoined: "2014-01-29",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 395990272,
      bank_name: "GTBank"
    },
    personalInformation: {
      fullname: "Caldwell Harvey",
      bvn: 10826224684,
      gender: "Female",
      marital_status: "Single",
      children: 4,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Self-employed",
      sector_of_employment: "Agriculture",
      duration_of_employment: "32 years",
      monthly_income: 275057,
      loan_repayment: 2656,
      office_email: "catherine.mendoza@exoblue.com"
    },
    social: {
      facebook: "shannon.underwood",
      instagram: "carey_joseph",
      twitter: "morrison49"
    },
    guarantor: {
      full_name: "Nellie Young",
      phone: 2347537861481,
      email: "nellieyoung@exoblue.com",
      relationship: "Family"
    }
  },
  {
    id: 459,
    organization: "Synkgen",
    username: "Wilder670",
    email: "wilderyoung@synkgen.com",
    phoneNumber: "(988) 458-3966",
    dateJoined: "2018-12-26",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 182776527,
      bank_name: "First Bank"
    },
    personalInformation: {
      fullname: "Waters Byrd",
      bvn: 67931856998,
      gender: "Male",
      marital_status: "Widowed",
      children: 5,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Student",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "10 years",
      monthly_income: 226780,
      loan_repayment: 2074,
      office_email: "penelope.cunningham@turnabout.com"
    },
    social: {
      facebook: "ashley.ward",
      instagram: "mabel_christensen",
      twitter: "ortiz3"
    },
    guarantor: {
      full_name: "Jolene Payne",
      phone: 2348628211820,
      email: "jolenepayne@turnabout.com",
      relationship: "Partner"
    }
  },
  {
    id: 460,
    organization: "Andryx",
    username: "Irene766",
    email: "irenepayne@andryx.com",
    phoneNumber: "(939) 429-3148",
    dateJoined: "2021-02-09",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 425532292,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Donovan Molina",
      bvn: 24806958035,
      gender: "Male",
      marital_status: "Married",
      children: 4,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Self-employed",
      sector_of_employment: "Retail",
      duration_of_employment: "9 years",
      monthly_income: 291702,
      loan_repayment: 4648,
      office_email: "horn.thompson@goko.com"
    },
    social: {
      facebook: "simone.berry",
      instagram: "clarissa_everett",
      twitter: "moran26"
    },
    guarantor: {
      full_name: "Rosario Flores",
      phone: 2348444716517,
      email: "rosarioflores@goko.com",
      relationship: "Family"
    }
  },
  {
    id: 461,
    organization: "Xumonk",
    username: "Burris298",
    email: "burrisflores@xumonk.com",
    phoneNumber: "(840) 551-3124",
    dateJoined: "2014-02-12",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 182387890,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Bowman Blackwell",
      bvn: 32328020148,
      gender: "Male",
      marital_status: "Divorced",
      children: 0,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Self-employed",
      sector_of_employment: "Agriculture",
      duration_of_employment: "19 years",
      monthly_income: 129365,
      loan_repayment: 2471,
      office_email: "owen.monroe@fitcore.com"
    },
    social: {
      facebook: "monroe.juarez",
      instagram: "jacobs_mercado",
      twitter: "arlene79"
    },
    guarantor: {
      full_name: "Burton Macias",
      phone: 2347362181515,
      email: "burtonmacias@fitcore.com",
      relationship: "Friend"
    }
  },
  {
    id: 462,
    organization: "Qimonk",
    username: "Wolfe151",
    email: "wolfemacias@qimonk.com",
    phoneNumber: "(904) 596-3905",
    dateJoined: "2018-09-27",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 352959839,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Cassandra Gray",
      bvn: 53828538603,
      gender: "Female",
      marital_status: "Single",
      children: 0,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Employed",
      sector_of_employment: "Construction",
      duration_of_employment: "26 years",
      monthly_income: 497487,
      loan_repayment: 3234,
      office_email: "cooley.wilkins@zilladyne.com"
    },
    social: {
      facebook: "atkinson.jimenez",
      instagram: "darla_holland",
      twitter: "banks58"
    },
    guarantor: {
      full_name: "Jeannette Kelly",
      phone: 2347733685229,
      email: "jeannettekelly@zilladyne.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 463,
    organization: "Kongle",
    username: "Aguirre221",
    email: "aguirrekelly@kongle.com",
    phoneNumber: "(871) 508-3335",
    dateJoined: "2024-06-11",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 102221390,
      bank_name: "GTBank"
    },
    personalInformation: {
      fullname: "Pauline Vance",
      bvn: 40715736427,
      gender: "Female",
      marital_status: "Divorced",
      children: 1,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Retired",
      sector_of_employment: "Government",
      duration_of_employment: "2 years",
      monthly_income: 135329,
      loan_repayment: 3195,
      office_email: "tamika.sellers@bostonic.com"
    },
    social: {
      facebook: "lancaster.lancaster",
      instagram: "quinn_lowery",
      twitter: "dudley95"
    },
    guarantor: {
      full_name: "Pittman Fernandez",
      phone: 2348560946600,
      email: "pittmanfernandez@bostonic.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 464,
    organization: "Edecine",
    username: "Pearson895",
    email: "pearsonfernandez@edecine.com",
    phoneNumber: "(914) 593-3940",
    dateJoined: "2016-05-27",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 33857182,
      bank_name: "UBA"
    },
    personalInformation: {
      fullname: "Long Simpson",
      bvn: 88482148724,
      gender: "Male",
      marital_status: "Married",
      children: 4,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Employed",
      sector_of_employment: "Technology",
      duration_of_employment: "9 years",
      monthly_income: 130129,
      loan_repayment: 4625,
      office_email: "mara.miles@freakin.com"
    },
    social: {
      facebook: "mcdonald.puckett",
      instagram: "olson_rasmussen",
      twitter: "sonya91"
    },
    guarantor: {
      full_name: "Guy David",
      phone: 2347191891048,
      email: "guydavid@freakin.com",
      relationship: "Friend"
    }
  },
  {
    id: 465,
    organization: "Zorromop",
    username: "Silva817",
    email: "silvadavid@zorromop.com",
    phoneNumber: "(965) 481-3470",
    dateJoined: "2014-07-07",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 11023094,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Yates Carney",
      bvn: 43609286461,
      gender: "Female",
      marital_status: "Single",
      children: 3,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Unemployed",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "35 years",
      monthly_income: 100999,
      loan_repayment: 3839,
      office_email: "kirkland.bray@ecraze.com"
    },
    social: {
      facebook: "vaughan.moreno",
      instagram: "mack_stafford",
      twitter: "yesenia99"
    },
    guarantor: {
      full_name: "Mejia Sargent",
      phone: 2347644810014,
      email: "mejiasargent@ecraze.com",
      relationship: "Family"
    }
  },
  {
    id: 466,
    organization: "Comstar",
    username: "Consuelo122",
    email: "consuelosargent@comstar.com",
    phoneNumber: "(842) 425-2833",
    dateJoined: "2018-02-02",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 137729003,
      bank_name: "Wema Bank"
    },
    personalInformation: {
      fullname: "Whitaker Leach",
      bvn: 46572317122,
      gender: "Female",
      marital_status: "Widowed",
      children: 0,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Unemployed",
      sector_of_employment: "Construction",
      duration_of_employment: "4 years",
      monthly_income: 451535,
      loan_repayment: 4246,
      office_email: "abbott.hays@elentrix.com"
    },
    social: {
      facebook: "adams.griffin",
      instagram: "molly_lott",
      twitter: "lang92"
    },
    guarantor: {
      full_name: "Kristen Ford",
      phone: 2348506753305,
      email: "kristenford@elentrix.com",
      relationship: "Partner"
    }
  },
  {
    id: 467,
    organization: "Dogspa",
    username: "Rosales879",
    email: "rosalesford@dogspa.com",
    phoneNumber: "(951) 440-2901",
    dateJoined: "2020-11-03",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 175934177,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Stark Welch",
      bvn: 85158918119,
      gender: "Male",
      marital_status: "Widowed",
      children: 5,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Student",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "36 years",
      monthly_income: 446468,
      loan_repayment: 1976,
      office_email: "yvette.clay@zentility.com"
    },
    social: {
      facebook: "hart.navarro",
      instagram: "lina_gonzales",
      twitter: "puckett47"
    },
    guarantor: {
      full_name: "Raymond Salinas",
      phone: 2348615302733,
      email: "raymondsalinas@zentility.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 468,
    organization: "Sensate",
    username: "Jocelyn392",
    email: "jocelynsalinas@sensate.com",
    phoneNumber: "(987) 415-2059",
    dateJoined: "2023-08-05",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 115984897,
      bank_name: "Wema Bank"
    },
    personalInformation: {
      fullname: "Nell Shaw",
      bvn: 60483629619,
      gender: "Male",
      marital_status: "Married",
      children: 1,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Unemployed",
      sector_of_employment: "Agriculture",
      duration_of_employment: "24 years",
      monthly_income: 141144,
      loan_repayment: 4384,
      office_email: "dorthy.weeks@shadease.com"
    },
    social: {
      facebook: "robert.simmons",
      instagram: "dorothea_barber",
      twitter: "bennett21"
    },
    guarantor: {
      full_name: "Irma May",
      phone: 2347515701977,
      email: "irmamay@shadease.com",
      relationship: "Friend"
    }
  },
  {
    id: 469,
    organization: "Pearlessa",
    username: "Hunter571",
    email: "huntermay@pearlessa.com",
    phoneNumber: "(981) 472-2634",
    dateJoined: "2021-05-01",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 356733218,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Barrett Lowe",
      bvn: 78143032435,
      gender: "Female",
      marital_status: "Widowed",
      children: 1,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Student",
      sector_of_employment: "Finance",
      duration_of_employment: "25 years",
      monthly_income: 291552,
      loan_repayment: 1965,
      office_email: "faye.pollard@quarmony.com"
    },
    social: {
      facebook: "maryellen.castro",
      instagram: "rios_beach",
      twitter: "anna41"
    },
    guarantor: {
      full_name: "Rose Coffey",
      phone: 2348945162451,
      email: "rosecoffey@quarmony.com",
      relationship: "Family"
    }
  },
  {
    id: 470,
    organization: "Verbus",
    username: "Georgette165",
    email: "georgettecoffey@verbus.com",
    phoneNumber: "(855) 521-3210",
    dateJoined: "2016-01-14",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 459761213,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Anita Blake",
      bvn: 24488281360,
      gender: "Female",
      marital_status: "Single",
      children: 4,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Retired",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "21 years",
      monthly_income: 80435,
      loan_repayment: 2041,
      office_email: "elsa.little@podunk.com"
    },
    social: {
      facebook: "augusta.mcbride",
      instagram: "candice_hickman",
      twitter: "wooten3"
    },
    guarantor: {
      full_name: "Mcdowell Oliver",
      phone: 2347613735304,
      email: "mcdowelloliver@podunk.com",
      relationship: "Partner"
    }
  },
  {
    id: 471,
    organization: "Eplosion",
    username: "Rice428",
    email: "riceoliver@eplosion.com",
    phoneNumber: "(956) 473-3963",
    dateJoined: "2022-04-16",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 209207037,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Patel Carter",
      bvn: 33302524414,
      gender: "Male",
      marital_status: "Single",
      children: 4,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Unemployed",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "11 years",
      monthly_income: 285429,
      loan_repayment: 3283,
      office_email: "bernard.morton@cytrex.com"
    },
    social: {
      facebook: "massey.white",
      instagram: "noemi_dominguez",
      twitter: "mcguire44"
    },
    guarantor: {
      full_name: "Dolores Park",
      phone: 2348736092149,
      email: "dolorespark@cytrex.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 472,
    organization: "Comverges",
    username: "Nieves194",
    email: "nievespark@comverges.com",
    phoneNumber: "(829) 434-3428",
    dateJoined: "2021-04-07",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 141321021,
      bank_name: "GTBank"
    },
    personalInformation: {
      fullname: "Warren Herman",
      bvn: 79529222702,
      gender: "Male",
      marital_status: "Widowed",
      children: 4,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Self-employed",
      sector_of_employment: "Finance",
      duration_of_employment: "37 years",
      monthly_income: 55455,
      loan_repayment: 4950,
      office_email: "lara.gonzalez@affluex.com"
    },
    social: {
      facebook: "lolita.barton",
      instagram: "miranda_bradley",
      twitter: "brandy51"
    },
    guarantor: {
      full_name: "Kaufman Avila",
      phone: 2348552297671,
      email: "kaufmanavila@affluex.com",
      relationship: "Partner"
    }
  },
  {
    id: 473,
    organization: "Digigen",
    username: "Hardy287",
    email: "hardyavila@digigen.com",
    phoneNumber: "(852) 569-3688",
    dateJoined: "2014-05-03",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 495572444,
      bank_name: "GTBank"
    },
    personalInformation: {
      fullname: "Cain Mcgee",
      bvn: 94258703600,
      gender: "Female",
      marital_status: "Widowed",
      children: 3,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Self-employed",
      sector_of_employment: "Finance",
      duration_of_employment: "38 years",
      monthly_income: 349665,
      loan_repayment: 2127,
      office_email: "patrice.freeman@ozean.com"
    },
    social: {
      facebook: "booth.vang",
      instagram: "kenya_dunlap",
      twitter: "barr52"
    },
    guarantor: {
      full_name: "Maddox Blanchard",
      phone: 2347947326859,
      email: "maddoxblanchard@ozean.com",
      relationship: "Family"
    }
  },
  {
    id: 474,
    organization: "Xylar",
    username: "Acevedo685",
    email: "acevedoblanchard@xylar.com",
    phoneNumber: "(957) 529-2570",
    dateJoined: "2014-02-06",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 438588419,
      bank_name: "Sterling Bank"
    },
    personalInformation: {
      fullname: "Sheryl Bass",
      bvn: 14471688221,
      gender: "Female",
      marital_status: "Married",
      children: 4,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Employed",
      sector_of_employment: "Agriculture",
      duration_of_employment: "15 years",
      monthly_income: 265293,
      loan_repayment: 3414,
      office_email: "mccarty.webster@quilm.com"
    },
    social: {
      facebook: "hall.grant",
      instagram: "harvey_koch",
      twitter: "morrow28"
    },
    guarantor: {
      full_name: "Gates Christian",
      phone: 2347042755406,
      email: "gateschristian@quilm.com",
      relationship: "Friend"
    }
  },
  {
    id: 475,
    organization: "Glasstep",
    username: "Cleveland662",
    email: "clevelandchristian@glasstep.com",
    phoneNumber: "(947) 566-3663",
    dateJoined: "2017-03-10",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 352498553,
      bank_name: "Sterling Bank"
    },
    personalInformation: {
      fullname: "Beulah Wheeler",
      bvn: 87314712201,
      gender: "Female",
      marital_status: "Widowed",
      children: 5,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Student",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "13 years",
      monthly_income: 374822,
      loan_repayment: 3308,
      office_email: "edna.walters@kindaloo.com"
    },
    social: {
      facebook: "katelyn.hayden",
      instagram: "ford_frank",
      twitter: "hardin55"
    },
    guarantor: {
      full_name: "Franklin Bates",
      phone: 2347481089478,
      email: "franklinbates@kindaloo.com",
      relationship: "Colleague"
    }
  },
  {
    id: 476,
    organization: "Tellifly",
    username: "Marissa640",
    email: "marissabates@tellifly.com",
    phoneNumber: "(812) 588-3971",
    dateJoined: "2019-10-06",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 109013267,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Susanne Logan",
      bvn: 27271921168,
      gender: "Male",
      marital_status: "Divorced",
      children: 2,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Student",
      sector_of_employment: "Government",
      duration_of_employment: "11 years",
      monthly_income: 232285,
      loan_repayment: 2936,
      office_email: "kramer.marquez@quantalia.com"
    },
    social: {
      facebook: "chris.lewis",
      instagram: "tisha_arnold",
      twitter: "carlson64"
    },
    guarantor: {
      full_name: "Payne Mueller",
      phone: 2347775134841,
      email: "paynemueller@quantalia.com",
      relationship: "Family"
    }
  },
  {
    id: 477,
    organization: "Hivedom",
    username: "Stone122",
    email: "stonemueller@hivedom.com",
    phoneNumber: "(878) 525-3138",
    dateJoined: "2016-02-12",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 390839471,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Marks Wynn",
      bvn: 13505640044,
      gender: "Male",
      marital_status: "Single",
      children: 3,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Unemployed",
      sector_of_employment: "Construction",
      duration_of_employment: "13 years",
      monthly_income: 121821,
      loan_repayment: 4014,
      office_email: "williamson.crosby@katakana.com"
    },
    social: {
      facebook: "lindsay.saunders",
      instagram: "lisa_malone",
      twitter: "blackwell92"
    },
    guarantor: {
      full_name: "Alma Bryan",
      phone: 2348886174587,
      email: "almabryan@katakana.com",
      relationship: "Family"
    }
  },
  {
    id: 478,
    organization: "Orbean",
    username: "Turner209",
    email: "turnerbryan@orbean.com",
    phoneNumber: "(809) 550-2776",
    dateJoined: "2015-08-19",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 240040132,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Elisabeth Blackburn",
      bvn: 93484968674,
      gender: "Female",
      marital_status: "Married",
      children: 3,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Unemployed",
      sector_of_employment: "Education",
      duration_of_employment: "33 years",
      monthly_income: 366255,
      loan_repayment: 4821,
      office_email: "mae.tran@dognost.com"
    },
    social: {
      facebook: "villarreal.lara",
      instagram: "deanna_lester",
      twitter: "stafford45"
    },
    guarantor: {
      full_name: "Christie Wolfe",
      phone: 2348534864786,
      email: "christiewolfe@dognost.com",
      relationship: "Partner"
    }
  },
  {
    id: 479,
    organization: "Austex",
    username: "Melanie748",
    email: "melaniewolfe@austex.com",
    phoneNumber: "(957) 424-2364",
    dateJoined: "2021-09-23",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 373568848,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Bass Velazquez",
      bvn: 25968885542,
      gender: "Male",
      marital_status: "Divorced",
      children: 4,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Employed",
      sector_of_employment: "Government",
      duration_of_employment: "29 years",
      monthly_income: 58032,
      loan_repayment: 3283,
      office_email: "dalton.cote@buzzworks.com"
    },
    social: {
      facebook: "powers.irwin",
      instagram: "ruthie_schneider",
      twitter: "parks47"
    },
    guarantor: {
      full_name: "Noreen Daniels",
      phone: 2348491722237,
      email: "noreendaniels@buzzworks.com",
      relationship: "Friend"
    }
  },
  {
    id: 480,
    organization: "Temorak",
    username: "Zimmerman491",
    email: "zimmermandaniels@temorak.com",
    phoneNumber: "(885) 591-2001",
    dateJoined: "2016-08-09",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 481519676,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Alyson Perez",
      bvn: 70785191642,
      gender: "Female",
      marital_status: "Widowed",
      children: 2,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Unemployed",
      sector_of_employment: "Construction",
      duration_of_employment: "36 years",
      monthly_income: 116858,
      loan_repayment: 4592,
      office_email: "meredith.britt@unq.com"
    },
    social: {
      facebook: "sonja.barr",
      instagram: "lawrence_wilcox",
      twitter: "guerrero14"
    },
    guarantor: {
      full_name: "Holloway Bernard",
      phone: 2347948372326,
      email: "hollowaybernard@unq.com",
      relationship: "Colleague"
    }
  },
  {
    id: 481,
    organization: "Condodown",
    username: "Duke197",
    email: "dukebernard@condodown.com",
    phoneNumber: "(938) 554-3799",
    dateJoined: "2016-02-27",
    status: "Inactive",
    bankDetails: {
      tier: 1,
      amount: 407378175,
      bank_name: "First Bank"
    },
    personalInformation: {
      fullname: "Tasha Summers",
      bvn: 43911817440,
      gender: "Female",
      marital_status: "Single",
      children: 0,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Self-employed",
      sector_of_employment: "Healthcare",
      duration_of_employment: "10 years",
      monthly_income: 471160,
      loan_repayment: 3742,
      office_email: "moses.rosa@atgen.com"
    },
    social: {
      facebook: "meagan.chambers",
      instagram: "valarie_condo",
      twitter: "ryan67"
    },
    guarantor: {
      full_name: "Mitzi Conway",
      phone: 2347186377742,
      email: "mitziconway@atgen.com",
      relationship: "Friend"
    }
  },
  {
    id: 482,
    organization: "Electonic",
    username: "Victoria958",
    email: "victoriaconway@electonic.com",
    phoneNumber: "(861) 423-2955",
    dateJoined: "2020-06-07",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 362943743,
      bank_name: "GTBank"
    },
    personalInformation: {
      fullname: "Rosa Schultz",
      bvn: 25724543859,
      gender: "Male",
      marital_status: "Married",
      children: 1,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Student",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "4 years",
      monthly_income: 439724,
      loan_repayment: 1871,
      office_email: "castillo.kramer@comtrail.com"
    },
    social: {
      facebook: "dean.briggs",
      instagram: "hobbs_rivera",
      twitter: "dawn42"
    },
    guarantor: {
      full_name: "Frank Mcclain",
      phone: 2348057667483,
      email: "frankmcclain@comtrail.com",
      relationship: "Colleague"
    }
  },
  {
    id: 483,
    organization: "Kiggle",
    username: "Rena173",
    email: "renamcclain@kiggle.com",
    phoneNumber: "(912) 428-2342",
    dateJoined: "2023-05-16",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 402179067,
      bank_name: "First Bank"
    },
    personalInformation: {
      fullname: "Jacqueline Jacobson",
      bvn: 58636463507,
      gender: "Female",
      marital_status: "Married",
      children: 3,
      residence_type: "Towncondo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Self-employed",
      sector_of_employment: "Education",
      duration_of_employment: "3 years",
      monthly_income: 166542,
      loan_repayment: 2292,
      office_email: "walls.obrien@geekology.com"
    },
    social: {
      facebook: "calderon.cruz",
      instagram: "francesca_blevins",
      twitter: "maryanne69"
    },
    guarantor: {
      full_name: "Mayra Chandler",
      phone: 2349044251948,
      email: "mayrachandler@geekology.com",
      relationship: "Friend"
    }
  },
  {
    id: 484,
    organization: "Combogene",
    username: "Eleanor728",
    email: "eleanorchandler@combogene.com",
    phoneNumber: "(955) 466-3900",
    dateJoined: "2018-11-27",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 361863178,
      bank_name: "GTBank"
    },
    personalInformation: {
      fullname: "Fulton Allen",
      bvn: 78079339310,
      gender: "Female",
      marital_status: "Single",
      children: 1,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Unemployed",
      sector_of_employment: "Education",
      duration_of_employment: "28 years",
      monthly_income: 326524,
      loan_repayment: 3049,
      office_email: "pitts.boone@aquafire.com"
    },
    social: {
      facebook: "jerry.evans",
      instagram: "owens_steele",
      twitter: "brittany99"
    },
    guarantor: {
      full_name: "Jessica Joyner",
      phone: 2347184725189,
      email: "jessicajoyner@aquafire.com",
      relationship: "Friend"
    }
  },
  {
    id: 485,
    organization: "Shopabout",
    username: "Sasha102",
    email: "sashajoyner@shopabout.com",
    phoneNumber: "(947) 471-3051",
    dateJoined: "2022-08-05",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 428816858,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Ana Wells",
      bvn: 20172209004,
      gender: "Female",
      marital_status: "Single",
      children: 1,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Unemployed",
      sector_of_employment: "Education",
      duration_of_employment: "34 years",
      monthly_income: 258846,
      loan_repayment: 4444,
      office_email: "bowen.downs@centuria.com"
    },
    social: {
      facebook: "miller.woods",
      instagram: "winifred_page",
      twitter: "cunningham63"
    },
    guarantor: {
      full_name: "Warner Fleming",
      phone: 2348432031255,
      email: "warnerfleming@centuria.com",
      relationship: "Colleague"
    }
  },
  {
    id: 486,
    organization: "Updat",
    username: "Kaye753",
    email: "kayefleming@updat.com",
    phoneNumber: "(806) 576-2420",
    dateJoined: "2020-11-10",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 478219824,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Sheree Gentry",
      bvn: 46704874470,
      gender: "Male",
      marital_status: "Divorced",
      children: 3,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Employed",
      sector_of_employment: "Construction",
      duration_of_employment: "21 years",
      monthly_income: 371986,
      loan_repayment: 3920,
      office_email: "wilda.wagner@nurali.com"
    },
    social: {
      facebook: "antonia.hinton",
      instagram: "mullen_mcgowan",
      twitter: "erna83"
    },
    guarantor: {
      full_name: "Essie Hatfield",
      phone: 2348927076327,
      email: "essiehatfield@nurali.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 487,
    organization: "Isonus",
    username: "Alberta965",
    email: "albertahatfield@isonus.com",
    phoneNumber: "(809) 506-3843",
    dateJoined: "2016-11-05",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 458186493,
      bank_name: "FCMB"
    },
    personalInformation: {
      fullname: "Sawyer Mann",
      bvn: 10468948602,
      gender: "Female",
      marital_status: "Divorced",
      children: 2,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Employed",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "24 years",
      monthly_income: 76342,
      loan_repayment: 3032,
      office_email: "hull.davis@pharmacon.com"
    },
    social: {
      facebook: "chandler.miller",
      instagram: "matilda_chaney",
      twitter: "claudine23"
    },
    guarantor: {
      full_name: "Swanson Guzman",
      phone: 2348762454808,
      email: "swansonguzman@pharmacon.com",
      relationship: "Friend"
    }
  },
  {
    id: 488,
    organization: "Exosis",
    username: "Barbara172",
    email: "barbaraguzman@exosis.com",
    phoneNumber: "(894) 467-3034",
    dateJoined: "2015-10-27",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 43904649,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Casandra Stout",
      bvn: 92243749819,
      gender: "Female",
      marital_status: "Single",
      children: 1,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Employed",
      sector_of_employment: "Retail",
      duration_of_employment: "35 years",
      monthly_income: 487882,
      loan_repayment: 4792,
      office_email: "phoebe.ross@zolarity.com"
    },
    social: {
      facebook: "adriana.ayala",
      instagram: "rhea_mccormick",
      twitter: "fischer64"
    },
    guarantor: {
      full_name: "Donaldson Higgins",
      phone: 2347714997768,
      email: "donaldsonhiggins@zolarity.com",
      relationship: "Partner"
    }
  },
  {
    id: 489,
    organization: "Xsports",
    username: "Brooke810",
    email: "brookehiggins@xsports.com",
    phoneNumber: "(862) 445-3548",
    dateJoined: "2016-01-27",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 257539385,
      bank_name: "Sterling Bank"
    },
    personalInformation: {
      fullname: "Lynch Ballard",
      bvn: 15613360549,
      gender: "Male",
      marital_status: "Married",
      children: 1,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Unemployed",
      sector_of_employment: "Government",
      duration_of_employment: "3 years",
      monthly_income: 337877,
      loan_repayment: 4577,
      office_email: "cochran.ball@optique.com"
    },
    social: {
      facebook: "chaney.villarreal",
      instagram: "andrews_walls",
      twitter: "lynne17"
    },
    guarantor: {
      full_name: "Hollie Prince",
      phone: 2347325036935,
      email: "hollieprince@optique.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 490,
    organization: "Injoy",
    username: "Wallace698",
    email: "wallaceprince@injoy.com",
    phoneNumber: "(818) 593-2577",
    dateJoined: "2018-10-10",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 260707475,
      bank_name: "UBA"
    },
    personalInformation: {
      fullname: "Autumn Graham",
      bvn: 72503179292,
      gender: "Female",
      marital_status: "Single",
      children: 3,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Self-employed",
      sector_of_employment: "Agriculture",
      duration_of_employment: "31 years",
      monthly_income: 227747,
      loan_repayment: 3695,
      office_email: "poole.scott@squish.com"
    },
    social: {
      facebook: "delaney.rush",
      instagram: "shields_calderon",
      twitter: "shepard72"
    },
    guarantor: {
      full_name: "Loretta Garza",
      phone: 2348824061785,
      email: "lorettagarza@squish.com",
      relationship: "Colleague"
    }
  },
  {
    id: 491,
    organization: "Earthplex",
    username: "Ballard449",
    email: "ballardgarza@earthplex.com",
    phoneNumber: "(962) 491-2302",
    dateJoined: "2017-02-05",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 378171108,
      bank_name: "Wema Bank"
    },
    personalInformation: {
      fullname: "Moreno Mullins",
      bvn: 56140235998,
      gender: "Male",
      marital_status: "Widowed",
      children: 5,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Student",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "36 years",
      monthly_income: 82979,
      loan_repayment: 3718,
      office_email: "byers.humphrey@oronoko.com"
    },
    social: {
      facebook: "amalia.huber",
      instagram: "ethel_meyers",
      twitter: "potts53"
    },
    guarantor: {
      full_name: "Pratt Alvarado",
      phone: 2347033409598,
      email: "prattalvarado@oronoko.com",
      relationship: "Friend"
    }
  },
  {
    id: 492,
    organization: "Elpro",
    username: "Leonard524",
    email: "leonardalvarado@elpro.com",
    phoneNumber: "(877) 530-2717",
    dateJoined: "2019-01-28",
    status: "Blacklisted",
    bankDetails: {
      tier: 1,
      amount: 316120424,
      bank_name: "Sterling Bank"
    },
    personalInformation: {
      fullname: "Gladys Morris",
      bvn: 28659796775,
      gender: "Male",
      marital_status: "Widowed",
      children: 0,
      residence_type: "Apartment"
    },
    educationAndEmployment: {
      level_of_education: "High School",
      employment_status: "Student",
      sector_of_employment: "Government",
      duration_of_employment: "20 years",
      monthly_income: 348088,
      loan_repayment: 4875,
      office_email: "marisol.patrick@earthpure.com"
    },
    social: {
      facebook: "noble.dale",
      instagram: "lopez_stevens",
      twitter: "berger77"
    },
    guarantor: {
      full_name: "Clarke Talley",
      phone: 2348189983815,
      email: "clarketalley@earthpure.com",
      relationship: "Family"
    }
  },
  {
    id: 493,
    organization: "Marqet",
    username: "Jeanne149",
    email: "jeannetalley@marqet.com",
    phoneNumber: "(894) 577-3193",
    dateJoined: "2021-11-24",
    status: "Blacklisted",
    bankDetails: {
      tier: 5,
      amount: 309918933,
      bank_name: "Zenith Bank"
    },
    personalInformation: {
      fullname: "Stacie Tanner",
      bvn: 60111205744,
      gender: "Female",
      marital_status: "Divorced",
      children: 3,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Student",
      sector_of_employment: "Finance",
      duration_of_employment: "11 years",
      monthly_income: 431258,
      loan_repayment: 2515,
      office_email: "herrera.cooke@cyclonica.com"
    },
    social: {
      facebook: "humphrey.foreman",
      instagram: "ida_sparks",
      twitter: "celina87"
    },
    guarantor: {
      full_name: "Jody Hahn",
      phone: 2348554582605,
      email: "jodyhahn@cyclonica.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 494,
    organization: "Koffee",
    username: "Bond594",
    email: "bondhahn@koffee.com",
    phoneNumber: "(808) 541-3790",
    dateJoined: "2015-06-02",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 443781140,
      bank_name: "First Bank"
    },
    personalInformation: {
      fullname: "Rocha Raymond",
      bvn: 74156004956,
      gender: "Male",
      marital_status: "Married",
      children: 2,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Student",
      sector_of_employment: "Technology",
      duration_of_employment: "17 years",
      monthly_income: 171992,
      loan_repayment: 3033,
      office_email: "jennifer.mcdonald@datagen.com"
    },
    social: {
      facebook: "ada.peters",
      instagram: "curry_barry",
      twitter: "goff64"
    },
    guarantor: {
      full_name: "Roberson Harper",
      phone: 2347902630490,
      email: "robersonharper@datagen.com",
      relationship: "Colleague"
    }
  },
  {
    id: 495,
    organization: "Prosure",
    username: "Mcbride768",
    email: "mcbrideharper@prosure.com",
    phoneNumber: "(941) 567-2330",
    dateJoined: "2015-04-12",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 242166013,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Adele Morrow",
      bvn: 66209652812,
      gender: "Female",
      marital_status: "Divorced",
      children: 0,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Student",
      sector_of_employment: "Education",
      duration_of_employment: "4 years",
      monthly_income: 238516,
      loan_repayment: 2902,
      office_email: "waller.pena@bluegrain.com"
    },
    social: {
      facebook: "pierce.fuller",
      instagram: "margaret_adams",
      twitter: "england88"
    },
    guarantor: {
      full_name: "Melody Sherman",
      phone: 2348326591431,
      email: "melodysherman@bluegrain.com",
      relationship: "Partner"
    }
  },
  {
    id: 496,
    organization: "Plutorque",
    username: "Gilda250",
    email: "gildasherman@plutorque.com",
    phoneNumber: "(863) 467-2022",
    dateJoined: "2024-03-31",
    status: "Active",
    bankDetails: {
      tier: 5,
      amount: 394327161,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Lenore Herring",
      bvn: 63902008223,
      gender: "Female",
      marital_status: "Divorced",
      children: 3,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Self-employed",
      sector_of_employment: "Government",
      duration_of_employment: "38 years",
      monthly_income: 253593,
      loan_repayment: 3074,
      office_email: "jami.french@rotodyne.com"
    },
    social: {
      facebook: "davenport.ortiz",
      instagram: "powell_morin",
      twitter: "stein78"
    },
    guarantor: {
      full_name: "Ivy Hancock",
      phone: 2347885783539,
      email: "ivyhancock@rotodyne.com",
      relationship: "Colleague"
    }
  },
  {
    id: 497,
    organization: "Hyplex",
    username: "Santana979",
    email: "santanahancock@hyplex.com",
    phoneNumber: "(864) 582-3837",
    dateJoined: "2020-11-12",
    status: "Pending",
    bankDetails: {
      tier: 5,
      amount: 173455243,
      bank_name: "Sterling Bank"
    },
    personalInformation: {
      fullname: "Annabelle Fry",
      bvn: 15089748274,
      gender: "Male",
      marital_status: "Widowed",
      children: 3,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Master`s Degree",
      employment_status: "Unemployed",
      sector_of_employment: "Manufacturing",
      duration_of_employment: "36 years",
      monthly_income: 442400,
      loan_repayment: 4765,
      office_email: "jennie.mckee@keeg.com"
    },
    social: {
      facebook: "kristine.alvarez",
      instagram: "ingram_mckenzie",
      twitter: "acosta75"
    },
    guarantor: {
      full_name: "Tracey Rowe",
      phone: 2347695154915,
      email: "traceyrowe@keeg.com",
      relationship: "Family"
    }
  },
  {
    id: 498,
    organization: "Cosmetex",
    username: "Reba108",
    email: "rebarowe@cosmetex.com",
    phoneNumber: "(889) 403-2455",
    dateJoined: "2014-10-22",
    status: "Active",
    bankDetails: {
      tier: 1,
      amount: 149704111,
      bank_name: "Ecobank"
    },
    personalInformation: {
      fullname: "Kristie Gould",
      bvn: 24076533054,
      gender: "Male",
      marital_status: "Widowed",
      children: 4,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Ph.D",
      employment_status: "Self-employed",
      sector_of_employment: "Retail",
      duration_of_employment: "30 years",
      monthly_income: 339593,
      loan_repayment: 4925,
      office_email: "richmond.england@snowpoke.com"
    },
    social: {
      facebook: "avila.bird",
      instagram: "loraine_holmes",
      twitter: "roxanne57"
    },
    guarantor: {
      full_name: "Lelia Bolton",
      phone: 2347387025061,
      email: "leliabolton@snowpoke.com",
      relationship: "Friend"
    }
  },
  {
    id: 499,
    organization: "Extro",
    username: "Staci422",
    email: "stacibolton@extro.com",
    phoneNumber: "(836) 519-2877",
    dateJoined: "2015-08-31",
    status: "Pending",
    bankDetails: {
      tier: 1,
      amount: 121289523,
      bank_name: "Standard Chartered Bank"
    },
    personalInformation: {
      fullname: "Edith Lloyd",
      bvn: 89013693873,
      gender: "Female",
      marital_status: "Widowed",
      children: 3,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Bachelor`s",
      employment_status: "Self-employed",
      sector_of_employment: "Retail",
      duration_of_employment: "1 years",
      monthly_income: 159776,
      loan_repayment: 3369,
      office_email: "delacruz.heath@parleynet.com"
    },
    social: {
      facebook: "alyssa.riggs",
      instagram: "macdonald_tate",
      twitter: "tammy63"
    },
    guarantor: {
      full_name: "Britt Peterson",
      phone: 2348787086057,
      email: "brittpeterson@parleynet.com",
      relationship: "Neighbor"
    }
  },
  {
    id: 500,
    organization: "Bolax",
    username: "Mccarthy601",
    email: "mccarthypeterson@bolax.com",
    phoneNumber: "(858) 492-3560",
    dateJoined: "2019-11-22",
    status: "Inactive",
    bankDetails: {
      tier: 5,
      amount: 268517916,
      bank_name: "Access Bank"
    },
    personalInformation: {
      fullname: "Briggs Knight",
      bvn: 23490907017,
      gender: "Female",
      marital_status: "Widowed",
      children: 2,
      residence_type: "Condo"
    },
    educationAndEmployment: {
      level_of_education: "Associate Degree",
      employment_status: "Employed",
      sector_of_employment: "Technology",
      duration_of_employment: "36 years",
      monthly_income: 486525,
      loan_repayment: 2548,
      office_email: "sandra.zimmerman@digiprint.com"
    },
    social: {
      facebook: "alston.vaughn",
      instagram: "morgan_beck",
      twitter: "nichole92"
    },
    guarantor: {
      full_name: "Karina Ramos",
      phone: 2347754083179,
      email: "karinaramos@digiprint.com",
      relationship: "Partner"
    }
  }
]
  export default users