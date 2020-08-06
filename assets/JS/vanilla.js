
let _all_Images = document.querySelectorAll("img");

for(let _index = _all_Images.length - 1; _index != -1; _index--)
{

    _all_Images[_index].setAttribute("draggable", "false");

}

// Bubble animation.

const _home = document.querySelector("#_home");
let _random_Number;
let _delay;

for(let _bubble_Quantity = 18; _bubble_Quantity != 0; _bubble_Quantity--)
{

    let individual_Bubble = document.createElement("div");
    individual_Bubble.setAttribute("class", "_bubble_Style");

    _random_Number = Math.floor(Math.random() * 3 + 1);
    _delay = Math.floor(Math.random() * 12 + 1)

    if(_random_Number == 1)
    {

        individual_Bubble.style.backgroundColor = "#ff8903";
        individual_Bubble.style.animationDelay = `${_delay}s`;

    }
    else if(_random_Number == 2)
    {

        individual_Bubble.style.backgroundColor = "#03da15";
        individual_Bubble.style.animationDelay = `${_delay}s`;

    }
    else
    {

        individual_Bubble.style.backgroundColor = "#fff";
        individual_Bubble.style.animationDelay = `${_delay}s`;

    }

    _home.append(individual_Bubble);

}

// Slider

let _slider_Container = document.querySelector("._slider_Container");
  
// add listener to disable scroll

_slider_Container.addEventListener('scroll', function()
{
    
    _slider_Container.scrollTo(0, 0);

});

// GitHub REST API calling.

let _request = new XMLHttpRequest();
let _my_Projects = document.querySelector("#_my_Projects");
let _organize;
let _image_Source = [
    
                        "https://raw.githubusercontent.com/Anirban-Gorain/A-NEW-LEVEL-MANAGEMENT-PROJECT-IN--C-/master/_screenshots/_tabular_Image.png",

                        "https://raw.githubusercontent.com/Anirban-Gorain/ALL-IN-ONE-BINARY-CALCULATOR/master/_Screenshort.png",

                        "https://raw.githubusercontent.com/Anirban-Gorain/Case-conversion-C-/master/Screenshot%20(66).png",

                        "https://raw.githubusercontent.com/Anirban-Gorain/Calculator-Like-Windows-10/master/Assets/Images/_screenshort.png",

                        "https://www.researchgate.net/profile/Felice_Corona/publication/285384722/figure/fig1/AS:614031324884992@1523407884056/Lowercase-and-uppercase-letters-of-DFONT.png", // Case 

                        "https://raw.githubusercontent.com/Anirban-Gorain/Chicken-Candy-Game/master/Screenshot.png",

                        "https://i.stack.imgur.com/oy2Q3.png",

                        "https://raw.githubusercontent.com/Anirban-Gorain/Flappy-aeroplane-game/master/Assets/_Images/_slider_Image_4.png",

                        "https://raw.githubusercontent.com/Anirban-Gorain/FOOD-BANNER/master/FOOD%20BANNER.jpg",

                        "https://raw.githubusercontent.com/Anirban-Gorain/Four-Wheeler-Game/master/_show.png",

                        "https://www.geeksforgeeks.org/wp-content/uploads/program-to-check-if-a-number-is-palindrome-768x384.png", // Panil

                        "https://raw.githubusercontent.com/Anirban-Gorain/T-shit-Banner/master/T%20SHIRT.1.jpg",

                        "https://raw.githubusercontent.com/Anirban-Gorain/TIC-TAC-TOE-In-C-launage-with-Two-player-and-One-player-functionality./master/_screen_Shot.png",

                        "https://raw.githubusercontent.com/Anirban-Gorain/Watch_Banner/master/WATCH%20BANNNER%20jpg.jpg",

                    ];
let _image_Index = 0;

_request.open('GET', 'https://api.github.com/users/Anirban-Gorain/repos', true);

_request.onload = function ()
{
  

    let _fetched = JSON.parse(this.response);

    for (let _extracted_Data in _fetched)
    {
        // console.log(_fetched[_extracted_Data].created_at.split("T")[0], _fetched);

        if(_fetched[_extracted_Data].id != 285602063 && _fetched[_extracted_Data].id != 281961555)
        {

            _organize = 

            `
                <div class="_project_Card">

                <img src="${_image_Source[_image_Index]}" alt="Server error" srcset="" class="_test">

                <div class="_metadata">

                    <h1>${_fetched[_extracted_Data].name}</h1>

                    <h4 class="_project_Data">

                        

                        <span><b>DATE</b> ${_fetched[_extracted_Data].created_at.split("T")[0]}, </span>
                        <span>ID ${_fetched[_extracted_Data].id}, </span>
                        <span>TECHNOLOGY ${(_fetched[_extracted_Data].language == null) ? "Technology not available": _fetched[_extracted_Data].language}</span>
                
                    </h4>

                    <h4 class="_description">
                        <span>${(_fetched[_extracted_Data].description == null) ? "Description not available" : _fetched[_extracted_Data].description}</span>
                    </h4>

                    <a href="${_fetched[_extracted_Data].html_url}" class="_button" target="_blank">GitHub</a>
                
                </div>

                </div>

            `
            
            _my_Projects.insertAdjacentHTML('beforeend', _organize);
            _image_Index++;

        }

       
    }
  
}

_request.send();

// Scroll animation.

// Scroll animation

let _scroll_Value;
let _levels = document.querySelectorAll("._level");
let _levels_Values = [60, 30, 12, 80, 50, 45, 80, 15, 70, 90, 95];
let _stop_The_Event = true;

window.addEventListener("scroll" ,function (_event)
{ 

    if(_stop_The_Event == true)
    {

        _scroll_Value = this.scrollY;
        
        if(_scroll_Value > 2700)
        {

            for (let _index = 0; _index < _levels_Values.length; _index++)
            {
                
                // Updating the height

                _levels[_index].style.width = `${_levels_Values[_index]}%`;

                _stop_The_Event = false;
                
            }

        setTimeout(() =>
        {

            for(let _index = 0; _index < _levels_Values.length; _index++)
            {

                document.querySelectorAll("#_skills ._progress_Bar ._level span")[_index].style.color = "black";
                document.querySelectorAll("#_skills ._progress_Bar ._level span")[_index].style.paddingLeft = "5px";

                document.querySelectorAll("#_skills ._progress_Bar ._level span")[_index].innerHTML += ` (${_levels_Values[_index]}%)`;

            }
            
        }, 1000);

        }

    }
    
});