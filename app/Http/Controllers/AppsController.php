<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AppsController extends Controller
{
    protected $docs;

    public function __construct(\App\Documentation $docs)
    {
        $this->docs = $docs;
    }

    public function img($file)
    {
        return $this->image('', $file);
    }

    public function image($dir, $file)
    {
        $dir = $dir == '' ? 'resources/assets/img' : 'resources/assets/img/' . $dir;

        $reqEtag = \Request::getEtags();
        $genEtag = $this->docs->etag($file,$dir);

        if(isset($reqEtag[0])){
            if($reqEtag[0] == $genEtag) {
                return response('' , 304);
            }
        }

        $image = $this->docs->image($file,$dir);

        return response($image, 200, [
            'Cache-control' => 'public, max-age=0',
            'Etag' => $genEtag
        ]);
    }
}
