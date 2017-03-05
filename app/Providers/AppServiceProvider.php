<?php

declare(strict_types=1);

namespace App\Providers;

use Illuminate\Config\Repository;
use Illuminate\Foundation\Application;
use Illuminate\Support\ServiceProvider;

/**
 * Class AppServiceProvider.
 */
class AppServiceProvider extends ServiceProvider
{
    /**
     * @var Application
     */
    protected $app;

    /**
     * @retrun void
     * @throws \InvalidArgumentException
     */
    public function register()
    {
        $this->loadProviders($this->app->make(Repository::class));
    }

    /**
     * @param  Repository $repository
     * @return void
     */
    private function loadProviders(Repository $repository)
    {
        $providers = [];

        if ($this->app->environment() === 'production') {
            $providers = (array) $repository->get('app.production_providers', []);
        }
        if ($this->app->isLocal()) {
            $providers = (array) $repository->get('app.local_providers', []);
        }

        foreach ($providers as $provider) {
            $this->app->register($provider);
        }
    }
}
