import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/input";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function NewQuizPage() {
  return (
    <div className="flex justify-center p-6">
      <Card className="w-full max-w-lg ">
        <h1 className="text-3xl font-bold">Новый квиз</h1>

        <div className="space-y-2">
          <Label htmlFor="title">Название</Label>
          <Input
            id="title"
            type="text"
            placeholder="Введите название квиза"
          />
        </div>

        <Button className="w-full">
          Создать квиз
        </Button>
      </Card>
    </div>
  );
}