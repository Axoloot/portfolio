terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  alias  = "eu-west-1"
  region = "eu-west-1"
}

provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"
}

module "cloudfront" {
  source = "git@github.com:Axoloot/terrafrom_cloudfront.git"

  domain       = "cyrildelajudie.fr"
  bucket_name  = "cyrildelajudie.fr"
  domain_names = ["cyrildelajudie.fr", "www.cyrildelajudie.fr"]
  subject_alternative_names = [
    "*.cyrildelajudie.fr",
    "cyrildelajudie.fr",
    "mailer.cyrildelajudie.fr",
    "www.cyrildelajudie.fr",
  ]
}