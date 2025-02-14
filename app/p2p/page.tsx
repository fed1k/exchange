import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function P2PPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <CardTitle className="text-2xl font-bold mb-4">P2P Обмен</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-muted-foreground mb-4">
              Ведутся тех работы, сервис временно недоступен
            </p>
            <Link href="/deposit">
              <Button className="w-full mt-4">
                Внести криптовалюту
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
