var url = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';
 
// To Search the Item ----- 1.
   let searchValue = document.querySelector('#search-box');

           searchValue.addEventListener("input", (e) =>{
                e.preventDefault();
                let searchItem = e.target.value.toLowerCase();
                let id_items = document.querySelectorAll('tbody tr');

                id_items.forEach(function(item){
                    if(item.textContent.toLowerCase().indexOf(searchItem) != -1){
                        item.style.display = "";
                    } else{
                        item.style.display = "none";
                    }

                })
     
            });
           


// To Search the Item ----- 2.
// let searchValue = document.querySelector('#search-box');

//             searchValue.addEventListener("keyup", function(e){
//                 let searchItem = e.target.value.toLowerCase();
//                 let id_items = document.querySelectorAll('tbody tr');

//                 id_items.forEach(function(item){
//                     if(item.textContent.toLowerCase().indexOf(searchItem) != -1){
//                         item.closest('tr').style.display = "";
//                     } else{
//                         item.closest('tr').style.display = "none";
//                     }

//                 })
     
//             });


// To Display the content of clicked row 
 function row(index) {
    document.getElementById('info-content').style.display = "block";
    let table = document.getElementsByClassName("data-row");
    document.querySelector('.fname').innerHTML  = table[index].getElementsByTagName("td")[1].innerText;
    
    document.getElementById('address').innerHTML  = table[index].getElementsByTagName("td")[0].innerText
    document.getElementById('city').innerHTML  = table[index].getElementsByTagName("td")[1].innerText
    document.getElementById('state').innerHTML  = table[index].getElementsByTagName("td")[2].innerText
    document.getElementById('Zip').innerHTML  = table[index].getElementsByTagName("td")[3].innerText
 }