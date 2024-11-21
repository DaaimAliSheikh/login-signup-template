import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DashboardCards = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold my-1">Welcome Admin</h1>
        <h3>{new Date().toDateString()}</h3>
      </div>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card
          onClick={() => navigate("/dashboard/influencers")}
          className="hover:cursor-pointer hover:bg-muted"
          x-chunk="dashboard-01-chunk-0"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold"> Influencers</div>
            <p className="text-xs text-muted-foreground">
              View the list of influencers
            </p>
          </CardContent>
        </Card>
        <Card
          onClick={() => navigate("/dashboard/users")}
          className="hover:cursor-pointer hover:bg-muted"
          x-chunk="dashboard-01-chunk-1"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Users</div>
            <p className="text-xs text-muted-foreground">
              View the list of users
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default DashboardCards;
