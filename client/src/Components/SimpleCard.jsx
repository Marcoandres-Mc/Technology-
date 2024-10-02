import {
    Card,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
   
  export function SimpleCard({ title, description }) {
    return (
      <Card className="mt-6 w-[200px]">
        <CardBody className="flex flex-row gap-5">
          <Typography variant="h5" color="blue-gray" className="text-center align-middle">
            {title}
          </Typography>
          <Typography variant="h5" color="blue-gray" className="text-center align-middle">
            {description}
          </Typography>
        </CardBody>
      </Card>
    );
  }

  export default SimpleCard;