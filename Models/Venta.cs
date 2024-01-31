﻿using System;
using System.Collections.Generic;

namespace WSVenta.Models;

public partial class Venta
{
    public long Id { get; set; }

    public DateTime Fecha { get; set; }

    public int IdClient { get; set; }

    public decimal Total { get; set; }

    public virtual ICollection<Concepto> Conceptos { get; set; } = new List<Concepto>();

    public virtual Cliente IdClientNavigation { get; set; } = null!;
}
