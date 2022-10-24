import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

export const Welcome =() => {


    const [data,setData]=useState([]);
    const [filteredData,setFilteredData]=useState([]);

    useEffect(()=>{

    fetchData("https://randomuser.me/api/?results=5");
    },[]);


    const  fetchData =async(url) =>{
 
        try{
            const response=await fetch(url);
            const json = await response.json();
            setData(json.results);
            setFilteredData(json.results);
            console.log(json.results);
        }
        catch(error){
            console.error(error);
        }
        
        return (
                <View>
 <Text style={{ color: 'red', fontWeight: 'bold' }}>Stop</Text>
                </View>

        );
    }
};



