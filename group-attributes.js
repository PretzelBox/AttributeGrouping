(function($){
  $.fn.groupAttributes = function(){
    return this.each(function(){
  
      var $ctl = $(this);
  
      if( !$ctl.hasClass('AttributeNavigationLinks') )
        throw new TypeError('This method is only valid on Browse By Attribute type widgets!');
  
      var $defaultList = $ctl.children('ul').first(),
          headerClass = $defaultList.data('header-class'),
          footerClass = $defaultList.data('footer-class'),
          $divGroupTmpl = $('<div></div>').addClass('attribute-group'),
          $wrapTmpl = $('<ul></ul>').addClass( $defaultList.attr('class') ).addClass('attribute-group-list'),
          $headerTmpl = $('<div></div>').addClass(headerClass),
          $footerTmpl = $('<div></div>').addClass(footerClass);
  
      $ctl.find('li').each(function(){
        var $attr = $(this);
  
        if( $attr.hasClass(headerClass) ){
          var $newGroup = $divGroupTmpl.clone(),
              $newList = $wrapTmpl.clone(),
              group = $attr.text();
  
          $newGroup.attr('data-group-name', group);
          $newGroup.addClass( 'group-' + group.replace(/ /g,'-').toLowerCase() );
          $newGroup.append($headerTmpl.clone().append($attr.find('.ControlHeader')));
          $newGroup.append($newList);
  
          $ctl.append($newGroup);
        }
        else if( $attr.hasClass(footerClass) )
          $ctl.find('.attribute-group').last().append( $footerTmpl.clone().append($attr.children()) );
        else
          $ctl.find('.attribute-group').last().find('.attribute-group-list').append( $attr );
      });
  
      $defaultList.hide();
  
    });
  };
})(jQuery);
