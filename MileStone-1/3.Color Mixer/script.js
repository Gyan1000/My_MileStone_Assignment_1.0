let result=document.getElementById("result");

let first_color=prompt("Enter first Color name").toLowerCase();
let second_color=prompt("Enter second Color name").toLowerCase();
let color_mixer; 
switch(first_color)
{
    case "red":
        switch(second_color)
        {
            case "blue":
                color_mixer="purple"
                break;
             case "yellow":
                color_mixer="orange";
                break;   
              default:
                color_mixer="Invalid_color_combination";
                break;  
        }
        break;
        case "blue":
            switch(second_color)
            {
                case "red":
                color_mixer="purple";
                break;
                case "yellow":
                    color_mixer="green";
                    break;
                default:
                    color_mixer="Invalid_color_combination";
                    break;    
            }
            break;
          case "yellow":
            switch(second_color)
            {
              case "red":
                color_mixer="orange";
                break;
               case "blue":
                color_mixer="green";
                break;
                default:
                    color_mixer="Invalid_color_combination";
                break; 
            }
            break;
            default:
              color_mixer="Invalid_color_combination";
            break;  
}

     console.log("out_Put: ",color_mixer);

   if(color_mixer!="Invalid_color_combination")
     result.innerHTML=`Result: <span style="color:${color_mixer}">${color_mixer.toLocaleUpperCase()}</span>`;
    else
     result.innerHTML=`Result: <span style="color:red">${color_mixer}</span>`;