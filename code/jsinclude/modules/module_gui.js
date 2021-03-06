/*
<Prana-deutschland. The platform for the homeless>
    Copyright (C) <2016-2017>  <Oscar Arjun Singh Tark, Catie Carson, Nicholas Alexander Kearney, Jeremy Leresteux, Emilie Caron, Robinson Choe and all underlying members of Prana-deutschland>
    <Original programmers: Oscar Arjun Singh Tark, Robinson Choe, Nicholas Alexander Kearney, Jeremy Leresteux>

    Visitable link: www.prana-deutschland.de , for any inquiries contact at contact@prana-deutschland.de

    This file is part of Prana-deutschland.

    Prana-deutschland is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Prana-deutschland is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Prana-deutschland.  If not, see <http://www.gnu.org/licenses/>.
*/

//NEW-->
function bread_crumbs(crumb)
{
    if(crumb == "back")
    {
        //delete last..
    }
    breadcrumbs.push(crumb);
    return;
}

function popup(class_)
{
    if(system["popup"])
    {
        set_hidden("popup", "hidden");
        return;
    }
    set_hidden("popup", "visible");
    return;
}

function clear_sideban()
{
    clear_inner_HTML("side_banner_menu");   
}

function add_sideban_button(text, image_path, id)
{
    set_addition_inner_HTML("side_banner_menu", "<button class='side_ban_button' id='nav_button_"+id+"'><img class='button_img' src='"+get_image_path(image_path)+"'><div class='button_label_div'><label class='button_label'>"+text+"</label></div></button>");
    return;
}

function get_image_path(image_path)
{
    if(!image_path)
    {
        return images["DEF"];
    }
    return images[image_path];
}

function gui_back()
{
		nav.go_back();
		return;
}

function gui_forward()
{
		nav.go_forward();
		return;
}

function render_content(title, paragraph, image, map_type)
{
    set_innerhtml("dash", "<div class='rendered_content'><input id='back_button' onclick='javascript: gui_back();' type='button' value='&#8617 Go back'/><br><hr><br><label class='title'>"+title+"</label><br><br>"+paragraph+"</div>");
    return;
}

//OLD -->
//STARTS PRANA-DEUTSCHLAND.DE --> THIS IS THE ENTRY POINT OF THE WEBSITE.
function start()
{
    set_local("location", "home");
    set_local("lang", "0");
    document.location = "./pages"+def_locations[6]+'?lang=0';
    return;
}

function set_location(Location_string)
{
    set_local("location", Location_string);
}

function eval_build_url(Type__, area_index_, use_special_character, direct_url, id)
{
    var link = "";
    if(!direct_url)
    {
        link = def_locations[4] + '?';
    }
    if(Type__ === "housing")
    {
        link = link + 'home_type=' + Type__ + '&area=' + area_index_ + '&paid_type=' + get_local("paid_type") + '&lang=' + get_local("lang") + '&organization=' + get_local("organization") + "&vt=" + get_local("vt")+ "&va=" + get_local("va") + "&to=" + get_local("to") + "&tc=" + get_local("tc") + "&dy=" + get_local("dy") + "&mo=" + get_local("mo") + '&all=' + get_local("all");
    }
    else if(Type__ === "food")
    {
        link = link + 'home_type=' + Type__ + '&area=' + area_index_ + '&paid_type=' + get_local("paid_type") + '&lang=' + get_local("lang") + '&organization=' + get_local("organization") + "&vt=" + get_local("vt")+ "&va=" + get_local("va") + "&to=" + get_local("to") + "&tc=" + get_local("tc") + "&dy=" + get_local("dy") + "&mo=" + get_local("mo");
    }
    else if(Type__ === "medical")
    {
        link = link + 'home_type=' + Type__ + '&area=' + area_index_ + '&paid_type=' + get_local("paid_type") + '&lang=' + get_local("lang") + '&organization=' + get_local("organization") + "&vt=" + get_local("vt")+ "&va=" + get_local("va") + "&to=" + get_local("to") + "&tc=" + get_local("tc") + "&dy=" + get_local("dy") + "&mo=" + get_local("mo");
    }
    else if(Type__ === "set_unset_bookmark")
    {
        link = link + 'user=' + get_local("uname") + '&session=' + get_local("session") + '&id=' + id + '&lang=' + get_local("lang");
    }
    else if(Type__ === "get_bookmarks_content")
    {
        link = link + 'user=' + get_local("uname") + '&session=' + get_local("session") + '&id=' + id + '&lang=' + get_local("lang") + '&location=' + get_local('location');
    }
    else if(Type__ === "get_bookmark_posting")
    {
        link = link + 'user=' + get_local("uname") + '&id=' + id;
    }
    else if(Type__ === "get_allows_type_filters")
    {
        link = link + 'home_type=' + get_local("home_type");
    }
    else if(Type__ === "user_functions")
    {
        link = link + 'user=' + get_local("uname");
    }
    else
    {
        link = link + 'home_type=' + Type__ + '&area=' + area_index_ + '&paid_type=' + get_local("paid_type");
    }
    //Special character usage for AJAX, cannot send ampersand for some reason, standard?
    if(use_special_character)
    {
        link = link.replace(/&/g, special_characters[0]);
    }
    return link;
}

