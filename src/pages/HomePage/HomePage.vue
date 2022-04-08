<template>
  <div class="profile-info">
    <img class="profile-info__avatar" :src="getAvatar"/>
    <info
        category="Name"
        :user="getName"
    />

    <info
        category="Age"
        :user="getAge"
    />
    <info
        ref="cancelEmailChanges"
        category="Email"
        :user="getEmployment"
    />

    <v-btn class="change_beer_button"
           x-large
           color="success"
           dark
           @click="this.getBeer"
    >
      {{setButtonName}}
    </v-btn>

    <div v-show="beer">
      <info
          category="Beer name"
          :user="getNameOfRecomendBeer"
      />
      <info
          category="Alcohol"
          :user="getAlcohol"
      />
      <info
          category="Brand"
          :user="getBrand"
      />
      <info
          category="Hop"
          :user="getHop"
      />
      <info
          category="Malts"
          :user="getMalts"
      />
      <info
          category="Hop"
          :user="getHop"
      />
      <info
          category="Style"
          :user="getStyle"
      />
      <info
          category="Yeast"
          :user="getYeast"
      />
    </div>

  </div>
</template>

<script>
import Info from "@/components/InfoComponent/Info";
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "HomePage",
  components: {
    Info
  },

  computed: {
    ...mapGetters('BeerDrinkerModule', ['beer', 'drinker']),

    getAge() {
      let arr = this.drinker?.date_of_birth.split('-')||[]
      let age = new Date().getFullYear() - arr[0] - 1
      if(new Date().getMonth() >= arr[1] && new Date().getDay() >= arr[2]) {
        age++
      }
      return age
    },

    getAvatar() {
      return this.drinker?.avatar
    },

    getEmployment() {
      return this.drinker?.employment.title
    },

    getName() {
      return `${this.drinker?.first_name} ${this.drinker?.last_name}`
    },

    setButtonName() {
      return this.beer ? 'Dont like this beer? Roll to another one!':'Roll for recommended beer'
    },

    getNameOfRecomendBeer() {
      return this.beer?.name
    },

    getAlcohol() {
      return this.beer?.alcohol;
    },
    getBrand() {
      return this.beer?.brand;
    },
    getHop() {
      return this.beer?.hop;
    },
    getMalts() {
      return this.beer?.malts;
    },
    getStyle() {
      return this.beer?.style;
    },
    getYeast() {
      return this.beer?.yeast;
    }

  },

  methods: {
    ...mapActions("BeerDrinkerModule", ['getBeer','getDrinker']),

  },

  mounted() {
    this.getDrinker()

  }
}
</script>

<style scoped>

.profile-info {
  min-height: 100vh;
  max-width: 700px;
  padding: 25px 80px 10px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
}
.profile-info__avatar {
  border-radius: 50%;
  width: 30vh;
  height: 40vh;
  min-width: 100px;
  min-height: 100px;
}


.change_beer_button{
  margin: 30px 0 10px 0;
  max-width: 450px;
}

</style>
