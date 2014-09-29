##Usage

This jquery plugin can be called on any Browse By Attribute widget:

```
$('.BrowseByAttribute').groupAttributes();
```

In your widget layout, define the header class and footer class on data attributes on the parent `<ul>` element. The classes on this element will be reused for each group.

```
<ul class="nav nav-stacked nav-pills" data-header-class="group-header" data-footer-class="group-footer">
<!-- Rest of widget layout-->
</ul>
```
