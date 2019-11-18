<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\WorkerRepository")
 */
class Worker
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $surname;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $email;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Skill", inversedBy="workers")
     */
    private $skills;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Access", inversedBy="workers")
     */
    private $accesses;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Logs", mappedBy="worker", orphanRemoval=true)
     */
    private $logs;

    public function __construct()
    {
        $this->skills = new ArrayCollection();
        $this->accesses = new ArrayCollection();
        $this->logs = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getSurname(): ?string
    {
        return $this->surname;
    }

    public function setSurname(string $surname): self
    {
        $this->surname = $surname;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * @return Collection|Skill[]
     */
    public function getSkills(): Collection
    {
        return $this->skills;
    }

    public function addSkill(Skill $skill): self
    {
        if (!$this->skills->contains($skill)) {
            $this->skills[] = $skill;
        }

        return $this;
    }

    public function removeSkill(Skill $skill): self
    {
        if ($this->skills->contains($skill)) {
            $this->skills->removeElement($skill);
        }

        return $this;
    }

    /**
     * @return Collection|access[]
     */
    public function getAccesses(): Collection
    {
        return $this->accesses;
    }

    public function addAccess(access $access): self
    {
        if (!$this->accesses->contains($access)) {
            $this->accesses[] = $access;
        }

        return $this;
    }

    public function removeAccess(access $access): self
    {
        if ($this->accesses->contains($access)) {
            $this->accesses->removeElement($access);
        }

        return $this;
    }

    /**
     * @return Collection|Logs[]
     */
    public function getLogs(): Collection
    {
        return $this->logs;
    }

    public function addLog(Logs $log): self
    {
        if (!$this->logs->contains($log)) {
            $this->logs[] = $log;
            $log->setWorker($this);
        }

        return $this;
    }

    public function removeLog(Logs $log): self
    {
        if ($this->logs->contains($log)) {
            $this->logs->removeElement($log);
            // set the owning side to null (unless already changed)
            if ($log->getWorker() === $this) {
                $log->setWorker(null);
            }
        }

        return $this;
    }
}
