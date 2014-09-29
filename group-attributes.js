$.fn.groupAttributes = function(){
  return this.each(function(){

    var $ctl = $(this);

    if( !$ctl.hasClass('AttributeNavigationLinks') )
      throw new TypeError('This method is only valid on Browse By Attribute type widgets!');

    var $defaultList = $ctl.children('ul').first(),
        $wrapTmpl = $('<ul></ul>').addClass( $defaultList.attr('class') ),
        headerClass = $defaultList.data('header-class'),
        footerClass = $defaultList.data('footer-class');

    $ctl.find('li').each(function(){
      var $attr = $(this);

      if( $attr.hasClass(headerClass) )
        $ctl.append($wrapTmpl.clone());

      $ctl.find('ul').last().append( $attr );
    });

    $defaultList.hide();

  });
};
