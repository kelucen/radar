<template>
<div>
    <div style="margin-top:5em">
        <b-form-select v-model="filterSelectedItem" :options="ZoneOptions" class="drop-list"></b-form-select>
        <!-- <b-form-select v-model="sortSelectedItem" :options="SortOptions" style="margin-top:1em" class="drop-list"></b-form-select> -->
    </div>
     <div v-if="filterSelectedItem!=null" style="margin-top: 2em">
        <b-row>
            <b-button @click="setType('CilindroEO2')" class="buttons">Cilindro e O2</b-button>
            <b-button @click="setType('Aparelhos')" class="buttons" >Aparelhos</b-button> </b-row>
        <b-row>
            <b-button @click="setType('Equipamentos')" class="buttons">Equipamentos</b-button>
            <b-button @click="setType('EPI')" class="buttons">EPI</b-button>
        </b-row>
        <b-row>
            <b-button @click="setType('Limpeza')" class="buttons">Limpeza</b-button>
            <b-button @click="setType('Higiene Pessoal')" class="buttons">Higiene Pessoal</b-button>
        </b-row>
    </div>
    <br>
    <br>
    <div  v-for="(item,i) in itemsList" :key="item.name">
        <b-card v-if="show" class="card">
            <h3 style="font-weight:bold">{{item.name}}</h3>
             <b-row>
                <div style="font-weight:bold; margin-left:15px">Descrição:</div>
                <div style="margin-left:2px">{{item.description}}</div>
            </b-row>
            <b-button  class="expand-icon"  v-if="item.icon" @click="changeIconvalue(i,false)">
                <v-icon style="color:white;">expand_more</v-icon>
            </b-button> 
            <div v-else>
                <v-icon class="expand-icon" @click="changeIconvalue(i,true)">expand_less</v-icon>
                <h5 class="title-local">Locais onde se pode encontrar: </h5>
                    <ul v-for="company in companyList" :key="company.price">
                      <li style="font-weight:bold">R$ {{parseFloat(company.price).toFixed(2)}}</li>
                      <b-row>
                          <div style="font-weight:bold; margin-left:15px">{{company.name}},</div>
                          <div style="margin-left:2px">{{company.address}}</div>
                      </b-row>
                      <b-row>
                          <div style="font-weight:bold; margin-left:15px">Telefone:</div>
                          <div style="margin-left:2px">(92) {{company.phone}}</div>
                      </b-row>
                      <div>{{company.instagram}}</div>
                    </ul>
            </div>
        </b-card>
        
    </div>
    <div v-if="!show" class="empty-list">
        Nenhum resultado encontrado
    </div>
    

</div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Equipments',
  data(){
    return{
        filterSelectedItem: null,
        sortSelectedItem: null,
        typeSelected:'',
        itemsList: [],
        show: true, 
        companyList:[],
        listTemp:[],
        ZoneOptions: [
          { value: null, text: 'Filtrar por zonas' },
          { value: 'Zona Norte', text: 'Zona Norte' },
          { value: 'Zona Leste', text: 'Zona Leste' },
          { value: 'Zona Sul', text: 'Zona Sul' },
          { value: 'Zona Oeste', text: 'Zona Oeste' },
          { value: 'Zona Centro-Sul', text: 'Zona Centro-Sul' },
          { value: 'Zona Centro-Oeste', text: 'Zona Centro-Oeste' }
        ],
        SortOptions:[
          { value: null, text: 'Ordenar por' },
          { value: 'Ordem alfabética', text: 'Ordem alfabética' },
        ],
        urlFilter:''
    }
    
 
  },
  methods:{
        showItemsList(){
            if(this.itemsList.length==0){
                this.show = false
                this.listTemp = []
            }
            else{
                this.listTemp  = this.itemsList
                this.itemsList = []
                this.companyList = []
                for(let i in this.listTemp){
                    this.itemsList.push({name: this.listTemp[i].name, icon:true, description:this.listTemp[i].description})
                    for(let j in this.listTemp[i].companies){
                        this.companyList.push({name: this.listTemp[i].companies[j].name, price:this.listTemp[i].companies[j].pivot.price, 
                        address: this.listTemp[i].companies[j].address, phone: this.listTemp[i].companies[j].phone1, instagram:this.listTemp[i].companies[j].instagram})
                    }
                   
                }
                this.show = true
            }
        },
        setType(type){
            this.show = true
            this.typeSelected = type
            this.urlFilter = this.filterSelectedItem ? this.typeSelected + '&zone=' + this.filterSelectedItem : this.typeSelected
            axios.get('https://radar-backend00.herokuapp.com/products?type='+this.urlFilter)
            .then(response => {
                // console.log(response.data)
                this.itemsList = response.data
                this.showItemsList()
            })
        },
        changeIconvalue(id, valeu){
            this.itemsList[id].icon = valeu
        }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import "../assets/Styles/Equipments.css";
</style>
