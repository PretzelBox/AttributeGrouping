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

###Notes
This adds a few conveniences. The group is added as a data attribute called `data-group-name` and as a namespaced class. I.e. if you group name is "Country of Origin", it would result in a wrapper with the following markup.

```
<ul class="group-country-of-origin" data-group-name="Country of Origin">
<!-- Attributes here -->
</ul>
```
