<?php

namespace Fetcher\utils;

class TableDesign {

static public function setBorderStyle($border_style,$border){
    return self::isBorderPropertySet($border_style) ?  self::setBorderProperty($border_style,$border) : "";
}

static public function isBorderPropertySet($border_style){
    return isset($border_style["borderStyle"]) && isset($border_style["borderColor"])&& isset($border_style["brderWidth"]) && isset($border_style["borderUnit"]);
}

static public function setBorderProperty($border_style,$border){
    $semiColon = "; ";
    return "border:none; " . $border . ": " . esc_html($border_style["brderWidth"]) . esc_html($border_style["borderUnit"]) . " " . esc_html($border_style["borderStyle"]) . " " . $border_style["borderColor"] . $semiColon;
}

static public function setBorder($borderLayout){
    if($borderLayout === "table-full"){
        return "border";
    }else if($borderLayout === "table-horizontal"){
        return "border-bottom";

    }else if($borderLayout === "table-vertical"){
        return "border-left";

    }else if($borderLayout === "table-empty"){
        return "";
    }
}

static public function setBorderVertical($border_style){
    $border;
    if($border_style["borderLayout"] === "table-vertical"){
        $border = "border-bottom";
    }else{
        $border =  "";
    }
    return self::setBorderStyle($border_style,$border);
}

static public function create_inline_border_style($border_style){
    $border = self::setBorder($border_style["borderLayout"]);
    return self::setBorderStyle($border_style,$border);
}

static public function create_inline_table_border_style($border_style){
    $semiColon = "; ";
    if($border_style["borderLayout"] === "table-vertical"){
        return self::isBorderPropertySet($border_style) ?  self::setBorderProperty($border_style,"border-right: ") : "";
    }else{
        return "border: none;";
    }
}

static public function create_inline_font_style($style){
    $semiColon = "; ";
    $fontSize = is_numeric($style["fontSize"]) && isset($style["fontUnit"])  ? "font-size:". $style["fontSize"] . esc_html($style["fontUnit"]) . $semiColon : "";
    $fontColor = isset($style["fontUnit"])  ? "color:". $style["fontColor"] . $semiColon : "";
    $lineHeight = is_numeric($style["lineHeight"]) ? "line-height:". $style["lineHeight"] . $semiColon : "";
    $letterSpace = is_numeric($style["letterSpace"]) && isset($style["thLetterSpaceUnit"]) ? "letter-spacing:".$style["letterSpace"] . $style["thLetterSpaceUnit"] . $semiColon : "";
    $fontWeight = isset($style["fontWeight"]) ? "font-weight:".esc_html($style["fontWeight"]) . $semiColon : "";
    return $fontSize . $fontColor . $lineHeight. $letterSpace . $fontWeight;
}

static public function create_inline_bg_color($style){
    $semiColon = "; ";
    return isset($style["bgColor"]) ? "background-color:".esc_html($style["bgColor"]) . $semiColon : "";
}

static public function create_inline_align($style){
    $semiColon = "; ";
    return isset($style["align"]) ? "text-align:".esc_html($style["align"]) . $semiColon : "";

}
}