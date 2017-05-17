<?php

namespace App;

use File;

class Documentation
{

    public function image($file,$dir)
    {
        return \Image::make($this->path($file,$dir));
    }

    protected function path($file, $dir = 'docs')
    {
        $file = ends_with($file, ['.md', '.png', '.jpg', '.jpeg']) ? $file : $file . '.md';
        $path = base_path($dir . DIRECTORY_SEPARATOR . $file);

        if (!File::exists($path)) {
            abort(404, '요청하신 파일이 없습니다.');
        }

        return $path;
    }

    public function etag($file,$dir)
    {
        $lastModified = File::lastModified($this->path($file, $dir));

        return md5($file . $lastModified);
    }
}
