const app = Vue.createApp({
    data() {
        return {
            data: {
                id: "",
                name: "",
                address: "",
                phone: "",
                email: "",
            },
            allData: [],
            isVisible: false,
        }
    },
    methods: {
        AddNew() {
            this.allData.push(this.data);
            console.log(this.addData);
            this.data = {};
        },
        buttonToggle() {
            this.isVisible = !this.isVisible;
        },
    },
});

app.component("data-info", {
    props: ["data"],
    template: `
    <li>
        <h2> รหัสนักศึกษา : {{ data.id }} ชื่อ-สกุล : {{ data.name }}</h2>
        <button @click="buttonToggle">{{ isVisible ? "ซ่อน" : "ขยาย" }}</button>
        <ul v-if="isVisible">
          <li><strong>ที่อยู่ :</strong> {{ data.address }} </li>
          <li><strong>เบอร์โทร :</strong> {{ data.phone }}</li>
          <li><strong>อีเมลล์ :</strong> {{ data.email }}</li>
        </ul>
      </li>`,
    data() {
        return {
            allData: [],
            isVisible: false,
        };
    },
    methods: {
        AddNew() {
            this.allData.push(this.data);
            console.log(this.addData);
            this.data = {};
        },
        buttonToggle() {
            this.isVisible = !this.isVisible;
        },
    },
});

app.mount('#project-final');