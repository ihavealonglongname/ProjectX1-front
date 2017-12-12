/// <reference path="./../../../node_modules/@types/jquery/index.d.ts" />

import { sayHello } from "./greet";

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = sayHello(name);
    $("#test").text("0000000000");
    console.log("00000000000000");

    $(".list-group-item").on('click',function(){
        console.log($(this).text());
    });
    // $(".list-group-item").each(function(){
    //     alert( $(this).text());
    // });

    $("#cal").on('click',function(){
        console.log("1234567e89");
    });

    $("#h").on('click',function(){
        console.log("11111111111");
    });
    
    $("#s").on('click',function(){
        console.log($(this).text());
    });
    
    $("#d").on('click',function(){
        console.log($(this).text());
    });
    
    $("#m").on('click',function(){
        console.log($(this).text());
    });
}

showHello("greeting", "TypeScripts");