function login_form()
{
dl_d('<center><div id="Logo">Prana</div><div id="main_box"></div></center>');
}

function dashboard(Type_)
{
    //NEW
    set_addition_inner_HTML("content", "<div id='dash' class='dash'><a href='https://mokli-help.de/#/'><button class='dash_button_general'><img src=''/><label>Find basic ameneties</label><br><label>fff</label></button></a><button class='dash_button_general'><label>Find a job</label><br><label>fff</label></button><button class='dash_button_general'><label>Becoming a student</label><br><label>fff</label></button><button class='dash_button_general'><label>Hartz IV</label><br><label>fff</label></button><button class='dash_button_general'><label>Access to healthcare</label><br><label>fff</label></button><button class='dash_button_general'><label>Get help from a volunteer</label><br><label>fff</label></button></div>");

    //OLD
    if(Type_ == "home")
    {
        dl_d('<div id="home_"><center><br><div id="logo" style="font-size:132; float:none;"><img src="../Assets/Images/logo/prana_logo.png"></div><br><br><div id=home_src><div id="src_txt">'+dl_r(17)+'</div><br><br><form><input type="text" value="'+dl_r(18)+'" name="src_bx" id="src_bx" style="width: 300px; height: 33px;" onclick="javscript:val=document.getElementById(\'src_bx\').value;if(val==\''+dl_r(18)+'\'){remove_value(\'src_bx\');}" onblur="val=document.getElementById(\'src_bx\').value;if(val==\'\'){document.getElementById(\'src_bx\').value='+dl_r(18)+';}"><select id="src_in" value="In"></select><input type="button" value=">" name="src_bx" style="width: 35px; height: 33px; background-color: rgba(9, 103, 126, 1.0);" onclick="javascipt:val=document.getElementById(\'src_bx\').value; redirect(\'search\');"></form></div><br><div id="home_buttons"><div id="button1"><a href="javascript:redirect(\'content\', \'food\', '+get_local("area")+');"><img src="../Assets/Images/icons/icon_food.png" width="50px" height="50px"><br>'+dl_r(19)+'</div></a><div id="button2"><a href="javascript:redirect(\'content\',\'housing\','+get_local("area")+');"><img src="../Assets/Images/icons/icon_housing.png" width="50px" height="50px"><br>'+dl_r(20)+'</a></div><div id="button3"><a href="javascript:redirect(\'content\',\'medical\', '+get_local("area")+');"><img src="../Assets/Images/icons/Icon_health.png" width="50px" height="50px"><br>'+dl_r(21)+'</a></div><div id="button4"><a href="javascript:redirect(\'content\',\'legal\', '+get_local("area")+');"><img src="../Assets/Images/icons/icon_legal and advice.png" width="50px" height="50px"><br>'+dl_r(22)+'</a></div><div id="button5"><a href="javascript:redirect(\'content\',\'study\', '+get_local("area")+');"><img src="../Assets/Images/icons/icon_study2.png" width="50px" height="50px"><br>'+dl_r(23)+'</a></div><div id="button6"><a href="javascript:redirect(\'content\',\'jobs\', '+get_local("area")+');"><img src="../Assets/Images/icons/icon_jobs.png" width="50px" height="50px"><br>'+dl_r(24)+'</a></div><div id="button7"><a href="javascript:redirect(\'content_modular\',\'\', '+get_local("area")+');"><img src="../Assets/Images/icons/icon_tips.png" width="50px" height="50px"><br>'+dl_r(108)+'</a></div></div></center></div></br></br><script>fill_search_type("src_in");</script>');
    }
    else if(Type_ == "profile")
    {
        dl_d("<center><div id='profile_container'><div id='title_profile'><script>document.write(def_lang[16]);</script></div></div></center>");
    }
}

