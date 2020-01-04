<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class ApiController extends AbstractController
{
    /**
     * @Route("/api/workers", name="workers")
     * @return JsonResponse
     */
    public function workers()
    {
        $workers = [
            [
                'id' => 1,
                'name' => 'Rafał',
                'surname' => 'Gleba'
            ],
            [
                'id' => 2,
                'name' => 'Adam',
                'surname' => 'Małysz'
            ],
            [
                'id' => 3,
                'name' => 'Jan',
                'surname' => 'Kowalski'
            ]
        ];

        return new JsonResponse($workers);
    }

    /**
     * @Route("/api/skills", name="skills")
     * @return JsonResponse
     */
    public function skills()
    {
        $workers = [
            [
                'id' => 1,
                'name' => 'PHP',
            ],
            [
                'id' => 2,
                'name' => 'JavaScript',
            ],
            [
                'id' => 3,
                'name' => 'MySQL',
            ]
        ];

        return new JsonResponse($workers);
    }
}
