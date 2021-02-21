const app = {
    data() {
        return {
            show: { icon: true },
            input: '',
            select_image: false,
            garellys: [{
                src: 'images/001.jpg',
                title: 'อเมริกัน ช็อตแฮร์',
                detail: 'อเมริกัน ช็อตแฮร์ มีสิ่งที่โดดเด่นที่สุดนั่นก็คือ สีเงินที่มีรอยแต้มสีดำ คล้ายลายหินอ่อน เป็นอีกหนึ่งสายพันธุ์ที่ได้รับความนิยมมากที่สุด',
                favor: false,
                like: 0,
                zoom: false
            },
            {
                src: 'images/002.jpg',
                title: 'บริติช ชอร์ตแฮร์',
                detail: 'บริติช ชอร์ตแฮร์ มีความโดดเด่นในเรื่องลักษณะรูปร่างและความสามารถทางการล่าเหยื่อ ในอดีตถือว่าเป็นแมวสายพันธุ์ที่หาได้ยาก',
                favor: false,
                like: 0,
                zoom: false
            },
            {
                src: 'images/003.jpg',
                title: 'ม็อกกี้',
                detail: 'แมว “ม็อกกี้”  แต่แมวม็อกซี่นั้นจะไม่มีนิสัยเฉพาะตัวเช่นนั้น และด้วยการที่พวกมันเกิดจากการผสมพันธุ์แบบตามมีตามเกิด พวกมันจึงไม่มีรูปร่างหน้าตาหรืออุปนิสัยที่ชัดเจน',
                favor: false,
                like: 0,
                zoom: false
            }

            ],


        }
    },

    methods: {
        favorite(index) {
            this.garellys[index].favor = !this.garellys[index].favor
            this.garellys[index].like = !this.garellys[index].like 
        },
        toggle(){
            this.show.icon = !this.show.icon
            this.show.searchbar = !this.show.searchbar
            this.input = ''
        },
        zoomPhoto(index){
            for (let i = 0; i < this.garellys.length; i++) {
                if(i == index){
                    this.garellys[i].zoom = true;
                    console.log('select :' + index);
                } else {
                    this.garellys[i].zoom = false;
                }
            }
            this.select_image = true
        },
        closePhoto(){
            this.select_image = false
        },
        

    },

    computed: {
        searchphotos(){
                return this.garellys.filter(c => {
                    return c.title.toLowerCase().includes(this.input.toLowerCase())
                })
            
        },

        countLike() {
            return this.garellys.filter(t => t.like).length
        },

        searchSelectPhoto(){
            return this.garellys.filter(c => c.zoom)
        }
    }   

 

}
mountedApp = Vue.createApp(app).mount('#app')