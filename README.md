# AW.FontAwesome.WPF
With **AW.FontAwesome.WPF** you can use the popular icon library FontAwesome 6.3.0 within your .NET7 WPF applications.

## Installation
You can download source and build project on your own or install package via nuget

```PowerShell
PM> Install-Package AW.FontAwesome.WPF
```

## Usage

First define namespace in your xaml file:

```xaml

<UserControl x:Class="My.Awesome.View"
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:fa="http://schemas.aw.fontawesome.wpf">

  ...
  
</UserControl>

```

After that you can use the **fa:Icon** control to display awesome icons. Property **FaName** specifies the icon name to display. If an icon has more then one style you can switch it with property **FaStyle** between **Brands**, **Regular** und **Solid**. The **fa:Icon** control stretches automatically to container size or you can set **Width** and **Height** to size your icon.

```xaml

 ...
 
  <Grid>
    
    <fa:Icon FaName="font-awesome" />
  
  </Grid>
 
 ...

```