function emergency_button()
{
    document.getElementByTag("body")[0].innerHTML = code_snippets[4];
}

function search_box()
{
    dl_d(code_snippets[5]);
}

function draw_selectionmenu()
{
    document.getElementById("top_banner").innerHTML += "<br><div class='selectors' id='selectors'><input class='selector_button' type='button' value='> Shelter'/><input class='selector_button' type='button' value='> Food'/><input class='selector_button' type='button' value='> Medical'/><input class='selector_button' type='button' value='> Legal'/><input class='selector_button' type='button' value='> Jobs'/></div>";
    return;
}

function change_bookmark_content(itm, status)
{
    if(status==1)
    {
        itm.style.backgroundColor = 'rgb(240,240,240)';
    }
    else{ itm.style.backgroundColor = 'rgb(9, 103, 126)'; }
}

function change_transit_liking(Type_)
{
    //get_item dont work here? does my code suck ass?
document.getElementById("button_google_go_bus").checked = false;
document.getElementById("button_google_go_subway").checked = false;
document.getElementById("button_google_go_train").checked = false;
document.getElementById("button_google_go_tram").checked = false;

if(Type_ == "BUS")
{
    document.getElementById("button_google_go_bus").checked = true;
}
else if(Type_ == "SUBWAY")
{
    document.getElementById("button_google_go_subway").checked=true;
}
else if(Type_ == "TRAIN")
{
    document.getElementById("button_google_go_train").checked=true;
}
else if(Type_ == "TRAM")
{
    document.getElementById("button_google_go_tram").checked=true;
}
return;
}

//(optimize)
function change_transit_type(Type_)
{
document.getElementById("button_google_go_walking").style.backgroundColor = "rgba(9, 103, 126, 1)";
document.getElementById("button_google_go_car").style.backgroundColor = "rgba(9, 103, 126, 1)";
document.getElementById("button_google_go_public").style.backgroundColor = "rgba(9, 103, 126, 1)";
document.getElementById("button_google_go_bike").style.backgroundColor = "rgba(9, 103, 126, 1)";

if(Type_ == "WALKING")
{
document.getElementById("button_google_go_walking").style.backgroundColor = "rgba(255,127,36,1)";
}
else if(Type_ == "DRIVING")
{
document.getElementById("button_google_go_car").style.backgroundColor = "rgba(255,127,36,1)";
}
else if(Type_ == "TRANSIT")
{
document.getElementById("button_google_go_public").style.backgroundColor = "rgba(255,127,36,1)";
}
else if(Type_ == "BICYCLING")
{
document.getElementById("button_google_go_bike").style.backgroundColor = "rgba(255,127,36,1)";
}
}

function return_hometype()
{
    if(get_local("home_type") == "food")
    { return dl_r(19); }
    else if(get_local("home_type") == "housing")
    { return dl_r(20); }
    else if(get_local("home_type") == "medical")
    { return dl_r(21); }
    else if(get_local("home_type") == "legal & documents")
    { return dl_r(22); }
    else if(get_local("home_type") == "study")
    { return dl_r(23); }
    else if(get_local("home_type") == "jobs")
    { return dl_r(24); }
    else{return "-/-";};
}

function return_hometype_image_url()
{
    if(get_local("home_type") == "food")
    { return "/Assets/Images/icons/icon_food.png"; }
    else if(get_local("home_type") == "housing")
    { return "/Assets/Images/icons/icon_housing.png"; }
    else if(get_local("home_type") == "medical")
    { return "/Assets/Images/icons/Icon_health.png"; }
    else if(get_local("home_type") == "legal & documents")
    { return "/Assets/Images/icons/icon_legal and advice.png"; }
    else if(get_local("home_type") == "study")
    { return "/Assets/Images/icons/icon_study2.png"; }
    else if(get_local("home_type") == "jobs")
    { return "/Assets/Images/icons/icon_jobs.png"; }
}

