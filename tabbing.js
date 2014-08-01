function tabbing(elem)
{
    for(var i=1;i<=4;i++)
    {
        if(elem==i)
        {
            $('.cont-'+elem).css('display','block');
            $('.tab-'+elem).addClass('active');
        }
        else
        {
            $('.cont-'+i).css('display','none');
            $('.tab-'+i).removeClass('active');
        }
    }
}