
         let para=document.querySelector("p");
         
         //split the paragraph by space character(" ") using split method
          let words=para.innerHTML.split(" ");
        
         //  empty the <p> tag content
           para.innerHTML=" ";
        
            words.forEach((word)=>{

            para.innerHTML+=word.length>8 ? `<span class="special">${word+" "}</span>` :word+" ";
            
        })
  