function change_hometype_select(change_title)
{
    get_item("home_type_button_text").value = return_hometype();
    get_item("home_type_button_image").src = return_hometype_image_url();
    if(change_title)
    {
        document.title = "Prana : " + return_hometype();
    }
}

function set_hometype_select_menu()
{
    //automate using div id as ver_def_sections+_drop_content
    get_item("food_drop_content").innerHTML='<img src="/Assets/Images/icons/icon_food.png"/ width="30" height="30"><div style="margin-top:5%; float:right; margin-right:20;">'+dl_r(19)+"</div>";
    get_item("food_drop_content").href='javascript:redirect(\'content\', \'' + var_def_sections[1] + '\')';
    get_item("housing_drop_content").innerHTML='<img src="/Assets/Images/icons/icon_housing.png"/ width="30" height="30"><div style="margin-top:5%; float:right; margin-right:20;">'+dl_r(20)+"</div>";
    get_item("housing_drop_content").href='javascript:redirect(\'content\', \'' + var_def_sections[2] + '\')';
    get_item("medical_drop_content").innerHTML='<img src="/Assets/Images/icons/Icon_health.png"/ width="30" height="30"><div style="margin-top:5%; float:right; margin-right:20;">'+dl_r(21)+"</div>";
    get_item("medical_drop_content").href='javascript:redirect(\'content\', \'' + var_def_sections[3] + '\')';
    get_item("legal_drop_content").innerHTML='<img src="/Assets/Images/icons/icon_legal and advice.png"/ width="30" height="30"><div style="margin-top:5%; float:right; margin-right:20;">'+dl_r(22)+"</div>";
    get_item("legal_drop_content").href='javascript:redirect(\'content\', \'' + var_def_sections[4] + '\')';
    get_item("study_drop_content").innerHTML='<img src="/Assets/Images/icons/icon_study2.png"/ width="30" height="30"><div style="margin-top:5%; float:right; margin-right:20;">'+dl_r(23)+"</div>";
    get_item("study_drop_content").href='javascript:redirect(\'content\', \'' + var_def_sections[5] + '\')';
    get_item("jobs_drop_content").innerHTML='<img src="/Assets/Images/icons/icon_jobs.png"/ width="30" height="30"><div style="margin-top:5%; float:right; margin-right:20;">'+dl_r(24)+"</div>";
    get_item("jobs_drop_content").href='javascript:redirect(\'content\', \'' + var_def_sections[6] + '\')';
}

