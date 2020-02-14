// JavaScript Document
$(document).ready(function() {
    var info = $(".websiteinfo").text() + new Date().getFullYear();
    $(".websiteinfo").text(info);
});