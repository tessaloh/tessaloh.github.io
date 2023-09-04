<template>
    <div>
        <h1>Directives</h1>
        <hr/>
        <div class="white">
            <h3>v-text</h3>
            <span v-text="title" placeholder="v-text directive"></span>
        </div>
        <hr/>
        <div class="black">
            <h3>v-html</h3>
            <div v-html="html"></div>
        </div>
        <hr/>
        <div class="white">
            <h3>v-show / age:{{age}}</h3>
            <div v-show="age >= 18">You are an adult</div>
            <div v-show="age < 18">You aren't an adult</div>
            <button @click="addAge()">Add</button>
        </div>
        <hr/>
        <div class="black">
            <h3>v-if v-else-if v-else / age:{{age}}</h3>
            <div v-if="age >= 18">You aren an adult</div>
            <div v-else-if="age > 14 && age < 18">You aren a tenager</div>
            <div v-else>You are a child</div>
            <button @click="decrease()">Dis</button>            
        </div>
        <hr/>
        <div class="white">
            <h3>v-for users{{users.length}}</h3>
            <ul>
                <li v-for="(user, index) in users" :key="index">User {{user}} - {{index}}</li>
            </ul>
        </div>            
        <hr/>
        <div v-on:click="click" class="black">v-on / Clicks {{clicks}}</div>
        <div @dblclick="dbclick" class="white">v-on / Clicks {{clicks}}</div>
        <hr/>
        <div v-bind:url="url" class="black">
            <h3>v-bind / :src / v-bind:src</h3>
            <img :src="url" alt="test"/>
        </div>
        <hr/>
    </div>
</template>

<script>
export default {
    data: () => ({
        title: 'Hi from VUE',
        html: '<h4>h4 from directive</h4>',
        age: 16,
        users: ['First', 'Second', 'Third'],
        clicks: 1,
        url: 'https://cdn.svgporn.com/logos/vue.svg'
    }),
    methods: {
        addAge() {
            this.age++;
            this.users.push(`User-${this.age}`);
        },
        decrease() {
            this.age--;
            this.users.pop();
        },
        click() {
            this.clicks++;
        },
        dbclick() {
            this.clicks +=2;
        }
    }
}
</script>

<style scoped>
    div {
        text-align: center;
        margin: 0px 2rem;
    }

    .counter {
        background: rgb(23, 19, 74);
        border: 1px solid snow;
        color: snow;
        font-weight: bold;
        height: 60px;
        font-size: 1.5rem;
    }
    .black {
        background: rgb(23, 19, 74);
        border: 2px solid snow;
        color: snow;
        font-size: 1.5rem;
        font-weight: bold;
    }
    .white {
        background: snow;
        border: 2px solid rgb(23, 19, 74);;
        color:  rgb(23, 19, 74);
        font-size: 1.5rem;
        font-weight: bold;
    }
</style>