function show_drop_down()
{
     document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.home_type_button_drop') && !event.target.matches('.home_type_button_image') && !event.target.matches('.home_type_down_select') && !event.target.matches('.home_type_button_text') && !event.target.matches('.emergency_button')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

function change_area()
{
document.getElementById("fil_area").selectedIndex = area;
}

function change_org()
{
document.getElementById("org_drop").selectedIndex = organization;
}

function change_lang()
{
    document.getElementById("lang_select").selectedIndex = lang;
    return;
}

function change_mo()
{
    document.getElementById("mo_opn").selectedIndex = get_local("mo");
    return;
}

function clear_ven_type_allows()
{
    set_local("vt", "");
    set_local("va", "");
    return;
}

function change_ven_type()
{
    document.getElementById("type_of_venue").selectedIndex = get_local("vt");
}

function change_ven_allows()
{
    document.getElementById("allows_of_venue").selectedIndex = get_local("va");
}

function change_to_tc()
{
    if(dy != 7 && mo != 12)
    {
        document.getElementById("time_opn").disabled = false;
        document.getElementById("time_cle").disabled = false;
        document.getElementById("time_opn").selectedIndex = get_local("to");
        document.getElementById("time_cle").selectedIndex = get_local("tc");
    }
    else
    {
        set_local("to", 24);
        set_local("tc", 24);
        document.getElementById("time_opn").disabled = true;
        document.getElementById("time_cle").disabled = true;
    }
}

function change_dy()
{
    if(mo != 12)
    {
        document.getElementById("dy_").disabled = false;
        set_index("dy_", get_local("dy"));
    }
    else
    {
        document.getElementById("dy_").disabled = true;
        set_index("dy_", 7);
    }
}

function change_paidtype(Type_)
{
    document.getElementById("buttn_free").style.backgroundColor = "rgba(9, 103, 126, 1)";
    document.getElementById("buttn_paid").style.backgroundColor = "rgba(9, 103, 126, 1)";
    document.getElementById("buttn_kosten").style.backgroundColor = "rgba(9, 103, 126, 1)";

    if(Type_ == def_types[0])
    {
        localStorage.setItem("paid_type", 0);
        document.getElementById("buttn_free").style.backgroundColor = "rgba(255,127,36,1)";
    }
    if(Type_ == def_types[1])
    {
        localStorage.setItem("paid_type", 1);
        document.getElementById("buttn_kosten").style.backgroundColor = "rgba(255,127,36,1)";
    }
    else if(Type_ == def_types[2])
    {
        localStorage.setItem("paid_type", 2);
        document.getElementById("buttn_paid").style.backgroundColor = "rgba(255,127,36,1)";
    }
    return;
}

function AJAX_SUCCESS_call_exiting_function(Type_)
{
    if(Type_ == 1)
    {
        set_markers(current_map);
    }
    return;
}

function filters_load(Type_)
{
//[1]: loads filters for side column
dl_d(code_snippets[1]);
}

function menu_home_type(Type_)
{
var out_ = "<br><div id='menu_main'>";
if(Type_ == "posting")
{
for(i=0; i <1; i++)
{
out_=out_+'<a href="javascript:redirect(\'content\', \'' + def_post_sections[i] + '\')">' + dl_r(82) + '</a>';
}
}
else if(Type_ == "profile")
{
for(i=0; i < def_profile_sections.length; i++)
{
if(i!=0)
{
out_=out_+'<a href="javascript:redirect(\'content\', \'' + def_profile_sections[i] + '\')"> | ' + def_profile_sections[i] + '</a>';
}
else
{
out_=out_+'<a href="javascript:window.history.back();">' + def_profile_sections[i] + '</a> ';
}
}
}
else{
    ndx=0;
for(i=18; i < 24; i++)
{
if(i!=18)
{
    out_=out_+'<a href="javascript:redirect(\'content\', \'' + var_def_sections[ndx] + '\')"> | ' + dl_r(i) + '</a>';
}
else
{
    out_=out_+'<a href="javascript:redirect(\'home\')">' + dl_r(4) + '</a> ';
}
ndx++;
}
}
out_=out_+"</div><br>";
document.write(out_);
}

function get_search_types()
{
    grammer_correct_sections = [];
    grammer_correct_sections.push(dl_r(109));
    grammer_correct_sections.push(dl_r(19));
    grammer_correct_sections.push(dl_r(20));
    grammer_correct_sections.push(dl_r(21));
    grammer_correct_sections.push(dl_r(22));
    grammer_correct_sections.push(dl_r(23));
    grammer_correct_sections.push(dl_r(24));
    return;
}

function set_relevant_search_item(name)
{
    set_index(name, get_local("search_txt_index"));
    return;
}

function fill_search_type(name)
{
    get_search_types();
    for(i=0; i < 7; i++)
    {
        var select = document.getElementById(name);select.options[select.options.length] = new Option(grammer_correct_sections[i],grammer_correct_sections[i]);
    }
    set_relevant_search_item(name);
    return;
}

function search(content, type)
{
    //SEARCH BY TYPE OF CONTENT. TYPE HELPS DETERMINE WHETHER TO REDIRECT TO CONTENT.php or CONTENT_MODULAR.php

    console.log(content, type);
}

function news_load()
{
    document.write('<div id="news_"></div>');
    return;
}

//NAME TO CHANGE TO SHOW FOOTER
function show_copyright()
{
    document.write("<div id='copyright' style='font-family:Arial,regular; font-size:14px;'>"+def_lang[3]+" | Help us build on <a href='https://github.com/Social-Incubator-Global/Prana-The-platform-for-the-homeless'>Github</a></div>");
    return;
}

function refresh_map()
{
    initMap();
    return;
}

function update_(Type_)
{
    if(Type_ == "distance")
    {
        alert("wkak");
    }
    return;
}

function overlay_menu()
{
    return;
}

function clear()
{
    document.getElementById("content").innerHTML = "";
    return;
}

function EVENT_HANDLER_ENTER()
{
    return;
}

function set_address_gmaps(address)
{
    def_addresses_gmaps.push(address);
    return;
}
