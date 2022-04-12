/* 
    To have the id of the player I use the site:
        https://api.year4000.net/minecraft/𝘶𝘴𝘦𝘳𝘯𝘢𝘮𝘦

    Then I display the head of the player with the site :
        https://crafatar.com/avatars/𝘪𝘥

    ?overlay&size=512" corresponds to the overlay setting (to display the 1.8 skin textures) and the render size
*/

document.querySelector("#nameinput").oninput = function(){ /* The '𝘰𝘯𝘪𝘯𝘱𝘶𝘵' event executes JavaScript when the user writes
                                                              something to an input. */

    var request = new XMLHttpRequest();request.onload = function(){/* XMLHttpRequest creation and starting the function */
            var uuid=JSON.parse(request.responseText).id;
            if(typeof(uuid)=="undefined"){uuid="8667ba71-b85a-4004-af54-457a9734eed7";} /* 𝘞𝘩𝘦𝘯 𝘵𝘩𝘦 𝘶𝘴𝘦𝘳 𝘩𝘢𝘴𝘯'𝘵 𝘱𝘶𝘵 𝘶𝘶𝘪𝘥 */
            document.getElementById("head").src="https://crafatar.com/avatars/"+uuid+"?overlay&size=512";
            document.getElementById("iconID").href="https://crafatar.com/avatars/"+uuid+"?overlay&size=512";};
      
    request.open("GET","https://api.year4000.net/minecraft/"+document.querySelector("#nameinput").value,true);
    request.send();}