//ایجاد منوی افقی بالای صفحه
// time: 15m + 15m |30m

var topMenu = [
    {
        title: "املاک",
        icon: "home.gif",
        link: "/",
        children: [
            {
                title: "فروش مسکونی",
                icon: "",
                link: "/",
                children: [
                    {
                        title: "آپارتمان",
                        icon: "",
                        link: "/",
                        children: []
                    },
                    {
                        title: "خانه و و یلا",
                        icon: "",
                        link: "/",
                        children: []
                    },
                    {
                        title: "زمین و کلنگی",
                        icon: "",
                        link: "/",
                        children: []
                    }
                ]
            },
            {
                title: "اجاره اداری و تجاری",
                icon: "",
                link: "/",
                children: [
                    {
                        title: "دفتر کار، اتاق اداری و مطب",
                        icon: "",
                        link: "/",
                        children: []
                    },
                    {
                        title: "مغازه و غرفه",
                        icon: "",
                        link: "/",
                        children: []
                    },
                    {
                        title: "صنعتی، کشاورزی و تجاری",
                        icon: "",
                        link: "/",
                        children: []
                    }
                ]
            }
        ]
    }
]




// ایجاد منوی عمودی سمت راست صفحه
// time: 10m + 5m |45m

var sideMenu = [
    {
        title: "املاک",
        icon: "1.jpg",
        link: "/"
    },
    {
        title: "وسایل نقلیه",
        icon: "2.jpg",
        link: "/"
    },
    {
        title: "کالای دیجیتال",
        icon: "3.jpg",
        link: "/"
    },
    {
        title: "خانه و آشپزخانه",
        icon: "4.jpg",
        link: "/"
    }
]




// بخش کارت محصولات
// time: 10m + 5m | 60m

var products = [
    {
        image: "01.jpg",
        title:"لباس مجلسی زنانه سایز 40 تا 44",
        state: 0,
        price: 60000,
        location: "بلوارتوس"
    },
    {
        image: "02.jpg",
        title:"موتور شباب مدل 97",
        state: 1,
        price: 4500000,
        location: "کشاورز"
    },
    {
        image: "03.jpg",
        title:"مایکروفر در حد نو هوگل",
        state: 0,
        price: 3500000,
        location: "بلوارتوس"
    }
]

