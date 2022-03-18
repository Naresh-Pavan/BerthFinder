var seat=prompt("Enter your seat number:")
function berth_type(seat)
{    
    if (seat > 0 && seat < 73)
        if (seat % 8 == 1 || seat % 8 == 4)
        alert(seat + " is lower berth");
        else if (seat % 8 == 2 || seat % 8 == 5)
        alert(seat + " is middle berth");
        else if(seat % 8 == 3 || seat % 8 == 6)
        alert(seat+ " is upper berth");
        else if(seat % 8 == 7)
        alert(seat +" is side lower berth");
        else
        alert(seat + 'is side upper berth');
    else
    alert(seat +'invalid seat number');
}
berth_type(seat);
