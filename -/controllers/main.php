<?php namespace plugins\balloon\controllers;

class Main extends \Controller
{
    public function bind()
    {
        $this->js('jquery.balloon');

        $this->widget(':' . $this->data['selector'], $this->getOptions());
    }

    public function hide()
    {
        $this->widget(':' . $this->data['selector'], 'hide');
    }

    public function provide()
    {
        $this->js('jquery.balloon');
    }

    private function getOptions()
    {
        $options = [];

        $pluginOptions = $this->getDefaultPluginOptions();

        ra($pluginOptions, $this->data('pluginOptions'));

        $pluginOptions['classname'] = k(8);

        remap($options, $this->data, 'event, contentSelector');

        $options['pluginOptions'] = $pluginOptions;

        return $options;
    }

    private function getDefaultPluginOptions()
    {
        return [
            'contents'     => '<div class="content"></div>',
            'position'     => 'bottom',
            'classname'    => '',
            'showDuration' => 0,
            'minLifetime'  => 0,
            'hideDuration' => 5000,
            'offsetX'      => 0,
            'tipSize'      => 10,
            'delay'        => 0,
            'css'          => [
                'minWidth'        => "200px",
                'maxWidth'        => "200px",
                'padding'         => "15px",
                'borderRadius'    => "6px",
                'border'          => "1px solid #A99465",
                'boxShadow'       => "1px 1px 5px rgba(0,0,0,0.5)",
                'color'           => "#7A6537",
                'backgroundColor' => "#ede0b8",
                'background'      => "linear-gradient(#FFF8E8 20%, #FFF8E1 100%)",
                'opacity'         => "1",
                'zIndex'          => "32767",
                'position'        => 'absolute',
                'textAlign'       => "left"
            ]
        ];
    }
}
