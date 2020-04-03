<?php

namespace Fetcher\blocks\fetcher\table;

trait TableDesign {

    public function setBorderStyle($border_style,$border){
        return $this->isBorderPropertySet($border_style) ?  $this->setBorderProperty($border_style,$border) : "";
    }

    public function isBorderPropertySet($border_style){
        return isset($border_style["borderStyle"]) && isset($border_style["borderColor"])&& isset($border_style["brderWidth"]) && isset($border_style["borderUnit"]);
    }
    
    public function setBorderProperty($border_style,$border){
        $semiColon = "; ";
        return "border:none; " . $border . ": " . esc_html($border_style["brderWidth"]) . esc_html($border_style["borderUnit"]) . " " . esc_html($border_style["borderStyle"]) . " " . $border_style["borderColor"] . $semiColon;
    }

    public function setBorder($borderLayout){
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

    public function setBorderVertical($border_style){
        $border;
        if($border_style["borderLayout"] === "table-vertical"){
            $border = "border-bottom";
        }else{
            $border =  "";
        }
        return $this->setBorderStyle($border_style,$border);
    }

    public function create_inline_border_style($border_style){
        $border = $this->setBorder($border_style["borderLayout"]);
        return $this->setBorderStyle($border_style,$border);
    }

    public function create_inline_table_border_style($border_style){
        $semiColon = "; ";
        if($border_style["borderLayout"] === "table-vertical"){
            return $this->isBorderPropertySet($border_style) ?  $this->setBorderProperty($border_style,"border-right: ") : "";
        }else{
            return "border: none;";
        }
    }

    public function create_inline_font_style($style){
        $semiColon = "; ";
        $fontSize = is_numeric($style["fontSize"]) && isset($style["fontUnit"])  ? "font-size:". $style["fontSize"] . esc_html($style["fontUnit"]) . $semiColon : "";
        $fontColor = isset($style["fontUnit"])  ? "color:". $style["fontColor"] . $semiColon : "";
        $lineHeight = is_numeric($style["lineHeight"]) ? "line-height:". $style["lineHeight"] . $semiColon : "";
        $letterSpace = is_numeric($style["letterSpace"]) && isset($style["thLetterSpaceUnit"]) ? "letter-spacing:".$style["letterSpace"] . $style["thLetterSpaceUnit"] . $semiColon : "";
        $fontWeight = isset($style["fontWeight"]) ? "font-weight:".esc_html($style["fontWeight"]) . $semiColon : "";
        return $fontSize . $fontColor . $lineHeight. $letterSpace . $fontWeight;
    }
    
    public function create_inline_bg_color($style){
        $semiColon = "; ";
        return isset($style["bgColor"]) ? "background-color:".esc_html($style["bgColor"]) . $semiColon : "";
    }
    
    public function create_inline_align($style){
        $semiColon = "; ";
        return isset($style["align"]) ? "text-align:".esc_html($style["align"]) . $semiColon : "";
    }
}