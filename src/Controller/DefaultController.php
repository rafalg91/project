<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function index()
    {
        return $this->render('default/index.html.twig', [
            'controller_name' => 'DefaultController',
        ]);
    }

    /**
     * @Route("/workers", name="users")
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
}
