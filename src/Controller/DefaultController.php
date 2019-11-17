<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
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
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function workers()
    {
        $workers = [
            [
                'name' => 'Rafał',
                'surname' => 'Gleba'
            ],
            [
                'name' => 'Adam',
                'surname' => 'Małysz'
            ],
            [
                'name' => 'Jan',
                'surname' => 'Kowalski'
            ]
        ];

        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode($workers));
        
        return $response;
    }
}
