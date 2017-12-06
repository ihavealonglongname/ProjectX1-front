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
}

showHello("greeting", "TypeScripts");