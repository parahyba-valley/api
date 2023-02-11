import { Controller, Get, Param } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import Company from './entities/company.entity';

@Controller()
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Get('companies')
  async index(@Param() params: any): Promise<Company[]> {
    return this.companiesService.findAll(params.page, params.perPage);
  }
}
