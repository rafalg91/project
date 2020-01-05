<?php

namespace App\Controller;

use App\Entity\Skill;
use App\Entity\Worker;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;

class ApiController extends AbstractController
{

    /**
     * @Route("/api/workers", name="workers")
     * @return JsonResponse
     */
    public function workers()
    {
        $workers = $this->getDoctrine()->getRepository(Worker::class)->findAll();

        return new Response(json_encode($workers));
    }

    /**
     * @Route("/api/skills", name="skills")
     * @return JsonResponse
     */
    public function skills()
    {
        $skills = $this->getDoctrine()->getRepository(Skill::class)->findAll();

        return new Response(json_encode($skills));
    }
}
